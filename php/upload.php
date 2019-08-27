<?php
session_start();
if (!empty($_FILES) && $_SESSION['verified'])
{
     $tempFile = $_FILES['file']['tmp_name'];//this is temporary server location

     $upload_dir = 'uploads' . DIRECTORY_SEPARATOR . $_SESSION['cabang'] . DIRECTORY_SEPARATOR . $_SESSION['faculty'] . DIRECTORY_SEPARATOR;

     // using DIRECTORY_SEPARATOR constant is a good practice, it makes your code portable.
     $uploadPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . $upload_dir . DIRECTORY_SEPARATOR;

     // Adding timestamp with image's name so that files with same name can be uploaded easily.
     $mainFile = $uploadPath.time().'-'. $_FILES['file']['name'];

     move_uploaded_file($tempFile,$mainFile);
}

?>
