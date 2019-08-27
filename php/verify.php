<?php
	session_start();
	$_SESSION['verified'] = false;
    // Getting user's input
    $faculty = $_POST['faculty'];
    $cabang = $_POST['cabang'];
    $inputid = $_POST['kode'];

	// Putting user's input into session variable
	$_SESSION['faculty'] = $faculty;
	$_SESSION['cabang'] = $cabang;
    // Getting data from database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "verificationsystem";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $result = mysqli_query($conn, "SELECT * FROM participants WHERE uniqueid = '$inputid'");
		$real = mysqli_fetch_assoc($result);

    // Checking if form data matches data from database
    if ($faculty == $real['faculty'] and $cabang == $real['cabang']){
      echo "True";
	  	$_SESSION['verified'] = true;
    }
    else{
      echo "";
    }
 ?>
