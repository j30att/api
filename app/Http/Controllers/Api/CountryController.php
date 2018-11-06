<?php
/**
 * Created by PhpStorm.
 * User: elf
 * Date: 06.11.2018
 * Time: 17:29
 */

namespace App\Http\Controllers\Api;


use App\Http\Resources\CoutriesResource;
use App\Models\Country;

class CountryController
{
    public function getCountries(){
        $countries = Country::query()->get();

        return  CoutriesResource::collection($countries);
    }

}
