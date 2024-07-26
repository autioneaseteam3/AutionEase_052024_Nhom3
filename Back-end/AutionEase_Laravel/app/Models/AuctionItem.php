<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuctionItem extends Model
{
    use HasFactory;
    
    protected $table = 'AuctionItems';
    protected $primaryKey = 'auctionItemID'; // Specify the primary key

    public $incrementing = true; // Set this to true if the primary key is auto-incrementing
    protected $keyType = 'int'; // Set the type of the primary key column

    public $timestamps = false; // Disable timestamps

    protected $fillable = [
        'auctionSessionID', 'assetID', 'startingBids', 'bidIncrement', 'delflag'
    ];
}
