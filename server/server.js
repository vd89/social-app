import app from './express'
import config from '../config/config'
import dbController from './controller/dbController';

const {port} = config


// DataBase controller
dbController()

// Server
app.listen(port,(err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${port}... 🐕 🐕`);
}
);