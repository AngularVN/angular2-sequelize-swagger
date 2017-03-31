# Project of Stephen

## Requirement

- NodeJS


## Step by step

```
git clone https://github.com/AngularVN/angular2-sequelize-swagger.git
cd angular2-sequelize-swagger
npm i
npm run migrate
npm run seed
npm start
```
## Deploy with MySQL

Create new a database mysql. Then edit config/config.json ...

```
export NODE_ENV=stage
cd angular2-sequelize-swagger
npm i
npm run migrate
npm run seed
npm start
```

## Push to heroku

```
heroku create
git push heroku master
```
