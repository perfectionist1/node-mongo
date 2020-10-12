const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ["Asad", "Tamim", "Moin", "Mushfique", "Abir"];

app.get('/', (req, res) => {     
    const fruit = {
        product: 'pen',
        price: '10',
    }
    res.send(fruit); 
})

// app.get('/fruits/banana', (req, res) => {
//     res.send({fruit: 'banana', quantity: 1000, price: 7000});
// })

app.get('users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query.sort);
    const name = users[id];
    res.send({id, name});
})

//post
app.post('/addUser', (req, res) => {
    console.log('Post req send');
})


app.listen(3000, () => console.log('Listening to port 3000'));