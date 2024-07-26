<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventoriesTable extends Migration
{
    public function up()
    {
        Schema::create('Inventories', function (Blueprint $table) {
            $table->id('inventoryID');
            $table->integer('quantity');
            $table->date('entryTime');
            $table->date('exitTime');
            // $table->foreignId('warehouseID')->constrained('warehouses');
            // $table->foreignId('assetID')->constrained('assets');
            $table->boolean('delflag');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('Inventories');
    }
}

