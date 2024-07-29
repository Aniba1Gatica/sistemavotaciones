function cargarRegionesYComunas() {
    // Cargar las regiones desde el archivo JSON
    fetch('comunas-regopmes.json')
      .then(response => response.json())
      .then(data => {
        // Recorrer las regiones y agregarlas al select de regiones
        const selectRegion = document.getElementById('region');
        data.regiones.forEach(region => {
          const optionRegion = document.createElement('option');
          optionRegion.value = region.region;
          optionRegion.textContent = region.region;
          selectRegion.appendChild(optionRegion);
        });
  
        // Agregar un evento change al select de regiones
        selectRegion.addEventListener('change', () => {
          // Limpiar el select de comunas
          const selectComuna = document.getElementById('comuna');
          selectComuna.innerHTML = '';
  
          // Obtener el valor seleccionado de la región
          const regionSeleccionada = selectRegion.value;
  
          // Filtrar las comunas según la región seleccionada
          const comunasFiltradas = data.regiones.find(region => region.region === regionSeleccionada).comunas;
  
          // Recorrer las comunas filtradas y agregarlas al select de comunas
          comunasFiltradas.forEach(comuna => {
            const optionComuna = document.createElement('option');
            optionComuna.value = comuna;
            optionComuna.textContent = comuna;
            selectComuna.appendChild(optionComuna);
          });
        });
      })
      .catch(error => console.error(error));
  }
  
  cargarRegionesYComunas();