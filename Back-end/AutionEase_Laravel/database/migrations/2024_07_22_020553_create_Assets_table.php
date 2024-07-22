<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssetsTable extends Migration
{
    public function up()
    {
        Schema::create('Assets', function (Blueprint $table) {
            $table->increments('assetID');
            $table->text('assetName');
            $table->text('mainImage');
            $table->text('assetDescription')->nullable();
            $table->float('assetPrice');
            $table->integer('assetTypeID');
            $table->integer('assetStatusID');
            $table->integer('imageID');
            $table->integer('shippingStatusID');
            $table->boolean('delflag');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('Assets');
    }
}

