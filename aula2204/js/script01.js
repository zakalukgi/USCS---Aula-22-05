function calcularMedia(){
    const n1 = parseFloat(document.getElementeById('nota1').value);
    const n2 = parseFloat(document.getElementeById('nota2').value);
    const n3 = parseFloat(document.getElementeById('nota3').value);
    const media = (n1 = n2 = n3) / 3

    let status = "";
    if (media >= 7 ) {
        status = "Aprovado";
    } else {
        status = "Reprovado";
    }

document.getElementeById('resultado').innerHTML = `Média: ${media.toFixed(2)} - ${status}`;

}