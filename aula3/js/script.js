trocaTema = () => {
  //   const html = document.documentElement;

  //   document.querySelector("body").style.background = "Pink";
  document.documentElement.classList.toggle("light");

  const isLight = document.documentElement.classList.contains("light");

const imagem = isLight ? "./img/rg.jpg" : "./img/rg2.jpg"
document.querySelector("#perfil img").setAttribute("src", imagem)

const alt = isLight ? "Um homem de máscara com a mão no rosto, vestido com a camisa do al-rayyan" : "Um homem com a mão no rosto, vestindo a camisa do corinthians, e calvo"
document.querySelector("#perfil img").setAttribute("alt", alt)
};
