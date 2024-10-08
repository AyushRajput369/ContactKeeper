const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect DataBase
connectDB();

app.get('/', (req, res) =>
    res.json({ msg: 'welcome to the Contact Keeper API...'})
)

//Define Routes **when we hit this api/users etc end-point it will look into this routes/users file**
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));