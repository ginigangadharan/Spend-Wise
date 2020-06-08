## Use case
Write an application that keeps track of a personal budget. The user can add expenses, income, and recurring costs to find out how much they are saving or losing over a period of time. For added complexity allow the user to specify a date range and see the net flow of money in and out of the personal budget for that time period.

## Screenshots

![first](https://user-images.githubusercontent.com/10876540/84030582-e2170680-a9c6-11ea-9802-3e8e12239f45.gif)

![reports](https://user-images.githubusercontent.com/10876540/84030650-f6f39a00-a9c6-11ea-8859-15361d729b05.gif)

## Tech/framework used
<b>Built with</b>
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [docker](https://www.docker.com/)

## How to run the project?
You can run the application as containers or as standalone apps. Follow the instructions to run the application.
- Without Docker.
- With Docker

## How to run the project without Docker?
Before proceeding make sure you have Git and MySQL installed up and running. Clone the reository. Create a database named spendwise and follow the below steps.
```
$ cd Spend-Wise
$ cd mysql/init-scripts
$ mysql -u username –-password=your_password spendwise < spendwise.sql
```

- Open config.json in Spend-Wise/spendwise-api/config.json, update the MySQL configuration details.
- Follow the next steps to run server and client.

### Server
```
$ cd Spend-Wise/spendwise-api
$ npm install
$ npm start
```
### Client

```
$ cd Spend-Wise/spendwise-client
$ npm install
$ npm start
```
- This will build and run client and server.
- Application will open in your default browser.

## How to run the project with Docker?
Before proceeding make sure you have installed Git, docker and docker-compose.
- To install docker and docker-compose, [Docker Compose](https://docs.docker.com/compose/)
- Clone the repository and issue the below commands.
```
$ cd Spend-Wise
$ docker-compose up -d
```
- This will build and run the react, node.js and MySQL containers.
- Navigate to http://localhost:3007 in a web browser to see your newly installed application.
- You can also use the following command to further explore the resulting configuration.
```
$ docker ps -a

CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                                         NAMES
5cdb8ee3bddf        spendwise-mysql     "docker-entrypoint.s…"   4 minutes ago       Up 4 minutes        3306/tcp, 33060/tcp, 0.0.0.0:3307->3307/tcp   spendwise-mysql
aa4bcacc3e5e        spendwise-api       "docker-entrypoint.s…"   4 minutes ago       Up 4 minutes        0.0.0.0:5000->5000/tcp                        spendwise-api
ecabd28bc17b        spendwise-client    "docker-entrypoint.s…"   4 minutes ago       Up 4 minutes        0.0.0.0:3007->3007/tcp                        spendwise-client

```
- To stop and remove the containers.
```
$ docker-compose down --rmi all
```
