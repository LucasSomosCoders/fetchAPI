
let contenedor = document.getElementById('container');

fetch('https://randomuser.me/api/?results=5')
  .then(response => response.json())
  .then(data => {
    console.log(`Nombre: ${data.results[0].name.first} Apellido: ${data.results[0].name.last} Titulo: ${data.results[0].name.title}`)
    for (let index = 0; index < data.results.length; index++) {
      const element = data.results[index];
      
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let p = document.createElement('p');
      let img = document.createElement('img');
      h2.innerText = element.name.first;
      h3.innerText = element.name.last;
      p.innerText = element.name.title;
      img.src = element.picture.large;
      contenedor.appendChild(h2);
      contenedor.appendChild(h3);
      contenedor.appendChild(p);
      contenedor.appendChild(img);
    }
  })
  .catch(err => console.log('Hubo un problema con la petición Fetch:' + err.message))
