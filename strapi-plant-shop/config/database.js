module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ccu5l7cgqg4a92863sjg-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapiplantshop'),
      user: env('DATABASE_USERNAME', 'pedro'),
      password: env('DATABASE_PASSWORD', 'xG3p8dS0MLV5ZsZyqwzek1FZtCGPG499'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
