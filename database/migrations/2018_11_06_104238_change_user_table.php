<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table){

            $table -> tinyInteger('role')->default('1');
            $table -> integer('country_id')->unsigned()->nullable();
            $table -> foreign('country_id')->references('id')->on('countries')->onDelete('set null');
            $table -> boolean('sms_subscribe');
            $table -> boolean('email_subscribe');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {


            $table->dropColumn('role');
            $table->dropColumn('sms_subscribe');
            $table->dropColumn('email_subscribe');
            $table->dropForeign('users_country_id_foreign');
            $table->dropColumn('country_id');
        });
    }
}
