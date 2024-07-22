<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInspectorsTable extends Migration
{
    public function up()
    {
        Schema::create('Inspectors', function (Blueprint $table) {
            $table->id('inspectorID');
            $table->string('liscense');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('Inspectors');
    }
}
