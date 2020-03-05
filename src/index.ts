import express from 'express';
// var cors = require('cors');

const PORT = 3000;

// Importing routes
import trashRoutes from './routes/trashRouter';

// Initalizacion
const app = express();
import './database';

// Settings
app.set('port', process.env.PORT || PORT);

// Middleware
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/trash', trashRoutes);


// Static Files


// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});