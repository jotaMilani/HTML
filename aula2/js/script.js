alerta = () => {
  alert("Você foi avisado!");
};

const enviar = () => {
  let nome = document.getElementById("nome").value;

  document.getElementById(
    "resposta"
  ).innerHTML = `<h2>Olá ${nome}, formulário enviado com sucesso!</h2>`;

  if (nome == "") {
    alert("Bem Vindo!");
  } else {
    alert(`Olá ${nome}, bem vindo!`);
  }
};
