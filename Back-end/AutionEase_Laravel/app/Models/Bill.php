<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    use HasFactory;

    protected $primaryKey = 'billID';

    protected $fillable = [
        'userID', 'billDate', 'totalAmount', 'depositAmount', 'feePercentage', 'paymentStatus'
    ];
}
