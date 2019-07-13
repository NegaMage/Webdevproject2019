const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operation');
const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';
MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('Connected correctly to server');
    const db = client.db(dbname);
    dboper.insertDocument(db, { name: "Dhruv", des: "Good"}, "Nombres", (result) => {
        dboper.findDocuments(db, "Nombres", (docs) => {
            console.log("Found Docs: \n", docs);
            
            dboper.updateDocument(db, {name: "Dhruv" }, { des: "BAD" }, "Nombres", (result) => {
        console.log("Document updated: ", result.result);
            }); 
        }); 
    });
});