<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuctionSessionsTable extends Migration
{
    public function up()
    {
        Schema::create('AuctionSessions', function (Blueprint $table) {
            $table->increments('auctionSessionID');
            $table->date('startTime');
            $table->date('endTime');
            $table->integer('eventID')->nullable();
            $table->boolean('delflag');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('AuctionSessions');
    }
}
