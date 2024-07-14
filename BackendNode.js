const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/api/weight', (req, res) => {
    const { weight } = req.body;
    if (weight) {
        res.json({ weight });
    } else {
        res.status(400).json({ error: 'Invalid weight' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
