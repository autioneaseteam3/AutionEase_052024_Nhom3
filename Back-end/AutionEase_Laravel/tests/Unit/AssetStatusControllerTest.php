<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\AssetStatus;
// use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class AssetStatusControllerTest extends TestCase
{
    use  WithFaker;

    /** @test */
    public function it_can_list_asset_statuses()
    {
        AssetStatus::factory()->count(3)->create();

        $response = $this->getJson('/api/AssetStatuses');

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'data' => [
                         '*' => ['id', 'assetStatusID', 'assetStatusName', 'delflag', 'created_at', 'updated_at']
                     ]
                 ]);
    }

    /** @test */
    public function it_can_create_an_asset_status()
    {
        $data = [
            'assetStatusID' => $this->faker->unique()->word,
            'assetStatusName' => 'online',
            'delflag' => 0
        ];

        $response = $this->postJson('/api/AssetStatuses', $data);

        $response->assertStatus(201)
                 ->assertJsonFragment($data);

        $this->assertDatabaseHas('AssetStatusess', $data);
    }

    /** @test */
    public function it_can_show_an_asset_status()
    {
        $assetStatus = AssetStatus::factory()->create();

        $response = $this->getJson('/api/AssetStatuses/' . $assetStatus->id);

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'id' => $assetStatus->id,
                     'assetStatusID' => $assetStatus->assetStatusID,
                     'assetStatusName' => $assetStatus->assetStatusName,
                     'delflag' => $assetStatus->delflag,
                 ]);
    }

    /** @test */
    public function it_can_update_an_asset_status()
    {
        $assetStatus = AssetStatus::factory()->create();

        $data = [
            'assetStatusName' => 'offline',
            'delflag' => 1
        ];

        $response = $this->putJson('/api/AssetStatuses/' . $assetStatus->id, $data);

        $response->assertStatus(200)
                 ->assertJsonFragment($data);

        $this->assertDatabaseHas('asset_statuses', array_merge(['id' => $assetStatus->id], $data));
    }

    /** @test */
    public function it_can_soft_delete_an_asset_status()
    {
        $assetStatus = AssetStatus::factory()->create();

        $response = $this->deleteJson('/api/AssetStatuses/' . $assetStatus->id);

        $response->assertStatus(200)
                 ->assertJson(['message' => 'Asset Status deleted successfully']);

        $this->assertDatabaseHas('asset_statuses', [
            'id' => $assetStatus->id,
            'delflag' => 1
        ]);
    }

    /** @test */
    public function it_can_restore_a_soft_deleted_asset_status()
    {
        $assetStatus = AssetStatus::factory()->create(['delflag' => 1]);

        $response = $this->putJson('/api/AssetStatuses/' . $assetStatus->id . '/restore');

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'id' => $assetStatus->id,
                     'delflag' => 0
                 ]);

        $this->assertDatabaseHas('AssetStatuses', [
            'id' => $assetStatus->id,
            'delflag' => 0
        ]);
    }
}
