let express =  require('express');
let app =  express();
app.disable("x-powered-by");
let port =  process.env.PORT  ||  8080

app.get('/', (req, res) => {
    return res.status(200).json({ nome:  'Alexandre Lima' });
});

let server = app.listen(port, () => {
    console.log(`Application running on ${port}`);
});
module.exports  = server;