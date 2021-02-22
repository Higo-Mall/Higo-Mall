<?php
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "sql_192_168_201_";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

$sql = "SELECT `name`, `tags_CN`, `tags_EN`, `brand_CN`, `brand_EN` FROM `item`";
$result = $conn->query($sql);

if ($result === FALSE) {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


// 从 URL 中获取参数 q 的值
$text=$_GET["text"];

// 如果 q 参数存在则从 xml 文件中查找数据
// if (strlen($text)>0)
// {
//     $hint="";
//     for($i=0; $i<($result->length); $i++)
//     {
//         $y=$x->item($i)->getElementsByTagName('title');
//         $z=$x->item($i)->getElementsByTagName('url');
//         if ($y->item(0)->nodeType==1)
//         {
//             // 找到匹配搜索的链接
//             if (stristr($y->item(0)->childNodes->item(0)->nodeValue,$text))
//             {
//                 if ($hint=="")
//                 {
//                     $hint="<a href='" . 
//                     $z->item(0)->childNodes->item(0)->nodeValue . 
//                     "' target='_blank'>" . 
//                     $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
//                 }
//                 else
//                 {
//                     $hint=$hint . "<br /><a href='" . 
//                     $z->item(0)->childNodes->item(0)->nodeValue . 
//                     "' target='_blank'>" . 
//                     $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
//                 }
//             }
//         }
//     }
// }

// 如果没找到则返回 "no suggestion"
// if ($hint=="")
// {
//     $response="no suggestion";
// }
// else
// {
//     $response=$hint;
// }

// 输出结果
// echo $response;

if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        echo $row["name"];
    }
} else {
    echo "0 结果";
}
