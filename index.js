const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

//const rootCall=(req,res)=>res.send('Thank you')

app.get("/", (req, res) => {
    const user = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
    res.send(user)
})

app.get('/fruits', (req, res) => {
    const fruit = {
        name: 'banana',
        quantity: 1
    }
    res.send(fruit)
})

const users = ['nusrat', 'keya', 'tarin', 'jaber', 'mike']
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    //console.log(req.query.sort)
    const name = users[userId]
    res.send({
        userId,
        name
    })
    //res.send(users[userId])
})

app.listen(3000, () => console.log("Node is listening"))