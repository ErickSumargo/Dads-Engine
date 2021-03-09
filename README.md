[<img src="assets/logo.png" width="120" height="120">]()
[<img align="right" src="assets/heroku.png" width="20%">](https://dads-engine.herokuapp.com)

[![CI](https://github.com/ErickSumargo/Dads-Engine/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ErickSumargo/Dads-Engine/actions/workflows/ci.yml)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FErickSumargo%2FDads-Engine.svg?type=small)](https://app.fossa.com/projects/git%2Bgithub.com%2FErickSumargo%2FDads-Engine?ref=badge_small)

Microservice for client [**<u>Dads</u>**](https://github.com/ErickSumargo/Dads) powered with GraphQL engine by Apollo GraphQL.

## Application
- Base URL: https://dads-engine.herokuapp.com
- Deployment platform: [Heroku](https://dashboard.heroku.com/)
- DBaaS provider: [JawsDB (MySQL - Kitefin 😂)](https://www.jawsdb.com/)

## Stacks
- [Apollo GraphQL](https://www.apollographql.com) - The GraphQL promoter.
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken) - JWT authenticator.
- [Node.js](https://nodejs.org/en) - The runtime environment.
- [Prisma](https://www.prisma.io) - ORM for MySQL.

## Architecture
[<img src="assets/architecture.png">]()

## How to run
- Install dependencies for local `node_modules`.
```
npm install
```
- Generate Prisma Client (**experimental**).
```
npx prisma generate --schema src/database/schema.prisma
```
- Setup your local MySQL database and retrieve the URL. The URL placeholder will be:
```
mysql://USER:PASSWORD@HOST:PORT/DATABASE, 
for example: mysql://root:1234@127.0.0.1:3306/dads
```
Note: If you don't set the password, you may omit the `:1234` part.
<br/>
<br/>
- Create new `.env` file in the root project's root folder, then set:
```
DATABASE_URL=[MYSQL_DATABASE_URL]
JWT_VERIFICATION=[SHARED_KEY] (see Contributing section 👇)
```
- Run the application.
```
npm start
```
- The default port for the application should be `4000` (you may configure it too). Now you can visit:
```
http://localhost:4000
```


## Contributing
[Let's get in touch](https://twitter.com/SumargoErick) if you're interested in contributing. Fork it, submit your PR.<br/>
Also feel free to open new issue, request features, or any kind of your support (join [**stargazers** ⭐](https://github.com/ErickSumargo/Dads-Engine/stargazers)️ | treat me [**coffee**](https://www.buymeacoffee.com/ErickSumargo) 😁).

## Licenses
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FErickSumargo%2FDads-Engine.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FErickSumargo%2FDads-Engine?ref=badge_large)