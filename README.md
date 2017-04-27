# Angular2 with SequelizeJS and Swagger

[![Paypal](https://img.shields.io/badge/donate-paypal-blue.svg)](https://goo.gl/mgesnb)
[![Gratipay Team](https://img.shields.io/gratipay/Angular-VN/shields.svg)](https://gratipay.com/Angular-VN)


[![Build Status](https://travis-ci.org/AngularVN/angular2-sequelize-swagger.svg?branch=master)](https://travis-ci.org/AngularVN/angular2-sequelize-swagger)
[![Code Climate](https://codeclimate.com/github/AngularVN/angular2-sequelize-swagger/badges/gpa.svg)](https://codeclimate.com/github/AngularVN/angular2-sequelize-swagger)
[![Coverage Status](https://coveralls.io/repos/github/AngularVN/angular2-sequelize-swagger/badge.svg)](https://coveralls.io/github/AngularVN/angular2-sequelize-swagger)
[![dependencies Status](https://david-dm.org/AngularVN/angular2-sequelize-swagger/status.svg)](https://david-dm.org/AngularVN/angular2-sequelize-swagger)
[![devDependencies Status](https://david-dm.org/AngularVN/angular2-sequelize-swagger/dev-status.svg)](https://david-dm.org/AngularVN/angular2-sequelize-swagger?type=dev)

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
npm run build
npm start
```

## Start WWW with port 80
```
export PORT=80
npm start
```


## Push to heroku

```
heroku create
git push heroku master
```
