module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5555,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  autoLoadEntities: true,

  entities: ['dist/entities/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
  seeds: ['src/dist/seeds/**/*{.ts,.js}'],
  factories: ['src/dist/factories/**/*{.ts,.js}'],
};
