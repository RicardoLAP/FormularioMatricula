// Função para verificar a matrícula
function verificarMatricula(event) {
  event.preventDefault(); // Impede o envio do formulário
  
  // Obter os valores inseridos pelo usuário
  const dataNascimento = new Date(document.getElementById("dataNascimento").value);
  const rendaTotal = parseFloat(document.getElementById("rendaTotal").value);
  const numMoradores = parseInt(document.getElementById("numMoradores").value);
  
  // Critérios de matrícula
  const idadeMinima = new Date();
  idadeMinima.setFullYear(idadeMinima.getFullYear() - 16); // Subtrai 16 anos da data atual
  const rendaPerCapitaMaxima = 1.5 * 1320; // 1,5 vezes o salário mínimo de 1320 reais
  
  // Verificar os critérios de matrícula
  let mensagem = "";

  if (dataNascimento > idadeMinima) {
      mensagem += "Você precisa ter acima de 16 anos. ";
  }

  if (rendaTotal / numMoradores > rendaPerCapitaMaxima) {
      mensagem += "Sua renda per capita deve ser igual ou inferior a R$ " + rendaPerCapitaMaxima.toFixed(2) + ". ";
  }

  const mensagemElement = document.getElementById("mensagem");

  if (mensagem === "") {
      mensagemElement.innerHTML = "Parabéns! Você pode se matricular nos cursos de qualificação PSG do Senac.";
      mensagemElement.className = "success";
  } else {
      mensagemElement.innerHTML = mensagem;
      mensagemElement.className = "error";
  }
}

// Registrar o evento de envio do formulário
document.getElementById("matriculaForm").addEventListener("submit", verificarMatricula);
