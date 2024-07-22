<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $primaryKey = 'userID';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'userID', 'firstName', 'lastName', 'password', 'address', 'gender', 'email', 'phoneNumber', 'SSN', 'favorite', 'token', 'delflag'
    ];
}
