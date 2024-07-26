<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssetStatusesTable extends Migration
{
    public function up()
    {
        Schema::create('AssetStatuses', function (Blueprint $table) {
            $table->increments('assetStatusID');
            $table->text('assetStatusName');
            $table->boolean('delflag');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('AssetStatuses');
    }
}
