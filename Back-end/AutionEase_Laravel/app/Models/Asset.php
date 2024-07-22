<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    use HasFactory;

    protected $primaryKey = 'assetID';

    protected $fillable = [
        'assetName', 'mainImage', 'assetDescription', 'assetPrice', 'assetTypeID', 'assetStatusID', 'imageID', 'shippingStatusID', 'delflag'
    ];
}
