import dotenv from 'dotenv';
import express from 'express';

// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

export class Server {
	app = express();
}

// initialize server app
const server = new Server();
const port = process.env.APP_PORT;
// make server listen on some port
server.app.listen(port, () => console.log(`Listening on port ${port}`));
