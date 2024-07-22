<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssetStatus extends Model
{
    use HasFactory;

    protected $table = 'AssetStatuses';
    protected $primaryKey = 'assetStatusID';
    public $timestamps = false;
    
    protected $fillable = [
        'assetStatusName', 'delflag'
    ];
}
