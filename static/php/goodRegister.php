<?php
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "sql_192_168_201_";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

$sql = "INSERT INTO `item` (`id`, `name`, `tags_CN`, `tags_EN`, `brand_CN`, `brand_EN`, `price`, `inventory`, `time`, `map1`, `map2`, `map3`) VALUES ('";

// 左侧补零
function p($input, $pad_lenth = 2)
{
    return str_pad($input, $pad_lenth, "0", STR_PAD_LEFT);
}

$time = time();
$map1 = $_POST["map1"];
$map2 = $_POST["map2"];
$map3 = $_POST["map3"];
$maps = array($map1, $map2, $map3);

$id = p($map1) . p($map2) . p($map3) . substr($time, -6) . p(rand(0, 999), 3);
$sql .= $id . "', '";
$sql .= $_POST["name"] . "', '";
$sql .= $_POST["tags_CN"] . "', '";
$sql .= $_POST["tags_EN"] . "', '";
$sql .= $_POST["brand_CN"] . "', '";
$sql .= $_POST["brand_EN"] . "', ";
$sql .= $_POST["price"] . ", ";
$sql .= $_POST["inventory"] . ", '";
$sql .= date("Y-m-d H:i:s", $time) . "', ";
$sql .= $map1 . ", ";
$sql .= $map2 . ", ";
$sql .= $map3;
$sql .= ")";
// echo $sql;

// 创建本地资源文件夹
// $_SERVER["DOCUMENT_ROOT"]
// DOCUMENT_ROOT => /www/wwwroot/192.168.201.128
// 没有做商品编号重复时的修正方法

$root = $_SERVER["DOCUMENT_ROOT"];
$dir = $root . "/items";
for ($i = 0; $i < 3; $i++) {
    $dir .= "/" . $maps[$i];
    is_dir($dir) ?: mkdir($dir);
}
$dir .= "/" . $id;
// echo $dir;
mkdir($dir);


if ($conn->query($sql) === TRUE) {
    exit("新记录插入成功" . PHP_EOL . $id);
} else {
    exit("Error: " . $sql . "<br>" . $conn->error);
}

$conn->close();
