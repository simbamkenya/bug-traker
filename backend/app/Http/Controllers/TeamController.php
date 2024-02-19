<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Team;

use App\Http\Requests\StoreTeamRequest;
use App\Http\Requests\UpdateTeamRequest;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $teams = Team::all();
        return response()->json([
            'teams' => $teams,
            'message' => 'teams fetched successfully!'
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTeamRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Team $team)
    {
        //
        return response()->json([
            'category' => $team,
            'message' => 'success'
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTeamRequest $request, Team $team)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $team)
    {
        //
        $team->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'team was deleted successfully!'
        ], 200);
    }
}
