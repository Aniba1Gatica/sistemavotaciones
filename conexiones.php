<?php
$server = "localhost";
$user   = "root";
$passwd = "";
$db    = "sistemavotaciones"; //Nombre Base de datos

// Crea la conexión
$conn = new mysqli($server, $user, $passwd, $db);

// Verifica la conexión
if ($conn->connect_error) {
  die("Conexión fallida: ". $conn->connect_error);
} else{
  echo "Conexión exitosa";
}
?>