<?php

namespace App\Http\Controllers;

use App\Models\Event;
use function Couchbase\defaultDecoder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
   /* public function __construct()
    {
        $this->middleware('auth');
    }*/

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return view('home');
        $user = Auth::user();
        return view('profile.view', compact('user'));
    }

    public function profile(){
        $user = Auth::user();
        return view('profile.view', compact('user'));
    }
    public function events(){
        $events = Event::query()->get();

        return view('events.index', compact('events'));
    }

    public function eventsList(){
        $eventList = Event::query()->get();

        return view('events.all-events', compact('eventList'));
    }
}
