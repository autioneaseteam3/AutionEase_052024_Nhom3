<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImageAssetsTable extends Migration
{
    public function up()
    {
        Schema::create('ImageAssets', function (Blueprint $table) {
            $table->increments('imageID');
            $table->text('imageName');
            $table->text('imagePath');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ImageAssets');
    }
}
