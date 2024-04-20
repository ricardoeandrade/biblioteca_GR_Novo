// fetch("http://localhost:3000/usuario")
//   .then((response) => response.json())
//   .then((data) => {
//     const livrosDiv = document.getElementById("livros");
//     data.forEach((livro) => {
//       livrosDiv.innerHTML += `<p>${livro.nome} - ${livro.autor}</p>`;
//     });
//   });

  async function getUsuarios(){

    fetch("http://localhost:3000/usuario")
  .then((response) => response.json())
  .then((data) => {
    const usuarioDiv = document.getElementById("usuario");
    data.forEach((usuario) => {
      usuarioDiv.innerHTML += `<p>${usuario.nome} - ${usuario.email  } ${usuario.idade} </p>`;
    });
  });

  
}
getUsuarios();

async function getlivro(){

  fetch("http://localhost:3000/livro")
  .then((response) => response.json())
  .then((data) => {
    const livrosDiv = document.getElementById("livros");
    data.forEach((livro) => {
      livrosDiv.innerHTML += `<p>${livro.nome} - ${livro.email  } ${livro.idade} </p>`;
    });
  });

}
  getlivros()

 


  


