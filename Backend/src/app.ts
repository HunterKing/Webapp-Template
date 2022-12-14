import dotenv from 'dotenv';
import express from 'express';

const App = () => {
	//Get stuff from env variables.
	dotenv.config({
		path: '.env'
	});


	const expressApp = express();
	//Make server listen on some port
	const port = process.env.APP_PORT;
	expressApp.listen(port, () => console.log(`Running on port ${port}`));
}

export default App;