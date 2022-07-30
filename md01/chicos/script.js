// Capturar a imagem aqui no JS
const meme = document.getElementById("meme");
const div = document.getElementById("exemplo-append-chi");

meme.addEventListener("click", (event) => {
  console.log(event);
  ("");
  //So como exemplo do que vem

  // Apenas como exemplo de como pegar o valor de um atributo do elemento capturado
  const imageSrc = meme.getAttribute("src");

  console.log(imageSrc);

  console.log(imageSrc[imageSrc.length - 4]);

  if (imageSrc[imageSrc.length - 5] === "1") {
    meme.setAttribute("src", "./assets/images/chico2.jpg");
  } else {
    meme.setAttribute("src", "./assets/images/chico1.jpg");
  }

  // Exemplo criando o elemento totalmente pelo JS

  //   meme.setAttribute("src")

  //   const newImgTag = document.createElement("img");

  //   newImgTag.setAttribute("src", "./assets/images/chico2.jpg");

  //   div.appendChild(newImgTag);

  //   meme.remove();
});
