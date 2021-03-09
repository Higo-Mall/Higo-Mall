<?php
// $domain = "192.168.201.128";
$domain = "mindxl.site/higo";
$ip = "http://" . $domain;

class NotFoundException extends Exception
{
    public function handleError()
    {
        header("HTTP/1.0 404 Not Found");
    }
}
