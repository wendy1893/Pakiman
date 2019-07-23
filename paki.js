var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";


var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

// este for con in y el console de la variable nueva que creamos nos muestra el numero
// de indices que hay dentro de la coleccion, itera sobre el indice
// el for con of de coleccion nos muetra todo el objeto interno del array creado en orden,
// itera sobre el objeto 
for(var pakimanes of coleccion)
{
  pakimanes.mostrar();
}

for(var x in coleccion[0])
{
  console.log(x);
}















//var cauchin = new Pakiman("Cauchin", 100, 30);
//var pokacho = new Pakiman("Pokacho", 80, 50);
//var tocinauro = new Pakiman("Tocinauro", 120, 40);
// podemos hacelo de esta manera con push cargamos las nuevas variables con sus parametros
//  eliminar esas variables intermedias y dejar como lo estamos dejando pero se llamaria por coleccion
// para mostrarlo =/ y la posicion es mas aburrido digo yo
//var coleccion = [];
//coleccion.push(cauchin);
//coleccion.push(pokacho);
//coleccion.push(tocinauro);
