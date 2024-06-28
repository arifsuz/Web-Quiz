require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;


const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE;

const db = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

app.get('/API/questions', async (req, res) => {
    const { data, error } = await db.from('questions').select('question, correct_answer, incorrect_answers');
    if (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ error: error.message });
        return;
    }
    res.json(data);
});

app.post('/API/users', async (req, res) => {
    const { username, scores } = req.body;
    try {
        const {error, status, statusText, data} = await db.from('users').insert([{ username,scores }]);
        if (error) {
            console.error('Error inserting user:', error);
            res.status(500).json({ error: error.message });
            return;
        }
        res.json({
            status,
            message: statusText,
        });
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/API/highscores', async (req, res) => {
    try {
        const { data, error } = await db.from('users').select('username, scores');
        if (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: error.message });
            return;
        }
        res.json(data);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});