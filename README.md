### Node.js server

|||
|---|---|
|Node|v18.2.0|
||express|

#### Scripts
dev: `$npm run dev`
build `$npm run build`

#### libraries
- knex
https://knexjs.org/guide/

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