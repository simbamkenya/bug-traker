<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\IssueType;
use App\Models\Space;
use App\Models\Project;
use App\Models\Issue;
use App\Models\Team;

use Illuminate\Support\Facades\DB;

use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\IssueSeeder;
use Database\Seeders\IssueTypeSeeder;
use Database\Seeders\ProjectSeeder;
use Database\Seeders\TeamSeeder;
use Database\Seeders\SpaceSeeder;
use Database\Seeders\CategorySeeder;



class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(3)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        
        $this->call([
            UserSeeder::class,
            // TeamSeeder::class,
         //   IssueSeeder::class,
         //   IssueTypeSeeder::class

        ]);

        $categories = ['UI', 'Backend', 'Design Figma', 'Hosting'];
        $spaces = ['Mufasa', 'Leo', 'Cole'];
        $teams = ['Team A', 'Team B', 'Team C'];

        foreach ($teams as $team){
            Team::factory()->create([
                'name' => $team
            ]);
        }

        foreach ($categories as $category) {
            Category::factory()->create(['name' => $category]);
        };

        foreach ($spaces as $space) {
            Space::factory()->create(['name' => $space, 'user_id' => 1]);
        };
         

        $issue_types = [];

        foreach ($issue_types as $issue_type) {
            IssueType::factory()->create([
                'name' => $issue_type,
                'key' => $issue_type . 'key',
                'space_id' => 1,
            ]);
        }

        $issues = [];

        foreach($issues as $issue){
            Issue::factory()->create([
                'key' => 'key title',
                'subject' => 'issue title',
                'priority' => 'priority',
                'status' => 'active',
                'due' => now(),
                'description' => 'test description',
                'category_id' => '',
                'assignee' => 'user',
                'issue_type' => ''
            ]);
        }

       $projects = ['Ecommerce', 'Inventory System'];

       foreach($projects as $project){
           Project::factory()->create([
            'key' => 'key',
            'name' => $project,
            'space_id' => 1,
           'user_id' => 1,
        ]);     
       }

       DB::table('team_user')->insert([
        ['user_id' => 1, 'team_id' => 1, 'created_at' => now(), 'updated_at' => now()],
        ['user_id' => 2, 'team_id' => 2, 'created_at' => now(), 'updated_at' => now()],
        ['user_id' => 1, 'team_id' => 3, 'created_at' => now(), 'updated_at' => now()]
       ]);

    }
}
