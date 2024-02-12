import express from 'express'
import mysql2 from 'mysql2/promise'
import cors from 'cors' 


const app = express()
app.use(express.json())
app.use(cors())


const db = mysql2.createPool({
    host:'localhost',
    user:'root',
    password:'enzzomysql',
    database:'crud_books',
    dateStrings:'date'
})


app.get('/',async (req, res)=>{
    const sql = 'SELECT * FROM book'
    
    try {
        const [response] = await db.query(sql)
        res.json(response)
    } catch (error) {
        console.log(error)
    }
})


app.post('/create',async (req, res)=>{
    const sql = 'INSERT INTO book (publisher, name, date) VALUES (?,?,?)'
    const { publisher, name, date }  = req.body

    try {
        const [response] = await db.query(sql, [ publisher, name, date ])
        res.json(response)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error');
    }
})


app.put('/update/:id',async (req, res)=>{
    const sql = 'update book set publisher = ?, name = ?, date = ? where id = ?'
    const { publisher, name, date }  = req.body
    const id = req.params.id

    try {
        const [response] = await db.query(sql, [publisher, name, date, id])
        res.json(response)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error');
    }
}) 


app.delete('/delete/:id', async (req, res)=>{
    const sql = 'delete from book where id = ?'
    const id = req.params.id;
    try {
        const [response] = await db.query(sql, [id])
        res.json(response)
    } catch (error) {
        res.status(500).send('Error to delete book')
    }
})

app.get('/getrecord/:id',async (req,res)=>{
    const id = req.params.id
    const sql = 'select * from book where id = ?'

    try {
        const [response] = await db.query(sql,[id])
        res.json(response)
    } catch (error) {
        res.status(500).send('Error to delete book')
    }

})


app.listen(3000,()=>{
    console.log('Running...')
})
