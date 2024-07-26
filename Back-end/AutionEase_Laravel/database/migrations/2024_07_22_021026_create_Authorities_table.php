<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuthoritiesTable extends Migration
{
    public function up()
    {
        Schema::create('Authorities', function (Blueprint $table) {
            $table->increments('authoritID');
            $table->string('userID', 50);
            $table->integer('roleID');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('Authorities');
    }
}
