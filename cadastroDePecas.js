var listaDePecas = [
  "AB",
  "Peça 2",
  "Peça 3",
  "Peça 4",
  "Peça 5",
  "Peça 6",
  "Peça 7",
  "Peça 8",
  "Peça 9",
  "Peça 10",
  "Peça 11",
];

console.log("Quantidade de peças");

if (listaDePecas.length > 10) {
  console.log("Capacidade insufienciente");
} else {
  console.log("Capacidade suficiente");
}

console.log("Quantidade de caracteres");

for (let contador = 0; contador < listaDePecas.length; contador++) {
  var pecaAtual = listaDePecas[contador];

  if (pecaAtual.length < 3) {
    console.log(
      pecaAtual +
        ": a peça possuir nome inferior a 3 caracteres e não pode ser cadastrado"
    );
  } else {
    console.log(pecaAtual + ": a peça pode ser cadastrada");
  }
}

console.log("Peso da peça");

var pesoDaPecaEmGramas = 50;

if (pesoDaPecaEmGramas >= 100) {
  console.log("Peso suficiente");
} else {
  console.log("Valor insuficiente");
}
