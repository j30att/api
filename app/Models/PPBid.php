<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class PPBid
 * @property int $id
 * @property int $pp_bid_id
 * @property int $sale_id
 * @property int $status
 * @property float $amount
 * @property string $created_at
 * @property string $updated_at
 *
 * @package App\Models
 */
class PPBid extends Model
{
    protected $fillable =[
        'pp_bid_id',
        'sale_id',
        'status',
        'amount',
    ];


    public function bids (){
        return $this->belongsTo(Bid::class, 'pp_bid_id', 'p_p_bid_id');
    }
}
