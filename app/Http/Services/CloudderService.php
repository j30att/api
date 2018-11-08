<?php
/**
 * Created by PhpStorm.
 * User: elf
 * Date: 08.11.2018
 * Time: 20:06
 */

namespace App\Http\Services;
use JD\Cloudder\Facades\Cloudder;

class CloudderService
{
    public static function upload($filename){

        Cloudder::upload($filename, null,
            array ("width"=>96, "height"=>96, "gravity"=>"face", "radius"=>"max", "crop"=>"crop"),
            array ());
    }
}
