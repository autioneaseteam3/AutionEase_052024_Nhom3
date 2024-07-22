<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;

    protected $primaryKey = 'inventoryID';

    protected $fillable = [
        'quantity', 'entryTime', 'exitTime', 'warehouseID', 'assetID', 'delflag'
    ];
}

