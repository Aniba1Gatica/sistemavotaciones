$(document).ready(function() {
  $.ajax({
    type: "POST",
    url: "consultor.php",
    data: {accion: "obtenerRegion"},
    success: function(response) {
        $('#idRegion').html(response).fadeIn();
      }, error: function(jqXHR, textStatus, errorThrown) {
        console.error("Error en la solicitud AJAX: " + textStatus + " - " + errorThrown);
    }
  });

$("#idRegion").change(function(){
  var idRegion = $(this).val();
  $.ajax({
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

  $.ajax({
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

