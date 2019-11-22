   var urlGeneros = "https://api.themoviedb.org/3/genre/tv/list?api_key=c46d596a03200866b9f7e316643a628f"

        fetch(urlGeneros)
         .then(function(respuesta){
            return respuesta.json();
          })
          .then(function(datos){
              var datosFinales = datos.genres;
              var deseados = document.querySelector("#generosDeseados");
              var excluidos = document.querySelector("#generosExcluidos");
              var options = "";
              for (var i=0; i<datosFinales.length; i++) {
              	options += "<option value='"+datosFinales[i].id+"'>"+datosFinales[i].name+"</option>";
              }
              deseados.innerHTML = options;
              excluidos.innerHTML = options;

          });




var form = document.querySelector(".formularioAvanzado");

form.onsubmit = function(e){

var generosDeseados = document.querySelector('#generosDeseados option:checked');
var generosExcluidos = document.querySelector('#generosExcluidos option:checked');
var orden = document.querySelector('#orden option:checked');
var anio = document.querySelector('input[name="anio"]');

console.log(generosDeseados.value);
console.log(generosExcluidos.value);
console.log(orden.value);
console.log(anio.value);

e.preventDefault();

var tituloResultado = document.querySelector("#tituloResultado");
tituloResultado.removeAttribute("hidden");
var mensaje = document.querySelector("#mensaje");
var destino = document.querySelector(".resultadosBusqueda");



      var urlBuscar = "https://api.themoviedb.org/3/discover/tv?api_key=52a88daa04868d3d6e122bb241e7ff05&sort_by="+orden.value+"&first_air_date_year="+anio.value+"&with_genres="+generosDeseados.value+"&without_genres="+generosExcluidos.value;
        fetch(urlBuscar)
         .then(function(respuesta){
            return respuesta.json();
          })
          .then(function(datos){
              var datosFinales = datos.results;
              if(datosFinales.length == 0){
                mensaje.removeAttribute("hidden");
              }else{
                var destino = document.querySelector(".resultadosBusqueda");
                mensaje.setAttribute("hidden", true);
                console.log(datosFinales);
                var div = "";
                for(var i=0; i<datosFinales.length; i++){
                  div += "<div class='col-lg-4'>";
                  div += "<img style='width:100%' src='https://image.tmdb.org/t/p/original/"+datosFinales[i].poster_path+"'>";
                  div += "<h2>"+datosFinales[i].original_name+"</h2>";
                  div += "<p><a class='btn btn-secondary' href='detail.html?idSerie="+datosFinales[i].id+"' role='button'>Ver mas &raquo;</a></p>";
                  div += "</div>";
                }
                destino.innerHTML = div
              }
          });





}
