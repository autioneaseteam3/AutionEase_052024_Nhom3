<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;

    protected $primaryKey = 'requestID';

    protected $fillable = [
        'nameRequest', 'descriptionRequest', 'verified', 'requestStatus', 'detailInspectorID', 'userID', 'assetID', 'delflag'
    ];
}

