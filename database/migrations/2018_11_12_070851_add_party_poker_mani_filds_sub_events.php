<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPartyPokerManiFildsSubEvents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sub_events', function (Blueprint $table){
            $table -> integer('type');
            $table -> integer('day');
            $table -> string('flight')->nullable();
            $table -> timestamp('late_reg')->nullable();
            $table -> integer('clock')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sub_events', function (Blueprint $table) {
            $table -> dropColumn('type');
            $table -> dropColumn('day');
            $table -> dropColumn('flight');
            $table -> dropColumn('late_reg');
            $table -> dropColumn('clock');
        });
    }
}
