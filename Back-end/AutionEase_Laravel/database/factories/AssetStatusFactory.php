<?php

namespace Database\Factories;

use App\Models\AssetStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

class AssetStatusFactory extends Factory
{
    protected $model = AssetStatus::class;

    public function definition()
    {
        return [
            'assetStatusID' => $this->faker->unique()->word,
            'assetStatusName' => $this->faker->randomElement(['online', 'offline']),
            'delflag' => $this->faker->boolean,
        ];
    }
}
