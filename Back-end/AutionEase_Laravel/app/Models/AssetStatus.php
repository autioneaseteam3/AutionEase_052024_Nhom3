<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AssetStatus extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $table = 'AssetStatuses';
    protected $primaryKey = 'assetStatusID';
    public $incrementing = false;
    protected $keyType = 'string';

    public $timestamps = false;

    protected $fillable = ['assetStatusID', 'assetStatusName', 'delflag'];
}


