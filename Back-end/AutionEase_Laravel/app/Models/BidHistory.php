<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BidHistory extends Model
{
    use HasFactory;

    protected $primaryKey = 'bidHistoryID';

    protected $fillable = [
        'auctionItemID', 'userID', 'bidAmount', 'bidTime'
    ];
}

