<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuctionItemsTable extends Migration
{
    public function up()
    {
        Schema::create('AuctionItems', function (Blueprint $table) {
            $table->increments('auctionItemID');
            $table->integer('auctionSessionID');
            $table->integer('assetID');
            $table->float('startingBids');
            $table->float('bidIncrement');
            $table->boolean('delflag');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('AuctionItems');
    }
}
