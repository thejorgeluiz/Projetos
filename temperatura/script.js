function verificarTemperatura() {
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    let mensagem;

    if (temperatura < 7) {
        mensagem ="CONGELANDO";
    } else if (temperatura < 10) {
        mensagem = 'FRIO';
    } else if (temperatura < 26) {
        mensagem = 'ÓTIMO';
    } else {
        mensagem = 'MUITO QUENTE';
    }
    document.getElementById('resultado').innerText = mensagem;
}