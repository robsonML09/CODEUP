document.addEventListener("DOMContentLoaded", () => {
  const btnEnviar = document.getElementById("enviar");

  btnEnviar.addEventListener("click", () => {
    const nome = document.getElementById("nome").value.trim();
    const servico = document.getElementById("servico").value;

    if (!nome || !servico) {
      alert("Por favor, preencha seu nome e selecione um serviço.");
      return;
    }

    // Substitua pelo número do seu WhatsApp
    const numero = "5581999999999";

    const mensagem = `Olá! Meu nome é ${nome} e tenho interesse no serviço de ${servico}.`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
});