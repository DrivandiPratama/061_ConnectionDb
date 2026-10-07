import express from 'express'
import pg from 'pg'
const app = express()
const port = 3000
const { Pool } = pg

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)
const pool = new Pool({
    user: 'postgres',   
    host: 'localhost',
    database: 'mahasiswa',
    password: '12345678',//sesuaikan dengan password database masing masing
    port: 5432
})

app.get('/', (req, res, next) => { 
    console.log("TEST DATA :");
    pool.query('Select * from biodata')
    .then(tesData => {
        console.log(tesData);
        res.status(500).send('Internal Server Error');
    });
})

app.listen(port, () => {
    console.log(`App runnning on port ${port}.`)
})