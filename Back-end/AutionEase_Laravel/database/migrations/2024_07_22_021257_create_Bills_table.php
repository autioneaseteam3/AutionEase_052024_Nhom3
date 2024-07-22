<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBillsTable extends Migration
{
    public function up()
    {
        Schema::create('Bills', function (Blueprint $table) {
            $table->increments('billID');
            $table->string('userID', 50);
            $table->date('billDate');
            $table->float('totalAmount');
            $table->float('depositAmount');
            $table->float('feePercentage');
            $table->text('paymentStatus');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('Bills');
    }
}
