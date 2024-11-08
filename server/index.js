const express = require('express');
const {Pool} = require('pg');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//config postgreSQL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:{rejectUnauthorized: false}
});

//routes
app.get("/notes", async(req,res) => {
    const result = await pool.query("SELECT * FROM notes ORDER BY id DESC");
    res.json(result.rows);
})

app.post("/notes", async (req, res) => {
    const {title, content} = req.body;
    const result = await pool.query(
        "INSERT INTO notes (title, content) values ($1, $2) RETURNING *",
        [title, content]
    );
    res.json(result.rows[0])
})

app.delete("/notes/:id", async(req,res) => {
    const {id} = req.params;
    const result = await pool.query("DELETE FROM notes WHERE id = $1 RETURNING *", [id]);
    if(result.rows.length > 0){
        res.json({id: result.rows[0].id});
    }else{
        res.status(404).json({error:"note not found"})
    }
})

app.put("/notes/:id", async(req, res) => {
    const { id} = req.params;
    const {title, content} = req.body;   
    try{
        const result = await pool.query(
            "UPDATE notes SET title = $1, content = $2 WHERE id=$3 RETURNING *",
            [title, content, id]
        );
        if (result.rows.length > 0) {
            res.json(result.rows[0]); // return the id of the deleted record
          } else {
            res.status(404).json({ error: "Note not found" });
          }
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Failed to update note" });
    }
} )

app.listen(5000, () => {
    console.log("Server running on port 5000");
})