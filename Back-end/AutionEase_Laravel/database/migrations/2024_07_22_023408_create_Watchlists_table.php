<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWatchlistsTable extends Migration
{
    public function up()
    {
        Schema::create('Watchlists', function (Blueprint $table) {
            $table->id('watchlistID');
            $table->foreignId('userID')->constrained('users');
            // $table->foreignId('assetID')->constrained('assets');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('Watchlists');
    }
}
