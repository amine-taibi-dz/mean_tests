var clrs = require('colors');
var mongoose = require('mongoose');
/** 
 * const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://taibi:Aharoni.Ziv@cluster0-novdt.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
mongoose.connect('mongodb+srv://taibi:Aharoni.Ziv@cluster0-novdt.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(v => console.log(v)).catch(e => console.log(e));
 * **/

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(v => console.log(v.models))
    .catch(e => console.log(e));

const Cat = mongoose.model('Cat', { name: String });
const Dog = mongoose.model('Dog', { name: String, age: Number });
const rex = new Dog({ name: 'rexey', age: 11 });
const kitty = new Cat({ name: 'Catty' });
rex.save().then((v) => {
    console.log("wooowf");
    console.log(v);
    console.log(v['_id']);
});
kitty.save().then(() => {
    console.log('meow');
    mongoose.disconnect().then(v => console.log("disc"))
        .catch(e => console.log(e));
}).catch(e => console.log(e.message));

//Cat.find()