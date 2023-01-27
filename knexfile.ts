import { config } from "dotenv";
import { Knex } from "knex";

interface KnexConfig {
  [key: string]: Knex.Config
}

const configs: KnexConfig = {

  development: {
    client: process.env.DEV_CLIENT,
    connection: {
      database: process.env.DEV_DATABASE,
      user: process.env.DEV_USER,
      password: process.env.DEV_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: process.env.STAGING_CLIENT,
    connection: {
      database: process.env.STAGING_DATABASE,
      user: process.env.STAGING_USER,
      password: process.env.STAGING_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: process.env.PROD_CLIENT,
    connection: {
      database: process.env.PROD_DATABASE,
      user: process.env.PROD_USER,
      password: process.env.PROD_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

export default configs