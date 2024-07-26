<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountsTable extends Migration
{
    public function up()
    {
        Schema::create('Accounts', function (Blueprint $table) {
            $table->string('userID', 50)->primary();
            $table->text('firstName');
            $table->text('lastName')->nullable();
            $table->text('password');
            $table->text('address');
            $table->boolean('gender')->nullable();
            $table->text('email');
            $table->text('phoneNumber');
            $table->text('SSN');
            $table->text('favorite')->nullable();
            $table->text('token')->nullable();
            $table->boolean('delflag');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('Accounts');
    }
}

