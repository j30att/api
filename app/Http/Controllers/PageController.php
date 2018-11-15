<?php

namespace App\Http\Controllers;

use App\Http\Services\PPInteraction;
use App\Http\Services\PPValidate;
use App\Models\Bid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PageController extends Controller
{
    public function app(Request $request){

        $bid = Bid::first();

        PPInteraction::bidPlace($bid);

        return view('layouts.main');
    }

    public function dealer(Request $request){
        return view('layouts.static');
    }
}
