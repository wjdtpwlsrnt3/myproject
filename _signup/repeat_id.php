<?php
    include("common.php");
    $repeat = $_GET['repeat'];
    $sql = 
    "select id
     from sign_up
     where id = '$repeat'
     ";
     $result = $conn -> query($sql);
     $data = mysqli_fetch_assoc($result);
     
     if($data) {
        echo json_encode(array('result' => 'y'));
     } else {
        echo json_encode(array('result' => 'n'));
     }
?>