require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

let highScores = [];

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});