import express from 'express';

const app = express();
const port: number = 3000;

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.send("Hello, World!")
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
}); 