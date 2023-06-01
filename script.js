
function verificarMatricula(event) {
    event.preventDefault(); 


const dataNascimento = new Date(document.getElementById("dataNascimento").value);
const rendaTotal = parseFloat(document.getElementById("rendaTotal").value);
const numMoradores = parseInt(document.getElementById("numMoradores").value);


const idadeMinima = new Date();
    idadeMinima.setFullYear(idadeMinima.getFullYear() - 16); 
  const rendaPerCapitaMaxima = 1.5 * 1320; 


let mensagem = "";

if (dataNascimento > idadeMinima) {
    mensagem += "Você precisa ter acima de 16 anos. ";
}

if (rendaTotal / numMoradores > rendaPerCapitaMaxima) {
    mensagem += "⚠️ Sua renda per capita deve ser igual ou inferior a R$  " + rendaPerCapitaMaxima.toFixed(2) + ". ";
}

const mensagemElement = document.getElementById("mensagem");

if (mensagem === "") {
    mensagemElement.innerHTML = "🎆 Parabéns! Você pode se matricular nos cursos de qualificação PSG do Senac.<br>Telefone: (62) 3219-5180";
    mensagemElement.className = "success";
    particlesJS.load('particles-js', '../caminho/para/particles.json');

} else {
    mensagemElement.innerHTML = mensagem;
    mensagemElement.className = "error";
    particlesJS.load('particles-js', '../caminho/para/particles.json');
}
}


document.getElementById("matriculaForm").addEventListener("submit", verificarMatricula);

// script.js

function calcularMedia() {
    nota1 = parseFloat(document.getElementById("nota1").value);
    nota2 = parseFloat(document.getElementById("nota2").value);
    nota3 = parseFloat(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3) / 3;

    document.getElementById("resultado").textContent = "Média: " + media.toFixed(2);
return media
}

function calcularPresencas() {
    let pr1 = parseInt(document.querySelector('input[name="presenca1"]:checked').value)
    let pr2 = parseInt(document.querySelector('input[name="presenca2"]:checked').value)
    let pr3 = parseInt(document.querySelector('input[name="presenca3"]:checked').value)
    let pr4 = parseInt(document.querySelector('input[name="presenca4"]:checked').value)
    let pr5 = parseInt(document.querySelector('input[name="presenca5"]:checked').value)
    let pr6 = parseInt(document.querySelector('input[name="presenca6"]:checked').value)
    let pr7 = parseInt(document.querySelector('input[name="presenca7"]:checked').value)
    let pr8 = parseInt(document.querySelector('input[name="presenca8"]:checked').value)
    let pr9 = parseInt(document.querySelector('input[name="presenca9"]:checked').value)
    let pr10 = parseInt(document.querySelector('input[name="presenca10"]:checked').value)
    let pr11 = parseInt(document.querySelector('input[name="presenca11"]:checked').value)
    let pr12 = parseInt(document.querySelector('input[name="presenca12"]:checked').value)
    let pre = (pr1 + pr2 + pr3 + pr4 + pr5 + pr6 + pr7 + pr8 + pr9 + pr10 + pr11 + pr12)
      let prm = ((pre / 12) * 100)
    return prm
}

function avaliarAluno() {
    let media = parseFloat(calcularMedia());
    let presencas = parseFloat(calcularPresencas());

    console.log("Presenças: " + media)
    console.log("Presenças: " + presencas)

    resultado = document.getElementById("resultado");

    if (media >= 6.0 && presencas >= 75) {
        resultado.textContent = "Aluno Aprovado!";

    }
    else if (media >= 5 && media < 6 && presencas >= 75) {
        resultado.textContent = "Recuperação!";
    }
    else {
        resultado.textContent = "Aluno Reprovado!";
    }
}