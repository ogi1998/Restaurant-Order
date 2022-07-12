# Restaurant-Order
## Description
- This is the application to make orders from restaurants.
- User needs to register or login in order to be able to see restaurants or order from them.
- This is the MVP (Minimum Valuable Product) for order application with basic functionality to be upgraded later on.
- Demo is available at: ``https://cloggys.herokuapp.com/``

## Technologies
- For the database I used MongoDB 
- for the backend functionality i used Node.js and Express.js
- for the frontend i used React.js library 

## Installation
1. Firstly you should clone this app using ``git clone``
2. You should install necessary dependencies from server using ``npm install`` and from client by going to client directory using ``cd client`` and then ``npm install``
3. You should also set environment variables by creating .env file at the root of the project directory, .env file should contain the following:
  - DB = <URL_TO_MONGO_DB_URI>
  - PORT = <PORT_ON_THE_SERVER_RUNNING_THE_APP>
  - JWT_SECRET = <SECRET_KEY_FOR_JWT>
  
## Running
- After successfully setting up everything and install the app, you can run need to run both the server and the client 
(unless you already built the client for production):
  - to run the server you need to be in root directory and run ``npm start`` command
  - to run the client you need to go into client directory using ``cd client`` and then run the client script using ``npm start``
