<?php
include("../../php/config.php");

try {
    $isNodePath = $_SERVER["DOCUMENT_ROOT"] . "/istatic/slider/node.json";
    if (file_exists($isNodePath)) {
        $isResult = file_get_contents($isNodePath, "r");
    } else {
        throw new NotFoundException();
    }
} catch (NotFoundException $e) {
    // 404 Not Found
    $e->handleError();
} finally {
    exit($isResult);
}
