module.exports = ({ env }) => ({
  host: env('HOST', 'hsg-database.cx0sxzd5t1ff.ap-south-1.rds.amazonaws.com'),
  port: env.int('PORT', 5432),
  app: {
    keys: env.array('APP_KEYS'),
  },
})
