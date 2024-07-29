<?php
include 'conexiones.php';
// Obtiene los datos del formulario
$votante = $_POST['votante'];
$alias = $_POST['alias'];
$rut = $_POST['rut'];
$correo = $_POST['correo'];
$region = $_POST['region'];
$comuna = $_POST['comuna'];
$candidato = $_POST['candidato'];
$web = $_POST['web'];
$TV = $_POST['TV'];
$redesSociales = $_POST['redesSociales'];
$amigo = $_POST['amigo'];

// Verifica si el usuario ya votó
$sql = "SELECT COUNT(*) FROM votos WHERE rut =?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $rut);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();
if ($row['COUNT(*)'] > 0) {
  echo "el usuario ya votó anteriormente";
  return;
}

// Inserta los datos en la tabla votos
$sql = "INSERT INTO votos (votante, alias, rut, correo, region, comuna, candidato, web, TV, redesSociales, amigo)
 VALUES (?,?,?,?,?,?,?,?,?,?,?)";

$stmt = $conn->prepare($sql);
if ($stmt) {
  $stmt->bind_param("sssssssiiii", $votante, $alias, $rut, $correo,
   $region, $comuna, $candidato, $web, $TV, $redesSociales, $amigo);

  if ($stmt->execute()) {
    echo "success";
  } else {
    echo "Error al registrar el voto: ". $stmt->error;
  }

  $stmt->close();
} else {
  echo "Error al preparar la consulta: ". $conn->error;
}
$conn->close();
?>