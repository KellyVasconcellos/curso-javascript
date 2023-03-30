const listadenomes = ["gerson", "francisca", "maria"];

// Percorrer a lista
listadenomes.forEach(function (item, index, array) {
  console.log(item);
});

listadenomes.push('jorge')

const maria = listadenomes.filter(function(item) {
  return item == "maria"
})

console.log(maria);
