<?php

include("../../php/config.php");

class NotFoundException extends Exception
{
    public function handleError()
    {
        header("HTTP/1.0 404 Not Found");
    }
}

// 说明：虽然在item.tsx中实现了对变量id的控制，只能传入有效的id，但防止由于未知原因暴露php文件的路由，从而独立访问php文件等非正常方式请求php文件，仍需要在php文件中对数据进行控制
// try {
//     $flag = true;
//     if (isset($_GET["id"]) and preg_match("/^\d{15}$/", $_GET["id"])) {
//         $id = $_GET["id"];
//         if (!isset($_SERVER["HTTP_REFERER"]) or ($_SERVER["HTTP_REFERER"] != $ip . "/item?id=" . $id)) {
//             $flag = false;
//         }
//     } else {
//         $flag = false;
//     }
//     $flag ?: throw new BadRequestException();
// } catch (BadRequestException $e) {
//     // die($e);
//     trigger_error($e->errorMessage(), E_USER_ERROR);
// }


// id数据在传入前已作数据控制
$id = $_GET["id"];

$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "sql_192_168_201_";


try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare("SELECT * FROM `item` WHERE id=:id");
    $stmt->bindParam(':id', $id);

    $stmt->execute();
    $rowCount = $stmt->rowCount();
    if ($rowCount === 1) {
        // 数据库中存在对应该id的商品数据
        $dbResult = $stmt->fetch();

        // $isNodePath = $ip . "/istatic/" . $id . "/node.json";
        $isNodePath = $_SERVER["DOCUMENT_ROOT"] . "/istatic/" . $id . "/node.json";
        if (file_exists($isNodePath)) {
            $isResult = file_get_contents($isNodePath, "r");
        } else {
            throw new NotFoundException();
        }
    } elseif ($rowCount > 1) {
        throw new PDOException();
    } else {
        throw new NotFoundException();
    }
} catch (NotFoundException $e) {
    // 404 Not Found
    $e->handleError();
} catch (PDOException $e) {
    header("HTTP/1.0 500 Internal Server Error");
} finally {
    $conn = null;
    exit(json_encode(array("id" => $id, "dbResult" => $dbResult, "isResult" => json_decode($isResult))));
}
