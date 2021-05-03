var entrada_1 = prompt('Digite primeiro número para ser comparado: ');
var entrada_2 = prompt('Digite segundo número para ser comparado: ');

if (entrada_1 == entrada_2) {
  document.write("Primeiro número é igual ao segundo número --> " + entrada_1 + " == " + entrada_2);
}
else if (entrada_1 > entrada_2) {
  document.write("Primeiro número é maior que segundo número --> " + entrada_1 + " > " + entrada_2);
}
else {
  document.write("Primeiro número é menor que segundo número --> " + entrada_1 + " < " + entrada_2);

}
document.write('<br/><br/>')
document.write('<br/>____________________________ <br/>')
document.write('<br/><br/>')

var nota = prompt('Digite  a nota do aluno: ');
var faltas = prompt('Digite a quantidade de faltas: ');
var media = 7
var faltas_max = 10

if ((nota >= media) && (faltas < faltas_max)) {
  document.write("PASSOU");
}
else if ((nota >= media) && (faltas > faltas_max)) {
  document.write("PASSOU POR NOTA MAS REPROVOU POR FALTA");
}
else if ((nota < media) && (faltas > faltas_max)) {
  document.write("REPROVOU POR NOTA E REPROVOU POR FALTA");
}
else if ((nota < media) && (faltas < faltas_max)) {
  document.write("REPROVOU POR NOTA APENAS");
}
