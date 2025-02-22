import 'dotenv/config';
import express from 'express';

const app = express();

const port = process.env.nPORT || 2000;

app.get('/',(req,res) => {
    res.send('Hello World');
});

app.get('/about',(req,res)=>{
   res.send('<address><strong>Address:</strong>9/371/S,B.B Ghosh road Serampore Hooghly<p>pin : 712203</p></address>');
});

app.get('/contact',(req,res)=>{
    res.send('<address><strong>Phone:</strong>8910698745</address>');
});

app.get('/natureimg',(req,res)=>{
    res.send('<img src="https://www.w3schools.com/w3images/nature.jpg" alt="Nature" style="width:20%">');
});

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})
