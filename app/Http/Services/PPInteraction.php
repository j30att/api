<?php
/**
 * Created by PhpStorm.
 * User: j30att
 * Date: 13.11.18
 * Time: 18:32
 */

namespace App\Http\Services;


use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;

class PPInteraction
{

    public static function bidPlace(){
        $guzzleClient = new Client();

        $now = Carbon::now();
        $user = Auth::user();
        $ppUser = $user->ppUser;
        //$uri = config('app.pp.pp_base_api_url'). '/wallet/transaction/';
        $uri = 'http://re-crm-api-container.ivycomptech.co.in/api/rest/staking/wallet';
        $body=[
            'accountId'=>$user->pp_account_id,
            'amount' => +10000,
            'transactionType' => 'BID_PLACE',
            'requestorReferenceId' => 'QAZzaq',
            'transactionInitiatedDate'=>$now->timestamp,
        ];
        $headers=[
            'partnerName' => $ppUser->screen_name,
            'partnerAuthToken' => $user->pp_partner_token,
            'partnerPlayerSession' => $ppUser->session
            ];
        $response = $guzzleClient->post($uri, [
            'headers'=> $headers,
            'form_data'=>$body
        ]);
        dd($response);
    }

    public function bidCancel(){

    }

    public function bidClosure(){

    }

    public function bidPayRemaining(){

    }
}