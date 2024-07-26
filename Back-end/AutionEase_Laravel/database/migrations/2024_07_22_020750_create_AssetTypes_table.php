<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssetTypesTable extends Migration
{
    public function up()
    {
        Schema::create('AssetTypes', function (Blueprint $table) {
            $table->increments('assetTypeID');
            $table->text('assetTypeName');
            $table->boolean('delflag');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('AssetTypes');
    }
}
