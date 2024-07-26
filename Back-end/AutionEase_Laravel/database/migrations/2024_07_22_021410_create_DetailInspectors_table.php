<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetailInspectorsTable extends Migration
{
    public function up()
    {
        Schema::create('DetailInspectors', function (Blueprint $table) {
            $table->increments('detailInspectorID');
            $table->integer('inspectorID');
            $table->string('userID', 50);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('DetailInspectors');
    }
}
