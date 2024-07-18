<?php

namespace App\Http\Controllers;

use App\Models\AssetStatus; // Updated the model to AssetStatus
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AssetStatusController extends Controller
{
    /**
     * Display a listing of the asset statuses.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $assetStatuses = AssetStatus::all();
        return response()->json(['data' => $assetStatuses]);
    }

    /**
     * Store a newly created asset status in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'assetStatusID' => 'required|string|max:255|unique:AssetStatuses,assetStatusID',
        'assetStatusName' => 'required|string|max:255|in:online,offline',
        'delflag' => 'required|boolean',
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    try {
        $data = $request->only(['assetStatusID', 'assetStatusName', 'delflag']);
        $assetStatus =  AssetStatus::create($data);

        return response()->json([
            'message' => 'Asset Status created successfully',
            'data' => $assetStatus,
        ], 201);
    } catch (\Exception $e) {
        \Log::error('Failed to create asset status: ' . $e->getMessage(), [
            'exception' => $e,
            'data' => $request->all(),
        ]);

        return response()->json(['error' => 'Failed to create asset status.'], 500);
    }
}


    /**
     * Display the specified asset status.
     *
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $assetStatus = AssetStatus::findOrFail($id);
        return response()->json(['data' => $assetStatus]);
    }

    /**
     * Update the specified asset status in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $assetStatus = AssetStatus::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'assetStatusName' => 'required|string|max:255',
            'delflag' => 'required|boolean|in:0,1', // Add boolean validation
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $assetStatus->update($request->only(['assetStatusName', 'delflag']));

        return response()->json([
            'message' => 'Asset Status updated successfully',
            'data' => $assetStatus,
        ], 200);
    }

    /**
     * Remove the specified asset status from storage.
     *
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $assetStatus = AssetStatus::find($id);
    
        if (!$assetStatus) {
            return response()->json(['error' => 'Asset Status not found.'], 404);
        }
    
        $assetStatus->delflag = 1;
        $assetStatus->save();
    
        return response()->json(['message' => 'Asset Status deleted successfully'], 200);
    }
    

    /**
     * Restore the specified asset status from soft delete.
     *
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function restore($id)
    {
        $assetStatus = AssetStatus::withTrashed()->find($id);

        if (!$assetStatus) {
            return response()->json(['error' => 'Asset Status not found.'], 404);
        }

        $assetStatus->restore();

        return response()->json([
            'message' => 'Asset Status restored successfully',
            'data' => $assetStatus,
        ], 200);
    }
}
