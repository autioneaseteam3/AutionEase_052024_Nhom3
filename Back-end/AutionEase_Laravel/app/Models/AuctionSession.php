<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuctionSession extends Model
{
    use HasFactory;

    protected $primaryKey = 'auctionSessionID';

    protected $fillable = [
        'startTime', 'endTime', 'eventID', 'delflag'
    ];
}

