// tslint:disable-next-line
require('dotenv').config();
import * as  bodyParser from 'body-parser';
import * as express from 'express';
import * as _ from 'lodash';

import { Block, generateNextBlock, getBlockchain } from './blockchain';
import { connectToPeers, getSockets, initP2PServer } from './p2p';

const httpPort: number = parseInt(process.env.HTTP_PORT) || 3003;
const p2pPort: number = parseInt(process.env.P2P_PORT) || 6003;

const initHttpServer = (myHttpPort: number) => {
    const app = express();
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: false }))

    app.use((err, req, res, next) => {
        if (err) {
            res.status(400).send(err.message);
        }
    });
    app.get('/blocks', (req, res) => {
        res.send(getBlockchain());
    });
    app.get('/block/:hash', (req, res) => {
        const block = _.find(getBlockchain(), { 'hash': req.params.hash });
        res.send(block);
    });
    app.post('/mineBlock', (req, res) => {
        if (req.body.data == null) {
            res.send('data parameter is missing');
            return;
        }
        const newBlock: Block = generateNextBlock(req.body.data);
        if (newBlock === null) {
            res.status(400).send('could not generate block');
        } else {
            const newBlockResponse = {
                meta: {
                    status: res.statusCode,
                    message: res.statusMessage || 'success'
                },
                data: { block: newBlock } || {}
            }
            res.send(newBlockResponse);
        }
    });
    app.get('/points/:nic', (req, res) => {
        const blocks = _.filter(getBlockchain(), { data: { to: req.params.nic } })
        const point = blocks.reduce((s, f) => s + f.data.point, 0);
        const pointResponse = {
            meta: {
                status: res.statusCode,
                message: res.statusMessage || 'success'
            },
            data: { point } || {}
        }
        res.send(pointResponse);
    });
    app.get('/peers', (req, res) => {
        res.send(getSockets().map((s: any) => s._socket.remoteAddress + ':' + s._socket.remotePort));
    });
    app.post('/addPeers', (req, res) => {
        connectToPeers(req.body.peers);
        res.send();
    });

    app.post('/stop', (req, res) => {
        res.send({ 'msg': 'stopping server' });
        process.exit();
    });
    app.listen(myHttpPort, () => {
        console.log('Listening http on port: ' + myHttpPort);
    });
};

initHttpServer(httpPort);
initP2PServer(p2pPort);
