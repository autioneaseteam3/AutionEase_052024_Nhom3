<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequestsTable extends Migration
{
    public function up()
    {
        Schema::create('Requests', function (Blueprint $table) {
            $table->id('requestID');
            $table->string('nameRequest');
            $table->text('descriptionRequest')->nullable();
            $table->boolean('verified');
            $table->boolean('requestStatus');
            // $table->foreignId('detailInspectorID')->constrained('inspectors');
            $table->foreignId('userID')->constrained('users');
            // $table->foreignId('assetID')->constrained('assets');
            $table->boolean('delflag');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('Requests');
    }
}
