#!/bin/sh


echo "Connecting peers to Node 1..."

curl -H "Content-type:application/json" --data '{"peers" : ["ws://bitpoint-node-2:6004", "ws://bitpoint-node-3:6005"]}' http://localhost:3003/addPeers

echo "Connecting peers to Node 2..."

curl -H "Content-type:application/json" --data '{"peers" : ["ws://bitpoint-node-1:6003", "ws://bitpoint-node-3:6005"]}' http://localhost:3004/addPeers

echo "Connecting peers to Node 3..."

curl -H "Content-type:application/json" --data '{"peers" : ["ws://bitpoint-node-2:6004", "ws://bitpoint-node-1:6003"]}' http://localhost:3005/addPeers
