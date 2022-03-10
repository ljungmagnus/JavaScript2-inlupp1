//hämtar in app från app.js
const app = require('./app');
//importera mongoose för att kunna koppla upp mig på min MongoDB databas
const mongoose = require('mongoose');
//importerar dotenv för att kunna läsa .env fil där jag gömmer min connectionstring
require('dotenv').config();

//skapar portnummer att köra min app på. Väljer i första hand portnummer som ligger i .env annars 9999
const PORT = process.env.PORT || 9999;


//sparar sökväg till min lokala server i en variabel
const serverURI = 'http://localhost:' + PORT;
//hämtar sökväg till min databas från .env och sparar i en variabel
const mongoURI = process.env.MONGO_URI;


//startat igång min server och console loggar så att jag ser att den är igång 
app.listen(PORT, () => console.log('Server: ' + serverURI));

//kollar så att jag har en sökväg till databasen 
if(!mongoURI) {
    console.log('no connection string to database found')
} 
else {
    //kopplar upp mig mot min databas på MongoDB 
    mongoose.connect(mongoURI, () => console.log('Connected to Database'));
}
