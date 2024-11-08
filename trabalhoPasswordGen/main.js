document.querySelector('.parametro-senha__botao');

const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;

const botoes = document.querySelectorAll('.parametro-senha__botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

console.log(botoes);

function diminuiTamanho(){
    if (tamanhoSenha > 1)
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha;
}