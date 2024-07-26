<?php

namespace App\Http\Controllers;

use App\Models\AuctionItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuctionItemController extends Controller
{
    /**
     * Display a listing of the auction items.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $auctionItems = AuctionItem::all();
        return response()->json(['data' => $auctionItems]);
    }

    /**
     * Store a newly created auction item in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validate = [
            'auctionSessionID' => 'required|integer|exists:AuctionSessions,auctionSessionID',
            'assetID' => 'required|integer|exists:Assets,assetID',
            'startingBids' => 'required|numeric',
            'bidIncrement' => 'required|numeric',
            'delflag' => 'required|boolean',
        ];
    
        $validator = Validator::make($request->all(), $validate);
    
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
    
        $data = $validator->validated();
    
        // Log incoming request data and validated data
        \Log::info('Request Data: ', $request->all());
        \Log::info('Validated Data: ', $data);
    
        try {
            $auctionItem = AuctionItem::create($data);
            return response()->json([
                'message' => 'Auction Item created successfully',
                'data' => $auctionItem,
            ], 201);
        } catch (\Illuminate\Database\QueryException $qe) {
            // Log specific query exception
            \Log::error('QueryException: ' . $qe->getMessage());
            \Log::error('Trace: ' . $qe->getTraceAsString());
            return response()->json(['error' => 'Database error. Please check the logs for more details.'], 500);
        } catch (\Exception $e) {
            // Log general exception
            \Log::error('Exception: ' . $e->getMessage());
            \Log::error('Trace: ' . $e->getTraceAsString());
            return response()->json(['error' => 'Failed to create auction item. Please check the logs for more details.'], 500);
        }
    }
    

    /**
     * Display the specified auction item.
     *
     * @param  int  $auctionItemID
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($auctionItemID)
    {
        $auctionItem = AuctionItem::findOrFail($auctionItemID);
        return response()->json(['data' => $auctionItem]);
    }

    /**
     * Update the specified auction item in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $auctionItemID
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $auctionItemID)
    {
        $auctionItem = AuctionItem::findOrFail($auctionItemID);

        $validator = Validator::make($request->all(), [
            'auctionSessionID' => 'required|integer|exists:AuctionSessions,auctionSessionID',
            'assetID' => 'required|integer|exists:Assets,assetID',
            'startingBids' => 'required|numeric',
            'bidIncrement' => 'required|numeric',
            'delflag' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $auctionItem->update($request->only(['auctionSessionID', 'assetID', 'startingBids', 'bidIncrement', 'delflag']));

        return response()->json([
            'message' => 'Auction Item updated successfully',
            'data' => $auctionItem,
        ], 200);
    }

    /**
     * Remove the specified auction item from storage.
     *
     * @param  int  $auctionItemID
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($auctionItemID)
    {
        $auctionItem = AuctionItem::find($auctionItemID);

        if (!$auctionItem) {
            return response()->json(['error' => 'Auction Item not found.'], 404);
        }

        $auctionItem->delete();

        return response()->json(['message' => 'Auction Item deleted successfully'], 200);
    }

    /**
     * Restore the specified auction item from soft delete.
     *
     * @param  int  $auctionItemID
     * @return \Illuminate\Http\JsonResponse
     */
    public function restore($auctionItemID)
    {
        $auctionItem = AuctionItem::withTrashed()->find($auctionItemID);

        if (!$auctionItem) {
            return response()->json(['error' => 'Auction Item not found.'], 404);
        }

        $auctionItem->restore();

        return response()->json([
            'message' => 'Auction Item restored successfully',
            'data' => $auctionItem,
        ], 200);
    }
}
