const express = require('express')
const app = express()
const PORT = 2022
app.use(express.json())
app.use('/', require('./routes/router'))



app.listen(PORT, () => { console.log(`SERVER IS RUNNING AT PORT :: ${PORT}`); })
