<?php

include('common.php');

$name = $_POST['name'];
$tel = $_POST['tel'];
$id = $_POST['id'];
$message = addslashes($_POST['message']);

$sql = "insert into portpolio set
        name = '$name',
        tel = '$tel',
        id = '$id',
        message = '$message'
        ";

$result = $conn -> query($sql);



if($result) {
    echo "
    <script>
        location.href='index.php';
    </script>
    ";
 } 
else { 
    echo "
    <script>
        alert('글 등록에 실패했습니다.');
        location.href='index.php';
    </script>
    ";
}



?>