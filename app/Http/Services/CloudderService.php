<?php
/**
 * Created by PhpStorm.
 * User: elf
 * Date: 08.11.2018
 * Time: 20:06
 */

namespace App\Http\Services;
use App\Models\ImageAttachment;
use Illuminate\Support\Facades\Auth;

class CloudderService
{
    public static function upload(){
        $user = Auth::user();
        \Cloudinary::config(array(
            "cloud_name" => env('CLOUDINARY_CLOUD_NAME'),
            "api_key" => env('CLOUDINARY_API_KEY'),
            "api_secret" => env('CLOUDINARY_API_SECRET')
        ));

        $image = ImageAttachment::query()->where('id', $user->image_id)->first();
        $filePath = '.'.$image->getUrl();
        $params = ["width"=>96, "height"=>96, "gravity"=>"face", "radius"=>"max", "crop"=>"crop"];
        $q = \Cloudinary\Uploader::upload($filePath);

        return $q;
    }
}
