const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 1308;

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send(' Knock Knock... Who's there... ITS GRAFITTI TIME B^D ');
});


mongoose.connect('mongodb+srv://ArtistsUnderground_Database:Exo-applied13marcus@exo-applied0013.j3mzc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("HIIII BABY... Guess whose connected...");
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 