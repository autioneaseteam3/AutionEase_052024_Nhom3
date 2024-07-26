<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBillItemsTable extends Migration
{
    public function up()
    {
        Schema::create('BillItems', function (Blueprint $table) {
            $table->increments('billItemID');
            $table->integer('billID');
            $table->integer('assetID');
            $table->integer('taxID');
            $table->integer('bidAmount');
            $table->integer('depositID');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('BillItems');
    }
}
