const express = require ('express');
const cors = require ('cors');
const config = require('./config');
const mongoose = require('mongoose');
const app = express();
const helmet = require('helmet');

//for testing only
const loadTestData = require('./testData');

// connects our back end code with the database
mongoose.connect(config.DB,
 { useNewUrlParser: true , 
    useUnifiedTopology: true
 }, 
 );
let db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to the database');
    loadTestData();
});
db.on('error', (err) => console.log('Error ' + err));



// import routes
const postRoutes = require('./routes/post.routes');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(helmet());
app.use('/api', postRoutes);


app.listen(config.PORT, () => {
    console.log('Server is running on port:', config.PORT );
});