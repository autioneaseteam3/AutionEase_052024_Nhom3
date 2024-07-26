<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHistoriesTable extends Migration
{
    public function up()
    {
        Schema::create('Histories', function (Blueprint $table) {
            $table->increments('historyID');
            $table->integer('auctionItemID');
            $table->integer('billID');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('Histories');
    }
}
