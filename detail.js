var queryString = location.search; //Capturamos la query string del navegador
var searchParams = new URLSearchParams(queryString); //Obtenemos las posiciones y los datos de la queryString
var idSerie = searchParams.get("idSerie"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").

var titulo = document.querySelector("#titulo");
var genero = document.querySelector("#genero");
var lenguaje = document.querySelector("#lenguaje");
var detalle = document.querySelector("#detalle");fechaEstreno
var fechaEstreno = document.querySelector("#fechaEstreno");
var poster = document.querySelector("#poster");
var videos = "";


var urlDetalle = "https://api.themoviedb.org/3/tv/"+idSerie+"?api_key=52a88daa04868d3d6e122bb241e7ff05";
        fetch(urlDetalle)
         .then(function(respuesta){
            return respuesta.json();
          })
          .then(function(datos){
          	console.log(datos);
          		var datosFinales = datos.results;
            	titulo.innerHTML = datos['name'];
            	for (var i = 0; i < datos['genres'].length; i++) {
            		genero.innerHTML += "<a href='listado-genero.html?idGeneros="+datos['genres'][i].id+"&generoName="+datos['genres'][i].name+"'>"+datos['genres'][i].name + "</a> | ";
            	}
            	lenguaje.innerHTML = datos['original_language'];
            	detalle.innerHTML = datos['overview'];
            	fechaEstreno.innerHTML = datos['first_air_date'];
            	poster.innerHTML = "<img class='img-fluid' src='https://image.tmdb.org/t/p/original/"+datos['poster_path']+"' alt='' width=400>";

          });

          var urlVideo = "https://api.themoviedb.org/3/tv/"+idSerie+"/videos?api_key=52a88daa04868d3d6e122bb241e7ff05";
          fetch(urlVideo)
                   .then(function(respuesta){
                      return respuesta.json();
                    })
                    .then(function(datos){
                      videos = datos;
                      if(datos.results.length > 0){
                        var botonTrilers = document.querySelector("#botonTrailers");
                        botonTrilers.removeAttribute("hidden");
                      }
                    });

                  function mostrarTrailers(){
                      divaux = "";
                      var divT = document.querySelector("#divTrailers");
                      var h3T = document.querySelector("#h3Trailers");
                      divT.removeAttribute("hidden");
                      h3T.removeAttribute("hidden");
                      for(var i=0; i<videos.results.length; i++){
                        divaux += "<div class='col-md-3 col-sm-6 mb-4'>";
                        divaux += "<a href='detail.html?idSerie="+videos.results[i].id+"'>";
                        divaux += "<iframe style='width:100%' src='https://www.youtube.com/embed/"+videos.results[i].key+"' frameborder='0'  allowfullscreen></iframe>";
                        divaux += "</a>";
                        divaux += "</div>";
                      }
                      divT.innerHTML = divaux;
                    }



function mostrarRecomendados(){
  var div = document.querySelector("#divRecomendaciones");
  var h3 = document.querySelector("#h3Recomendaciones");
  div.removeAttribute("hidden");
  h3.removeAttribute("hidden");

  var urlRecomendadas = "https://api.themoviedb.org/3/tv/"+idSerie+"/recommendations?api_key=52a88daa04868d3d6e122bb241e7ff05&language=en-US&page=1";
        fetch(urlRecomendadas)
         .then(function(respuesta){
            return respuesta.json();
          })
          .then(function(datos){
              var divaux = "";
              var datosFinales = datos.results;
              console.log(datosFinales);
              if(datosFinales.length == 0){
                alert("No se encontraron recomendaciones");
              }
              for(var i=0; i<datosFinales.length; i++){
                divaux += "<div class='col-md-3 col-sm-6 mb-4'>";
                divaux += "<a href='detail.html?idSerie="+datosFinales[i].id+"'>";
                divaux += "<img class='img-fluid' src='https://image.tmdb.org/t/p/original/"+datosFinales[i].poster_path+"' alt=''>";
                divaux += "</a>";
                divaux += "</div>";
              }
              div.innerHTML = divaux;

          });

}
