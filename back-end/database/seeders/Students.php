<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Students extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Student::factory()->create([
            'name' => 'Test User',
            'Surname' => 'Test Student',
            'Password' => '12345ssss',
            'email' => 'test@example.com',
        ]);
    }
}
