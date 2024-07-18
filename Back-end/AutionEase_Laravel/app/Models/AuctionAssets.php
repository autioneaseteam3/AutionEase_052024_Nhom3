<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AuctionAssets extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'AuctionAssets';

    protected $fillable = [
        'auctionAssetsId',
        'assetId',
        'serialNumberInSession',
        'status',
        'timeEnd',
    ];

    /**
     * Get the asset that owns the AuctionAsset.
     */
    public function asset()
    {
        return $this->belongsTo(Asset::class, 'assetId');
    }

    /**
     * Get the auction that owns the AuctionAsset.
     */
    public function auction()
    {
        return $this->belongsTo(Auction::class, 'auctionID');
    }
}
