
function calculadora(vitorias, derrotas){
    let nivel = "";
    let saldoVitorias = vitorias - derrotas;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias > 101) {
        nivel = "Imortal";
    }
    return {saldoVitorias, nivel};
}

function messageFinal(saldoVitorias, nivel){
    console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`)
}

const resultado = calculadora(23, 2);
messageFinal(resultado.saldoVitorias, resultado.nivel);