<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStaffEventsTable extends Migration
{
    public function up()
    {
        Schema::create('StaffEnvents', function (Blueprint $table) {
            $table->id('staffEnventID');
            $table->foreignId('userID')->constrained('users');
            // $table->foreignId('eventID')->constrained('events');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('StaffEnvents');
    }
}
