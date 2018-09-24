<?php

use Illuminate\Database\Seeder;
use App\Models\Country;

class CountriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $countries = [
            ['name' => 'Bahamas', 'code' => 'BH', 'slug' => 'bh'],
            ['name' => 'USA', 'code' => 'USA', 'slug' => 'usa'],
            ['name' => 'UK', 'code' => 'UK', 'slug' => 'uk'],
            ['name' => 'Kazakhstan', 'code' => 'KA', 'slug' => 'ka']
        ];
        Country::insert($countries);
    }
}
