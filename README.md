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



## Installation

```
npm install
```

### Useful commands
```
npm start
```

##### Get blockchain
```
curl http://localhost:3001/blocks
```

##### Mine the first block with only a coinbase transaction
```
curl -H "Content-type:application/json" --data '{"data" : [{"txIns":[{"signature":"","txOutId":"","txOutIndex":1}],"txOuts":[{"address":"04bfcab8722991ae774db48f934ca79cfb7dd991229153b9f732ba5334aafcd8e7266e47076996b55a14bf9913ee3145ce0cfc1372ada8ada74bd287450313534a","amount":50}],"id":"f089e8113094fab66b511402ecce021d0c1f664a719b5df1652a24d532b2f749"}]}' http://localhost:3001/mineBlock
``` 

##### Add peer
```
curl -H "Content-type:application/json" --data '{"peer" : "ws://localhost:6001"}' http://localhost:3001/addPeer
```
#### Query connected peers
```
curl http://localhost:3001/peers
```


#### A tutorial for building a cryptocurrency
```
https://lhartikk.github.io/
```

