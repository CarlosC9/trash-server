import { sequelize } from './database';
import express from 'express';
var cors = require('cors');

const PORT = 3000;

// Importing routes
import binRoutes from './routes/Bin.router';
import binTypeRoutes from './routes/BinType.router';
import userRoutes from './routes/User.router';
import binPrivateRoutes from './routes/BinPrivate.router';

// Initalizacion
const app = express();

// Settings
app.set('port', process.env.PORT || PORT);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/bin', binRoutes)
app.use('/binType', binTypeRoutes);
app.use('/user', userRoutes);
app.use('/binPrivate', binPrivateRoutes);

// Static Files

// Starting the server
(async () => {

    await sequelize.sync({ force: false });

    app.listen(app.get('port'), () => {
        console.log(`Server on port ${app.get('port')}`);
    });

})();
