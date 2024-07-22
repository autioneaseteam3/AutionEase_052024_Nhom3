<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BillItem extends Model
{
    use HasFactory;

    protected $primaryKey = 'billItemID';

    protected $fillable = [
        'billID', 'assetID', 'taxID', 'bidAmount', 'depositID'
    ];
}
