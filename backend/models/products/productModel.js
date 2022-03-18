//hämtar in min produkt 
const Product = require('./productSchema');
//Product är en moogoose.model varför jag kan använda mig av de funktioner som finns https://mongoosejs.com/docs/api/model.html

//CREATE - lägga till en produkt med en POST
exports.addNewProduct = (req, res) => {
    //Mongoose Model.exists() kollar om produkten jag försöker skapa redan finns. Filterer på namnet som måste vara unikt för varje produkt
    Product.exists({ name: req.body.name }, (err, result) => {

        //kollar om om något går fel
        if(err) {
            return res.status(500).json(err)
        }
        //om jag får ett resultat då existerar produkten redan då har vi gjort en Bad request (400)
        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Det finns redan en produkt med det namnet'
            })
        }
        //om den inte finns då vill jag skapa en ny produkt
        //använder Mongoose Model.create() metoden för detta
        Product.create({
            name:       req.body.name,
            desc:       req.body.desc,
            price:      req.body.price,
            imageURL:   req.body.imageURL,
        })
        .then(data => {
            res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'Ny produkt skapad',
                data
            })
        })
        .catch(err => {
            res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Kunde inte skapa produkt',
              err
            })
        })
    })
}



