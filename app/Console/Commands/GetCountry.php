<?php

namespace App\Console\Commands;

use App\Models\Country;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class GetCountry extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get:country';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $path = base_path() . '/slim-2.json';

        $file = file_get_contents($path);
        $countries = json_decode($file, 1);

        foreach ($countries as $country){
            $dbCountry = new Country();
            $dbCountry->name = $country['name'];
            $dbCountry->code = $country['alpha-2'];
            $dbCountry->slug = str_slug($country['name'], '_');
            $dbCountry->save();
        }
    }
}
