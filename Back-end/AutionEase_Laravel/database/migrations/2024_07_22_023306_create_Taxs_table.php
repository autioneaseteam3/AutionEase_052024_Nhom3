<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxsTable extends Migration
{
    public function up()
    {
        Schema::create('Taxs', function (Blueprint $table) {
            $table->id('taxID');
            $table->string('taxName');
            $table->float('taxAmount');
            $table->boolean('delflag');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('Taxs');
    }
}
