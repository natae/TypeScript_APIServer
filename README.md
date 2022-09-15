# API Server with TypeScript
## npm
- typescript
- express
- mysql2
# How to run
```
# go to deploy directory
cd deploy

# build api-server
docker-compose build

# run api-server with mysql
docker-compose up
```
# API Specification
## Creating account
- Method: POST
- Uri: /account/create
- Request Body
  - {"nickname": "\[NICKNAME\]"} 
- Resonse Body
  - Success: \[LAST_INSERT_ID\] 
## Getting account
- Method: POST
- Uri: /account/get
- Request Body
  - {"nickname": "\[NICKNAME\]"}
- Resonse Body
  - {"AccountId": \[ACCOUNT_ID\], "Nickname": "\[NICKNAME\]"}
## Deleting account
- Method: POST
- Uri: /account/delete
- Request Body
  - {"nickname": "\[NICKNAME\]"}
- Resonse Body
  - Success: \[AFFECTED_ROW_COUNT\]
# To-do
- logger
- error handling
