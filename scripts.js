function somar(){
    let entrada1 = parseFloat(document.getElementById('entrada1').value);

    let entrada2 = parseFloat(document.getElementById('entrada2').value);

    let resultado = entrada1 + entrada2;

    document.getElementById('resultado').textContent = resultado;
}

function subtrair(){
    let entrada1 = parseFloat(document.getElementById('entrada1').value);

    let entrada2 = parseFloat(document.getElementById('entrada2').value);

    let resultado = entrada1 - entrada2;

    document.getElementById('resultado').textContent = resultado;
}

function multiplicar(){
    let entrada1 = parseFloat(document.getElementById('entrada1').value);

    let entrada2 = parseFloat(document.getElementById('entrada2').value);

    let resultado = entrada1 * entrada2;

    document.getElementById('resultado').textContent = resultado;
}

function divisão(){
    let entrada1 = parseFloat(document.getElementById('entrada1').value);

    let entrada2 = parseFloat(document.getElementById('entrada2').value);

    let resultado = entrada1 / entrada2;

    document.getElementById('resultado').textContent = resultado;
}