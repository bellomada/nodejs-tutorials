const express = require("express");

const app = express();

const PORT =process.env.PORT || 4000


// initialize my app 

 app.get("/", (req, res) =>{
     res.send("My first Nodejs connection");
 });

//  initialize the port 

app.listen(PORT, () =>{
    console.log(`Server is running at port: ${PORT}`);
    
});
