<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Space;
use Termwind\Components\Span;

use App\Http\Requests\StoreSpaceRequest;
use App\Http\Requests\UpdateSpaceRequest;
use App\Http\Requests\UpdateTeamRequest;

class SpaceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $spaces = Space::all();
        return response()->json([
            'spaces' => $spaces,
            'message' => 'spaces fetched successfully!'
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSpaceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Space $space)
    {
        //
        return response()->json([
            'space' => $space,
            'message' => 'success'
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSpaceRequest $request, Space $space)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Space $space)
    {
        //
        $space->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'space was deleted successfully!'
        ], 200);
    }
}
