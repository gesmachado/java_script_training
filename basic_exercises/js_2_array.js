lista = Array();
lista[0] = 'Maçã';
lista[1] = 'Banana';
lista[2] =  'morango';

document.write(lista)
document.write('<br/><br/>');

// Laço for
for (var i = 0; i < lista.length; i++) {
  document.write(lista[i]);
  document.write('<br/><br/>');
}

// Array multidmimensional
var lista_multi = Array();
lista_multi['pessoas'] = Array();
lista_multi['animais'] = Array();

lista_multi['pessoas'] = ['Gustavo', 'Eduardo','Roberto'];
lista_multi['animais'] = ['Cavalo', 'Aranha','Cobra'];


for (var i = 0; i < lista_multi['pessoas'].length; i++) {
  document.write(lista_multi['pessoas'][i]);
  document.write('<br/><br/>');
}

for (var i = 0; i < lista_multi['animais'].length; i++) {
  document.write(lista_multi['animais'][i]);
  document.write('<br/><br/>');
}
