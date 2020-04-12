import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

// bodyParser middleware - must be right above router
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asd'] }));
app.use(router);

app.listen(3000, () => {
    console.log('Listening to port 3000');
});
