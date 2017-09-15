import http from 'http'; // Node built-in
import express from 'express'; // Server
import cors from 'cors'; // Cross origin request enabler
import morgan from 'morgan'; // Request / Response logging
import bodyParser from 'body-parser'; // Body parsing middleware
import helmet from 'helmet'; // Express.js security middleware
import expressValidator from 'express-validator'; // Express.js validator middleware
import track from './api/track';
import tracklist from './api/tracklist';

logger.info('Server is being set up ...');

// Create a server
const app = express();
app.server = http.createServer(app);

// Setup morgan to use winston to log requests
app.use(morgan('combined', {
  stream: { write: fp.flow(fp.trim, logger.info) }, // Trim message before writing
}));

// Security
app.use(helmet());

// Enable Cross origin requests
app.use(cors({
  methods: ['GET', 'POST'],
  allowedHeaders: [
    'Content-Type',
  ]
}));

var api = express.Router();

api.post('/track', track.create);
api.post('/tracklist', tracklist.create);

app.get('/',)


export default app;
