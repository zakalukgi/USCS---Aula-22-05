function gerarIdade(){
    const idade = parseInt(document.getElementById('idade').value);

    if (idade <=12) { 
        document.getElementById('resultado').innerHTML = 'Você é uma Criança!';
    }
    else if (idade <=18) {
        document.getElementById('resultado').innerHTML = 'Você é um Adolescente!';
    }
    else if (idade >=19){
        document.getElementById('resultado').innerHTML = 'Você é um Adulto!';
    }
}