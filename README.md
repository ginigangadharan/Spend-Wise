## Use case
Write an application that keeps track of a personal budget. The user can add expenses, income, and recurring costs to find out how much they are saving or losing over a period of time. For added complexity allow the user to specify a date range and see the net flow of money in and out of the personal budget for that time period.

## Screenshots

## Tech/framework used
<b>Built with</b>
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [docker](https://www.docker.com/)

## How to use?
Before proceeding make sure you have installed docker and docker-compose.
- To install docker and docker-compose, [Docker Compose](https://docs.docker.com/compose/)
- Clone the repository and issue the below commands.
```
$ cd %repo%
$ docker-compose up
```
- This will build and run the react, node.js and MySQL containers.
- Navigate to http://localhost:3001 in a web browser to see your newly installed application.
- You can also use the following command to further explore the resulting configuration.
```
$ docker ps
```
- To stop and remove the containers.
```
$ docker-compose down
```
