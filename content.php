<?php 

include('common.php');

$sql = "select 
            name,
            call,
            id,
            message,
            insertTime
        from portpolio 
        where name = '$name'";

$result = $conn -> query($sql);

$data = mysqli_fetch_assoc($result);

if($data) {
        
} else {    
    echo "
    <script>
        alert('비정상 접근')
        location.href='index.php';        
    </script>
    ";
}
?>
