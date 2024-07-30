<?php
include "conexiones.php";

// Consulta para obtener las regiones
$query = "SELECT idRegion, nombreRegion FROM regiones";
$resultado = mysqli_query($conn, $query) or die("No se pudo realizar la consulta SQL");

if ($resultado) {
    // Imprimir las opciones del select
    while ($row = mysqli_fetch_assoc($resultado)) {
        echo '<option value="' . $row['idRegion'] . '">' . $row['nombreRegion'] . '</option>';
    }
} else {
    echo 'Error al ejecutar la consulta: ' . mysqli_error($conn);
}

// Cerrar la conexión a la base de datos
mysqli_close($conn);
?>
