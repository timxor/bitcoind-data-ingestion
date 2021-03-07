# bitcoind-data-ingestion
crypto payments bitcoind data ingestion

See [requirements.md](https://github.com/timxor/bitcoind-data-ingestion/blob/main/requirements.md)

## 1. running docker/server/postgres

```
docker-compose up
docker ps

```

## 2. known accounts
-----------------------------------------------------------------------------
```
Wesley Crusher: mvd6qFeVkqH6MNAS2Y2cLifbdaX5XUkbZJ
Leonard McCoy: mmFFG4jqAtw9MoCC88hw5FNfreQWuEHADp
Jonathan Archer: mzzg8fvHXydKs8j9D2a8t7KpSXpGgAnk4n
Jadzia Dax: 2N1SP7r92ZZJvYKG2oNtzPwYnzw62up7mTo
Montgomery Scott: mutrAf4usv3HKNdpLwVD4ow2oLArL6Rez8
James T. Kirk: miTHhiX3iFhVnAEecLjybxvV5g8mKYTtnM
Spock: mvcyJMiAcSXKAEsQxbW9TYZ369rsMG6rVV
```
-----------------------------------------------------------------------------


## 3. input files containing account transactions
```
- [transactions-1.json](https://github.com/timxor/bitcoind-data-ingestion/blob/main/transactions-1.json) or raw [transactions-1.json (raw)](https://raw.githubusercontent.com/timxor/bitcoind-data-ingestion/main/transactions-1.json)
- [transactions-2.json](https://github.com/timxor/bitcoind-data-ingestion/blob/main/transactions-2.json) or raw [transactions-2.json (raw)](https://raw.githubusercontent.com/timxor/bitcoind-data-ingestion/main/transactions-2.json)
```

## 4. transaction structure
-----------------------------------------------------------------------------
```
"transactions":
  [
    {
      "involvesWatchonly":true,
      "account":"",
      "address":"mmFFG4jqAtw9MoCC88hw5FNfreQWuEHADp",
      "category":"receive",
      "amount":10,
      "label":"",
      "confirmations":4,
      "blockhash":"a9ed13caa3f13c7168d4c4c52c0439502e46541217eb74b84608510dbc0caf74",
      "blockindex":41,
      "blocktime":1524911287278,
      "txid":"a8afab2cc325086c50d080dc8b24bf49401870f8764a52f6f3cfd2304ffbb24f",
      "vout":84,
      "walletconflicts":[],
      "time":1524911246232,
      "timereceived":1524911246232,
      "bip125-replaceable":"no"
    }
  ],
  "removed":[],
  "lastblock":"4f66926440f1b39fcd5db66609737f877ce32abfc68a945fbd049996ce7d0da2"
```
-----------------------------------------------------------------------------


## 5. expected output format
-----------------------------------------------------------------------------
```
Deposited for Wesley Crusher: count=n sum=x.xxxxxxxx
Deposited for Leonard McCoy: count=n sum=x.xxxxxxxx
Deposited for Jonathan Archer: count=n sum=x.xxxxxxxx
Deposited for Jadzia Dax: count=n sum=x.xxxxxxxx
Deposited for Montgomery Scott: count=n sum=x.xxxxxxxx
Deposited for James T. Kirk: count=n sum=x.xxxxxxxx
Deposited for Spock: count=n sum=x.xxxxxxxx
Deposited without reference: count=n sum=x.xxxxxxxx
Smallest valid deposit: x.xxxxxxxx
Largest valid deposit: x.xxxxxxxx
```
-----------------------------------------------------------------------------
