import type { knex, Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  dev: {
    client: "better-sqlite3",
    connection: {
      filename: "./src/SQL/database/dev.sqlite",
    },
    useNullAsDefault: true,
    migrations: { directory: "./src/SQL/migrations" },
  },
  test: {
    client: "better-sqlite3",
    connection: {
      filename: "./src/SQL/database/test.sqlite",
    },
    useNullAsDefault: true,
    migrations: { directory: "./src/SQL/migrations" },
  },

  production: {
    client: "mysql2",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
} ;
// export default config
module.exports = config;
