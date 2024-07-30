<?php
include "conexiones.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $accion = $_POST['accion'];

    if ($accion == 'obtenerRegion'){
        $region = "SELECT idRegion, nombreRegion FROM regiones";
        $resultadoRegion = mysqli_query($conn, $region) or die("No se pudo realizar la consulta SQL");
        while ($row = mysqli_fetch_assoc($resultadoRegion)) {
            echo '<option value="' . $row['idRegion'] . '">' . $row['nombreRegion'] . '</option>';
        }
    }elseif ($accion == 'obtenerCandidato'){
        $candidato = "SELECT idCandidato, nombreCandidato from candidatos";
        $resultadoCandidato = mysqli_query($conn, $candidato) or die("No se pudo realizar la consulta SQL");
        while ($row = mysqli_fetch_assoc($resultadoCandidato)) {
            echo '<option value="' . $row['idCandidato'] . '">' . $row['nombreCandidato'] . '</option>';
        }
    }else{
        echo 'Accion no reconocida';
    }
}else{
    echo 'Método no permitido';
};

// Cerrar la conexión a la base de datos
mysqli_close($conn);
?>
