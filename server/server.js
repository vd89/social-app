import app from './express'
import config from '../config/config'

const {port} = config


// Server
app.listen(port,(err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${port}... 🐕 🐕`);
}
);