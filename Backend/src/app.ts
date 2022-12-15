import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import { routes } from './routes'

// make and configure the application.
const app = express();
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// load the environment variables from the .env file
dotenv.config()
const port = process.env.APP_PORT;

//Routes
app.use('/', routes);


app.listen(port, () => console.log(`Listening on port ${port}`));
