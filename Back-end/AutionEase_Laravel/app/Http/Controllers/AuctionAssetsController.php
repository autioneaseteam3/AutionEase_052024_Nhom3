<?php

namespace App\Http\Controllers;

use App\Models\AuctionAssets; // Updated the model to AuctionAsset
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuctionAssetsController extends Controller
{
    /**
     * Display a listing of the auction assets.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $auctionAssets = AuctionAsset::all();
        return response()->json(['data' => $auctionAssets]);
    }

    /**
     * Store a newly created auction asset in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'auctionAssetsId' => 'required|string|max:10|unique:auction_assets',
            'assetId' => 'required|integer|exists:assets,id', // Ensure assetId is an integer and exists in assets table
            'serialNumberInSession' => 'required|integer',
            'status' => 'required|string|max:20',
            'timeEnd' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        try {
            $data = $request->only(['auctionAssetsId', 'assetId', 'serialNumberInSession', 'status', 'timeEnd']);
            $auctionAsset = AuctionAsset::create($data);

            return response()->json([
                'message' => 'Auction Asset created successfully',
                'data' => $auctionAsset,
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create auction asset.'], 500);
        }
    }

    /**
     * Display the specified auction asset.
     *
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $auctionAsset = AuctionAsset::findOrFail($id);
        return response()->json(['data' => $auctionAsset]);
    }

    /**
     * Update the specified auction asset in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $auctionAsset = AuctionAsset::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'assetId' => 'required|integer|exists:assets,id',
            'serialNumberInSession' => 'required|integer',
            'status' => 'required|string|max:20',
            'timeEnd' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $auctionAsset->update($request->only(['assetId', 'serialNumberInSession', 'status', 'timeEnd']));

        return response()->json([
            'message' => 'Auction Asset updated successfully',
            'data' => $auctionAsset,
        ], 200);
    }

    /**
     * Remove the specified auction asset from storage.
     *
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $auctionAsset = AuctionAsset::find($id);

        if (!$auctionAsset) {
            return response()->json(['error' => 'Auction Asset not found.'], 404);
        }

        $auctionAsset->delete();

        return response()->json(['message' => 'Auction Asset deleted successfully'], 200);
    }

    /**
     * Restore the specified auction asset from soft delete.
     *
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function restore($id)
    {
        $auctionAsset = AuctionAsset::withTrashed()->find($id);

        if (!$auctionAsset) {
            return response()->json(['error' => 'Auction Asset not found.'], 404);
        }

        $auctionAsset->restore();

        return response()->json([
            'message' => 'Auction Asset restored successfully',
            'data' => $auctionAsset,
        ], 200);
    }
}
