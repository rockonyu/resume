import * as path from 'path';
import * as http from 'http';
import * as express from 'express';
import setupAppRoutes from './middlewares/development';

// process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.HTTP_PORT = process.env.HTTP_PORT || '3000';

const app = express();

app.set('env', process.env.NODE_ENV);
app.use(express.static(path.join(__dirname, 'client')));

// application routes
setupAppRoutes(app);

http.createServer(app).listen(process.env.HTTP_PORT, () => {
    console.log(`HTTP server is now running on http://localhost:${process.env.HTTP_PORT}`);
});
