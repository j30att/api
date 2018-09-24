<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldsToEvents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('events', function (Blueprint $table) {
            $table->text('description')->nullable();
            $table->integer('buy_in')->nullable();
            $table->integer('reg_fee')->nullable();
            $table->string('currency_token')->nullable();
            $table->string('country')->nullable();
            $table->string('category_slug')->nullable();
            $table->string('category_name')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('events', function (Blueprint $table) {
            $table->dropColumn('description');
            $table->dropColumn('buy_in');
            $table->dropColumn('reg_fee');
            $table->dropColumn('currency_token');
            $table->dropColumn('country');
            $table->dropColumn('category_slug');
            $table->dropColumn('category_name');
        });
    }
}
