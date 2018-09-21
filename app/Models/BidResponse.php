<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BidResponse extends Model
{
    protected $fillable=[
        'status',
        'bid_id',
        'investor',
        'value',
        'income'
    ];
}
