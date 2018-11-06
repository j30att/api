<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Queue;
use League\Flysystem\Config;
use PhpAmqpLib\Connection\AMQPStreamConnection;


class update extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:db';

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
    {   $connection = new AMQPStreamConnection('duckbill-01.rmq.cloudamqp.com', 5672, 'pvyiqfal', 'juIMSQ5RKmA9mbrCAglR2Zyt74yQktQW', 'pvyiqfal');
        $channel = $connection->channel();
        $queuName = 'staking';


        echo " [*] Waiting for messages. To exit press CTRL+C\n";
        $callback = function ($msg) {
            echo ' [x] Received ', $msg->body, "\n";
            updateService::updateEvent(unserialize($msg->body));
        };
        $channel->basic_consume($queuName, '', false, true, false, false, $callback);
        while (count($channel->callbacks)) {
            $channel->wait();
        }

    }
}
