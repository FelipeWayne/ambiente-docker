const Express = require('express');

const PORT = 3000;

const app = new Express();

app.get('/', (request, response) => {
    response.status(200).send('Hello World')
})


app.listen(PORT, 
    () => console.log(`Express App is running on ${PORT} `)  )