<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBidHistoriesTable extends Migration
{
    public function up()
    {
        Schema::create('BidHistories', function (Blueprint $table) {
            $table->increments('bidHistoryID');
            $table->integer('auctionItemID');
            $table->string('userID', 50);
            $table->float('bidAmount');
            $table->date('bidTime');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('BidHistories');
    }
}
