### Node.js server

|||
|---|---|
|Node|v18.2.0|
| framework|express|

#### Scripts
dev: `$npm run dev`
build `$npm run build`

#### libraries
- knex
https://knexjs.org/guide/
`knex migrate:make migration_name`
`knex migrate:run`
`knex seed:make seed_name`
`knex seed:run`

- express-validator
https://github.com/express-validator/express-validator

- bcrypt
https://www.npmjs.com/package/bcrypt

```js
const saltRounds = 10;
const myPlaintextPassword = 'password';
const saltPassword = 'not_bacon';

bcrypt.hash(myPlaintextPassword, saltRounds,(err, hash) => {
  console.log
})
    bcrypt.compare(myPlaintextPassword, hash, (err, result) => {
      console.log(result);
    }
bcrypt.compareSync("B4c0/\/", hash); // true
bcrypt.compareSync("not_bacon", hash); // false

```


#### env key
`.env`
```
PORT

DEV_CLIENT
DEV_DATABASE
DEV_USER
DEV_PASSWORD

STG_CLIENT
STG_DATABASE
STG_USER
STG_PASSWORD

PROD_CLIENT
PROD_DATABASE
PROD_USER
PROD_PASSWORD
```