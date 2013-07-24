function obtenDatos(){
	d3.json("datos.json", function(data){
		var frase = data.arreglo.join(" ");
		d3.select("#mensaje").html(frase);
	})
}