// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'mydb'),
      user: env('DATABASE_USERNAME', 'arpit'),
      password: env('DATABASE_PASSWORD', 'health'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: false,
    },
    debug: false,
  },
})
