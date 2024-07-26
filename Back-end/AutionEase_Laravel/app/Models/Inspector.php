<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inspector extends Model
{
    use HasFactory;

    protected $primaryKey = 'inspectorID';

    protected $fillable = [
        'liscense'
    ];
}

