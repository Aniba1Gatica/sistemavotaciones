$(document).ready(function() {
  $.ajax({
    type: "POST",
    url: "consultor.php",
    success: function(response) {
        $('#idRegion').html(response).fadeIn();
    }, error: function(jqXHR, textStatus, errorThrown) {
        console.error("Error en la solicitud AJAX: " + textStatus + " - " + errorThrown);
    }
  });
});
