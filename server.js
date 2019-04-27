const express = require('express');

const app = express();

// Body parser middleware
//@@  ใช้ body-parser ในการอ่าน body ของ request พูดง่ายๆคือ อ่าน ค่า POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//predefined port
//@@ กำหนดพอร์ท
const port = 5000;

app.get("/", (req,res) => {
    res.send("This is the default page")
})

app.listen(port, () => {
    console.log(`Server currently running on ${port}`)
})