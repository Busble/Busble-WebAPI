# Busble-WebAPI

Busble-WebAPI

## System Require

ต้องการ ```npx``` และ ```nodejs 10``` ขึ้นไป

ต้องการ ```docker engine``` และ ```docker-compose```

ต้องการ ```PostMan``` ในการ ```Test api```

## Usage

Initial System docker
``` docker-compose up ```

Initial System nodejs Project
``` cd site && npm install ```

Run express Api
``` npm start ```

Run express Api Debug on Linux and MacOsx
``` DEBUG=myapp:* npm start ```


Run express Api Debug on Window
``` DEBUG=myapp:* npm start ```

**Test Api**
``` http://localhost:3000 ```

**View Database** 
```
Run with phpmyadmin

username smm
password smmdevpw 

http://localhost:8080 
```

## Sequelize

วิธีการ run migrate databases

``` cd site ```

``` npx sequelize-cli db:migrate ```

วิธีการ run rollback migrate databases
``` npx sequelize-cli db:migrate:undo --name 20191030084550-create-user.js ```

วิธีการ run seed data
``` npx sequelize-cli db:seed --seed 20191030090752-demo-user.js ```

วิธีการ run rollback seed data
``` npx sequelize-cli db:seed:undo --seed 20191030090752-demo-user.js ```

``` Commands:
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file  [aliases: migration:create]
  sequelize model:generate                    Generates a model and its migration  [aliases: model:create]
  sequelize seed:generate                     Generates a new seed file  [aliases: seed:create]
 ```

## model sequelize usage
https://sequelize.org/master/manual/models-usage.html#-code-find--code----search-for-one-specific-element-in-the-database

## todo

หา lib passport javascript

ทำ graphql

ทำ user action, like, post, comment 