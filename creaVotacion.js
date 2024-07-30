$(document).ready(function() {
    $("#formulario-votación").on("submit", function(event) {
      event.preventDefault();
  
      var votante = $("#votante").val();
      var alias = $("#alias").val();
      var rut = $("#rut").val();
      var correo = $("#correo").val();
      var region = $("#idRegion").val();
      var comuna = $("#idComuna").val();
      var candidato = $("#idCandidato").val();
      var webChecked = $("#web").is(":checked")?1:0;
      var TVChecked = $("#TV").is(":checked")?1:0;
      var redesSocialesChecked = $("#redesSociales").is(":checked")?1:0;
      var amigoChecked = $("#amigo").is(":checked")?1:0;
      
      var datos = {
        votante: votante,
        alias: alias,
        rut: rut,
        correo: correo,
        region: region,
        comuna: comuna,
        candidato: candidato,
        web: webChecked,
        TV: TVChecked,
        redesSociales: redesSocialesChecked,
        amigo: amigoChecked
      };

      //Valida el correo si esta escrito correctamente validando dominio y estructura
      if (validator.isEmail(correo) && validator.isEmail(correo, {checkDNS: true}) 
          && validator.isEmail(correo, {domain_specific_validation: true})){
            if(webChecked || TVChecked || redesSocialesChecked || amigoChecked){ //Pregunta si las casillas estan marcadas
              $.ajax({
                type: "POST",
                url: "verificaVotacion.php",
                data: datos,
                success: function(response) {
                  if (response === "success") {
                    $("#mensaje").html("Voto registrado correctamente");
                  } else {
                    $("#mensaje").html("Error al registrar el voto: " + response);
                  }
                }
              }); 
            }else{
              $("#mensaje").html("Debes seleccionar al menos una casilla para poder votar")
            }
          }else {
          $("#mensaje").html("Verifique que su correo esté correcto");
        }
      }
    );
  });
