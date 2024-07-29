$(document).ready(function() {
  cargarRegiones();
});

// Función para cargar las regiones desde el archivo JSON
function cargarRegiones() {
  $.getJSON('comunas-regiones.json', function(data) {
      $.each(data.regiones, function(index, region) {
          // Agrega una opción al select con id "id_region" para cada región
          $('#idRegion').append('<option value="' + region.region + '">' + region.region + '</option>');
      });
  });
}

// Agrega un evento change al select con id "id_region"
$('#idRegion').change(function() {
  var selectedRegion = $(this).val();
  $.getJSON('comunas-regiones.json', function(data) {
      $.each(data.regiones, function(index, region) {
          if (region.region === selectedRegion) {
              cargarComunas(region.comunas);
              cargarCandidatos(region.candidatos);
              return false;
          }
      });
  });
});

// Función para cargar las comunas en el select con id "id_comuna"
function cargarComunas(comunas) {
  $('#idComuna').empty();
  // Itera sobre el arreglo de comunas y agrega cada comuna como una opción en el select
  $.each(comunas, function(index, comuna) {
      $('#idComuna').append('<option value="' + comuna + '">' + comuna + '</option>');
  });
}

// Función para cargar los candidatos en el select con id "id_candidato"
function cargarCandidatos(candidatos) {
  $('#idCandidato').empty();
  // Itera sobre el arreglo de candidatos y agrega cada candidato como una opción en el select
  $.each(candidatos, function(index, candidato) {
      $('#idCandidato').append('<option value="' + candidato + '">' + candidato  +' </option>');
  });
}