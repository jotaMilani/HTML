trocaTema = () => {
  //   const html = document.documentElement;

  //   document.querySelector("body").style.background = "Pink";
  document.documentElement.classList.toggle("light");

  const isLight = document.documentElement.classList.contains("light");

const imagem = isLight ? "./img/rg.jpg" : "./img/rg2.jpg"

document.querySelector("#perfil img").setAttribute("src", imagem)
};
