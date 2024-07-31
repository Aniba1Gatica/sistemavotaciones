$(document).ready(function() {
  $.ajax({ //Función para obtener los datos de la región
    type: "POST",
    url: "consultor.php",
    data: {accion: "obtenerRegion"},
    success: function(response) {
        $('#idRegion').html(response).fadeIn();
      }, error: function(jqXHR, textStatus, errorThrown) {
        console.error("Error en la solicitud AJAX: " + textStatus + " - " + errorThrown);
    }
  });

$("#idRegion").change(function(){ //Capta cuando la idRegion cambia y cuando eso pasa
  var idRegion = $(this).val(); //Captura el nuevo valor
  $.ajax({ //Ejecuta una función ajax considerando la nueva id y la manda al archivo php en cuestion para permitir un select anidado
    type: "POST",
    url: "consultor.php",
    data: {accion: "obtenerComuna", idRegion: idRegion}, 
    success: function(response) {
        $('#idComuna').html(response).fadeIn();
      }, error: function(jqXHR, textStatus, errorThrown) {
        console.error("Error en la solicitud AJAX: " + textStatus + " - " + errorThrown);
    }
  });
});

  $.ajax({ //Función ajax para captar los candidatos
    type: "POST",
    url: "consultor.php",
    data: {accion: "obtenerCandidato"},
    success: function(response) {
        $('#idCandidato').html(response).fadeIn();
      }, error: function(jqXHR, textStatus, errorThrown) {
        console.error("Error en la solicitud AJAX: " + textStatus + " - " + errorThrown);
    }
  }); 
});

