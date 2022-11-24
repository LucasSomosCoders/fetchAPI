
import fetch from 'node-fetch';



fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    console.log(`Nombre: ${data.results[0].name.first} Apellido: ${data.results[0].name.last} Titulo: ${data.results[0].name.title}`)
  })