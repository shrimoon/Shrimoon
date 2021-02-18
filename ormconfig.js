const databaseSettings = require(`./dist/env`).databaseSettings;

module.exports = {
  ...databaseSettings,
  type: 'postgres',
  entities: [`dist/entities/*.js`],
  migrations: ['migration/*.ts'],
  cli: {
    migrationsDir: 'migration',
  },
  synchronize: false,
};
