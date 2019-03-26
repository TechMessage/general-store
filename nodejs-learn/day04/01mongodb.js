/**
 * mongodb3.x 使用方法
 */

const MongoClient = require('mongodb').MongoClient;


let url = 'mongodb://localhost:27017'

let dbName = 'student'


MongoClient.connect(url, function (err, client) {
    //
    const db = client.db(dbName); //获取到db对象

    let stu = db.collection('student').find();

    //  console.log()
    let results = [];
    stu.each(function (err, doc) {
        if (err) {
            return;
        }
        if (doc) {
            results.push(doc)
        } else {
            client.close()
            console.log(results)
        }
    })
})


