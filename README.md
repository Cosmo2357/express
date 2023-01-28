### Node.js Express server with Knext

|||
|---|---|
|Node|v18.2.0|
| framework|express|

#### 
`$npm run dev`
`$npm run build`

#### Knex

https://knexjs.org/guide/

`$ npm run knex migrate:make migration_name`
`$ npm run knex migrate:run`
`$ npm run knex seed:make seed_name`
`$ npm run knex seed:run`

- express-validator
https://github.com/express-validator/express-validator

#### bcrypt
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
// for express
PORT

// for knex
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