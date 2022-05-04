function answer() {
  let option = prompt("Qual e sua resposta ?");
  let tentativaAtual = 1;
  let maximoTentativas = 2;

  while (
    option.toLowerCase() != "a" &&
    option.toLowerCase() != "b" &&
    option.toLowerCase() != "c" &&
    option.toLowerCase() != "d"
  ) {
    alert("Resposta inexistente \nDigite (A B C D)");
    option = prompt("Qual e sua resposta ?");
  }

  while (tentativaAtual <= maximoTentativas) {
    if (option.toLowerCase() == "c") {
      alert("VOCÊ ACERTOU, PROXIMA PERGUNTA !");
      tentativaAtual = maximoTentativas;
      window.location.href='../../fase/etapa3/dickep3.html'
    } else if (tentativaAtual == 1) {
      alert("VOCÊ ERROU, SÓ TÊM " + tentativaAtual + " CHANCE!");
      tentativaAtual = tentativaAtual;
      option = prompt("Qual e sua resposta ?");
    } else {
      tentativaAtual == maximoTentativas;
      alert("HUUM NÃO FOI DESSA VEZ :(\nTente Novamente!");
      window.location.href='../../fase/dick.html'
    }

    tentativaAtual++;
  }
}