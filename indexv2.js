
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('Public'));
app.get('/', (req, res) => {
    res.send('Sorry, there was an error.');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

