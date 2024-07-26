<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailInspector extends Model
{
    use HasFactory;

    protected $primaryKey = 'detailInspectorID';

    protected $fillable = [
        'inspectorID', 'userID'
    ];
}
