import express from express;

const app = express();
const port = 4000;

app.use(express.static("public"));

app.get("/", (req,res)=> {
    res.render("index.ejs");
});

app.listen(port, function(){
    console.log(`Server listening at port ${port}`);
});