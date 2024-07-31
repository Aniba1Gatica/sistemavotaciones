<?php
include "conexiones.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') { //Método para facilitar la discriminación entre los datos
    $accion = $_POST['accion'];

    if ($accion == 'obtenerRegion'){  //Recibe el método y se realizan las consultas a la bdd, en esta ocasión para las regiones
        $region = "SELECT idRegion, nombreRegion FROM regiones";
        $resultadoRegion = mysqli_query($conn, $region) or die("No se pudo realizar la consulta SQL");
        while ($row = mysqli_fetch_assoc($resultadoRegion)) {
            echo '<option value="' . $row['idRegion'] . '">' . $row['nombreRegion'] . '</option>'; //Da el valor capturado y los muestra en el select
        }
    }elseif ($accion == 'obtenerComuna'){ //Igual que el método anterior pero para las comunas
        if(isset($_POST['idRegion'])){ //Considera la idRegion recibida de la función ajax y realiza consultas a la bdd considerandola como una condición
            $idRegion = $_POST['idRegion'];
            $comuna = "SELECT idComuna, nombreComuna FROM comunas WHERE idRegion = '$idRegion'";
            $resultadoComuna = mysqli_query($conn, $comuna) or die("No se pudo realizar la consulta SQL");
            while ($row = mysqli_fetch_assoc($resultadoComuna)) {
                echo '<option value="' . $row['nombreComuna'] . '">' . $row['nombreComuna'] . '</option>';
            }
        }
    }elseif ($accion == 'obtenerCandidato'){ //Similar a la primera función solo que para los candidatos
        $candidato = "SELECT idCandidato, nombreCandidato from candidatos";
        $resultadoCandidato = mysqli_query($conn, $candidato) or die("No se pudo realizar la consulta SQL");
        while ($row = mysqli_fetch_assoc($resultadoCandidato)) {
            echo '<option value="' . $row['nombreCandidato'] . '">' . $row['nombreCandidato'] . '</option>';
        }
    }else{
        echo 'Accion no reconocida';
    }
}else{
    echo 'Método no permitido';
};

//Cierra la conexion con la base de datos
mysqli_close($conn);
?>
