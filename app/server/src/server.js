const path = require("path");
const express = require('express')
const app = express()
const port = 8000




app.use('/api/*', (req, res) => {
    res.send('Api route!')
  })
  

  app.use(express.static(path.join(__dirname, "public", "build")));
  app.use(express.static("public"));
  
  app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "build", "index.html"));
  });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})