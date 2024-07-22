<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepositsTable extends Migration
{
    public function up()
    {
        Schema::create('Deposits', function (Blueprint $table) {
            $table->increments('depositID');
            $table->integer('auctionSessionID');
            $table->string('userID', 50);
            $table->float('depositAmount');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('Deposits');
    }
}
