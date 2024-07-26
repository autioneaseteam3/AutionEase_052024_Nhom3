<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tax extends Model
{
    use HasFactory;

    protected $primaryKey = 'taxID';

    protected $fillable = [
        'taxName', 'taxAmount', 'delflag'
    ];
}

