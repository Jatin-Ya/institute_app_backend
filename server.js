const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: '.env' });

const port = process.env.PORT || 8000;

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
  console.log('DB connection successful!');
}).catch(err => {
  console.log(err);
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});