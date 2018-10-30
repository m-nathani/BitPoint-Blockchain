# BitPoint - For the People, by the Government. 


## Transfer of Points by Government to public. How ? 
```
1. Bills
2. Tax payer
3. Trafics Rules
4. Banking miscounduct
5. Physically or Mentally disabled persons points would be more then average. (Good to have)
6. Street Crime
7. Theft
8. Other Criminal Activites
9. Government setting a threshold to give access to a specific persons.
   ...
```


## Benefits:
```
1. Bank Loans preference on the basis.
2. Discounts on goverment tickets.
3. Points used when applying for visa.
   etc
```


## Benefits of Blockchain for BitPoint
```
1. Greater transparency
	Is a type of distributed ledger.
	More accurate, consistent.
	Available to all users.
2. Enhanced security by helping to prevent fraud and unauthorized activity
	It is encrypted and linked to the previous transaction.
	Decentralized.
	Authentic/Trusted.
3. Improved traceability
	 Historical transaction of points can help to verify the authenticity and prevent fraud.
4. Reduced costs
	For Datacenters
	For managing security
	Any fees that are paid to trusted third parties.
5. Immutability
	once the data is pushed to the chain its very difficult to the change it back
```


## Installation with Docker
```
docker-compose up --build
```

## Installation
```
npm install
```

### Useful commands
```
HTTP_PORT=3003 P2P_PORT=6003 npm start
```

##### Get blockchain
```
curl http://localhost:3003/blocks
```

##### Mine the first block with only a coinbase transaction
```
curl -H "Content-type:application/json" --data '{"data" : { "to": "1234", "from": "4321", "point": 20, "reason": "bla bla" } }' http://localhost:3003/mineBlock
``` 

##### Add peer
```
curl -H "Content-type:application/json" --data '{"peers" : ["ws://bitpoint-node-1:6003", "ws://bitpoint-node-3:6005"]}' http://localhost:3004/addPeers
```
#### Query connected peers
```
curl http://localhost:3003/peers
```


#### A tutorial and credits for building a cryptocurrency 

```
https://lhartikk.github.io/

```

