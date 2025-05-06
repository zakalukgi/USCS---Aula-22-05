function somaPares(){
    numero = document.getElementById('numero').value;
    
    let i = 0;
    let resultado = 0;

    while ( i < numero)
    {
        if ( i %2 == 0)
        {
            resultado = resultado + i;

        }
        i++;
    }  
    document.getElementById('resultado').innerHTML = 'A soma é: ' + resultado;
}