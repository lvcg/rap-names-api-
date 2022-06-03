const { request, response } = require('express')
const express = require('express')
const app = express()
const PORT = 5500

const rappers = {
    '21 Savage': {
    'age' : 29,
    'birthName' : 'Sheyaa bin abrham joseph',
    'birthLocation' : 'London, England',
},
    '2 Chainz': {
    'age' : 30,
    'birthName' : 'Juan Pablo',
    'birthLocation' : 'Miami, Florida',
},
    '50 Cent': {
    'age' : 32,
    'birthName' : 'Curtis Jackson',
    'birthLocation' : 'New York City, New York',
}
}


app.get('/', (req, res) => {
  res.sendFile(_dirname + '/index.html')
})

app.get('/api:name',(req, res) => {
    const rapperName = request.params.name.toLowerCase
    if(rappers[rapperName]){
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen (PORT, () => {
  console.log(`Server is running on port 5500`)
})