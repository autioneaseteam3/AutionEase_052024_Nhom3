<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AssetStatus extends Model
{
    use SoftDeletes;

    protected $table = 'AssetStatuses';
    protected $primaryKey = 'assetStatusID';
    public $incrementing = false;
    protected $keyType = 'string';

    public $timestamps = false;

    protected $fillable = ['assetStatusID', 'assetStatusName', 'delflag'];
}


