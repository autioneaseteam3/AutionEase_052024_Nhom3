<?php

namespace App\Http\Controllers;

use App\Models\AssetType; // Updated the model to AssetType
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AssetTypeController extends Controller
{
    /**
     * Display a listing of the asset types.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $assetTypes = AssetType::all();
        return response()->json(['data' => $assetTypes]);
    }

    /**
     * Store a newly created asset type in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'assetTypeName' => 'required|string',
            'delflag' => 'required|boolean', 
        ]);
    
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
    
        $data = [
            'assetTypeName' => $request->assetTypeName,
            'delflag' => $request->delflag,
        ];
    
        try {
            $assetType = AssetType::create($data);
            return response()->json([
                'message' => 'Asset Type created successfully',
                'data' => $assetType,
            ], 201);
        } catch (\Exception $e) {
            // Log chi tiết lỗi
            \Log::error('Failed to create asset type: ' . $e->getMessage());
            \Log::error('Trace: ' . $e->getTraceAsString());
            return response()->json(['error' => 'Failed to create asset type. Please check the logs for more details.'], 500);
        }
    }
    


    /**
     * Display the specified asset type.
     *
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $assetType = AssetType::where('assetTypeID', $id)->firstOrFail();
        return response()->json(['data' => $assetType]);
    }
    

    /**
     * Update the specified asset type in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
{
    $assetType = AssetType::findOrFail($id);

    $validator = Validator::make($request->all(), [
        'assetTypeName' => 'required|string|max:255',
        'delflag' => 'required|boolean|in:0,1', // Accepts 0 or 1
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    $assetType->update($request->only(['assetTypeName', 'delflag']));

    return response()->json([
        'message' => 'Asset Type updated successfully',
        'data' => $assetType,
    ], 200);
}

    

    /**
     * Remove the specified asset type from storage.
     *
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $assetType = AssetType::find($id);

        if (!$assetType) {
            return response()->json(['error' => 'Asset Type not found.'], 404);
        }

        $assetType->delete();

        return response()->json(['message' => 'Asset Type deleted successfully'], 200);
    }

    /**
     * Restore the specified asset type from soft delete.
     *
     * @param  string  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function restore($id)
    {
        $assetType = AssetType::withTrashed()->find($id);

        if (!$assetType) {
            return response()->json(['error' => 'Asset Type not found.'], 404);
        }

        $assetType->restore();

        return response()->json([
            'message' => 'Asset Type restored successfully',
            'data' => $assetType,
        ], 200);
    }
}
