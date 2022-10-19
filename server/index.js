const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const database = [
    {
        username: "kellonpark",
        password: "asdf1234"
    }
]

app.post("/login", (req, res) => {
    let {username, password} = req.body

    for (let i = 0; i < database.length; i++) {
        if (database[i].username === username) {
            if (database[i].password === password) {
                res.send('Successful login')
                return
            } else {
                res.send(`Incorrect password for ${username}`)
                return
            }
        }
    }
    res.send('No account exists with that username')
})

app.listen(5005, () => console.log('Running on 5005'))