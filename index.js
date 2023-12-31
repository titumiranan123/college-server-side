'use strict'

const express = require('express')
const cors = require('cors')
require("dotenv").config();
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {

    res.send('server is runing')

})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.VITE_USER_NAME}:${process.env.VITE_USER_PASSWORD}@cluster0.yhyrmpz.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        client.connect();




        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`server is running ${port}`)
})