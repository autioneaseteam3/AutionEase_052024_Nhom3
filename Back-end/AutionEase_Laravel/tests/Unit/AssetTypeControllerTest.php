<?php

namespace Tests\Unit;

use App\Models\AssetType;
// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AssetTypeControllerTest extends TestCase
{
    // use RefreshDatabase;

    public function test_index()
    {
        AssetType::factory()->count(3)->create();

        $response = $this->getJson('/api/AssetTypes');

        $response->assertStatus(200)
                 ->assertJsonStructure(['data' => [['assetTypeID', 'assetTypeName', 'delflag', 'created_at', 'updated_at']]]);
    }

    public function test_store()
    {
        $data = [
            'assetTypeName' => 'Test Asset Type',
            'delflag' => 0,
        ];

        $response = $this->postJson('/api/AssetTypes', $data);

        $response->assertStatus(201)
                 ->assertJsonFragment(['assetTypeName' => 'Test Asset Type', 'delflag' => 0]);

        $this->assertDatabaseHas('AssetTypes', $data);
    }

    public function test_show()
    {
        $assetType = AssetType::factory()->create();

        $response = $this->getJson("/api/AssetTypes/{$assetType->assetTypeID}");

        $response->assertStatus(200)
                 ->assertJsonFragment(['assetTypeID' => $assetType->assetTypeID]);
    }

    public function test_update()
    {
        $assetType = AssetType::factory()->create();

        $data = [
            'assetTypeName' => 'Updated Asset Type',
            'delflag' => 1,
        ];

        $response = $this->putJson("/api/AssetTypes/{$assetType->assetTypeID}", $data);

        $response->assertStatus(200)
                 ->assertJsonFragment(['assetTypeName' => 'Updated Asset Type', 'delflag' => 1]);

        $this->assertDatabaseHas('AssetTypes', ['assetTypeID' => $assetType->assetTypeID] + $data);
    }

    public function test_destroy()
    {
        $assetType = AssetType::factory()->create();

        $response = $this->deleteJson("/api/AssetTypes/{$assetType->assetTypeID}");

        $response->assertStatus(200)
                 ->assertJsonFragment(['message' => 'Asset Type deleted successfully']);

        $this->assertSoftDeleted('AssetTypes', ['assetTypeID' => $assetType->assetTypeID]);
    }

    public function test_restore()
    {
        $assetType = AssetType::factory()->create(['delflag' => 1]);
        $assetType->delete();

        $response = $this->postJson("/api/AssetTypes/{$assetType->assetTypeID}/restore");

        $response->assertStatus(200)
                 ->assertJsonFragment(['message' => 'Asset Type restored successfully']);

        $this->assertDatabaseHas('AssetTypes', ['assetTypeID' => $assetType->assetTypeID, 'delflag' => 1]);
    }
}
