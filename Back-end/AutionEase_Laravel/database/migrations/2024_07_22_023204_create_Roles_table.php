<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolesTable extends Migration
{
    public function up()
    {
        Schema::create('Roles', function (Blueprint $table) {
            $table->id('roleID');
            $table->string('nameRole');
            $table->boolean('delflag');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('Roles');
    }
}
