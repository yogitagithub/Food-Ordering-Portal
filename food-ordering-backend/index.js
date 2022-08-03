const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors())

const mongoDB = require('mongodb');
const fs = require("fs");
const port = 3001;

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const { MongoClient, ServerApiVersion, MongoRuntimeError } = require('mongodb');

const password = encodeURIComponent('Y0git@mongodb');

const uri = `mongodb+srv://yv161993:${password}@cluster0.xfzig.mongodb.net/Training?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.get('/', (req, res) => {
    res.send('API Called')
})

app.post('/add-to-cart', async (req, res) => {
    console.log(req.body)
    res.send(req.body)
 })

app.get('/getFood', async(req, res) => {
    fs.readFile("items.json", function(err, data) {
        if (err) throw err;
        const food = JSON.parse(data);
        console.log(food);
        res.send(food);
    });
})

app.delete("/deleteFood/:id", async (req, res) => {
    console.log(req.params.id)
    res.send(req.params.id)
})

async function run() {



}

app.listen(port, async() => {
    run().catch(console.dir);

    console.log(`APP is running on ${port}`)

    client.connect(async err => {
        console.log(err);
        console.log("DB Connected")

    });
})
