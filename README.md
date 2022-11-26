# Tv Shows

CRUD application that allows you to create a list of tv shows you want to watch.

## Application Structure
- `app.js` - The entry point to our application
- `routes/` - This folder contains the route definitions for our API
- `model/` - This folder contains the schema definitions for our Mongoose models

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

## Installation

To get the Node server running locally:
- Clone this repo
- `npm install` to install all required dependencies
- `npm start` to start the local server

## Dependencies
- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 
- [ejs](https://github.com/mde/ejs) - It lets us embed JavaScript code in a template language that is then used to generate HTML