// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient

//Instead of using above like structure we will use ECMA6 feature 

const { MongoClient, ObjectID } = require('mongodb')




const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(error + "Unable to connect to database")
    }

    const db = client.db(databaseName)
        //xxxxxxxxxxxxxxxxxxxxx
        //For inserting a single record to collection insertOne is used
        //xxxxxxxxxxxxxxxxxxxxx
        // db.collection('users').insertOne({
        //     name: 'Sid',
        //     age: 21
        // }, (error, result) => {
        //     if (error) {
        //         return console.log('Unable to insert user')
        //     }

    //     console.log(result.ops)
    // })

    //xxxxxxxxxxxxxxxxxxxxx
    //For inserting a multiple record to collection insertOne is used
    //xxxxxxxxxxxxxxxxxxxxx
    // db.collection('users').insertMany([{
    //     name: 'Jake',
    //     age: 21
    // }, {
    //     name: 'Jane',
    //     age: 28

    // }], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert document")
    //     }

    //     console.log(result.ops)
    // })

    //xxxxxxxxxxxxxxxxxxxxxTASKSxxxxxxxxxxxxxxxxxx
    //INSERT
    // db.collection('tasks').insertMany([{
    //     description: 'Visit Doctor for eye check up',
    //     completed: false
    // }, {
    //     description: 'Repair laptop',
    //     completed: false

    // }, {
    //     description: 'Stdy',
    //     completed: true
    // }], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert document")
    //     }

    //     console.log(result.ops)
    // })

    //READ ONE
    // db.collection('tasks').findOne({ _id: new ObjectID("61e7dccbe24aa45b48bc5d6c") }, (error, user) => {
    //         if (error) {
    //             return console.log("Unable to fetch")
    //         }
    //         console.log(user)
    //     })
    //     //READ MANY CURSOR TO ARRAY
    // db.collection('tasks').find({ completed: false }).toArray((error, user) => {
    //     console.log(user)
    // })

    //UPDATE
    //BASIC:>
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("61e7da50ebc807639cef3faa")

    // }, {
    //     //we use update operator here
    //     $set: {
    //         name: 'John'
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //FORMATTED ACCORDING TO DAILY USAGE IN NODEJS DEVELOPMENT FIELD
    //BELOW IS SAME JUST DELETED THE CONST VARIABLE AND JOINED .then
    // db.collection('users').updateOne({
    //     _id: new ObjectID("61e7da50ebc807639cef3faa")

    // }, {
    //     //we use update operator here check documentation
    //     // $set: {
    //     //     name: 'John'
    //     // }
    //     $inc: {
    //         age: 1
    //     }

    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //Update MANY
    // db.collection('tasks').updateMany({
    //     completed: false

    // }, {
    //     //we use update operator here
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    //Delete
    // db.collection('tasks').deleteOne({
    //     description: 'Visit Doctor for eye check up'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })





})