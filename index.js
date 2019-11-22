   var urlMasPopulares = "https://api.themoviedb.org/3/tv/popular?api_key=52a88daa04868d3d6e122bb241e7ff05"

        fetch(urlMasPopulares)
         .then(function(respuesta){
            return respuesta.json();
          })
          .then(function(datos){

              var destino = document.querySelector(".masPopulares");
              var datosFinales = datos.results;
              console.log(datosFinales);
              var div = "";
              for(var i=0; i<6; i++){
                div += "<div class='col-lg-4'>";
                div += "<img style='width:100%' src='https://image.tmdb.org/t/p/original/"+datosFinales[i].poster_path+"'>";
                div += "<h2>"+datosFinales[i].original_name+"</h2>";
                div += "<p><a class='btn btn-secondary' href='detail.html?idSerie="+datosFinales[i].id+"' role='button'>Ver mas &raquo;</a></p>";
                div += "</div>";
              }
              destino.innerHTML = div
          });



        var urlMayorPuntaje = "https://api.themoviedb.org/3/tv/top_rated?api_key=c46d596a03200866b9f7e316643a628f"

        fetch(urlMayorPuntaje)
         .then(function(respuesta){
            return respuesta.json();
          })
          .then(function(datos){
              var destino = document.querySelector(".mayorPuntaje");
              var datosFinales = datos.results;
              var div = "";
              for(var i=0; i<6; i++){
                div += "<div class='col-lg-4'>";
                div += "<img style='width:100%' src='https://image.tmdb.org/t/p/original/"+datosFinales[i].poster_path+"'>";
                div += "<h2>"+datosFinales[i].original_name+"</h2>";
                div += "<p><a class='btn btn-secondary' href='detail.html?idSerie="+datosFinales[i].id+"' role='button'>Ver mas &raquo;</a></p>";
                div += "</div>";
              }
              destino.innerHTML = div
          });

        var urlSeriesAlAire = "https://api.themoviedb.org/3/tv/airing_today?api_key=c46d596a03200866b9f7e316643a628f"

        fetch(urlSeriesAlAire)
         .then(function(respuesta){
            return respuesta.json();
          })
          .then(function(datos){
              var destino = document.querySelector(".alAire");
              var datosFinales = datos.results;
              var div = "";
              for(var i=0; i<6; i++){
                div += "<div class='col-lg-4'>";
                div += "<img style='width:100%' src='https://image.tmdb.org/t/p/original/"+datosFinales[i].poster_path+"'>";
                div += "<h2>"+datosFinales[i].original_name+"</h2>";
                div += "<p><a class='btn btn-secondary' href='detail.html?idSerie="+datosFinales[i].id+"' role='button'>Ver mas &raquo;</a></p>";
                div += "</div>";
              }
              destino.innerHTML = div
          });
