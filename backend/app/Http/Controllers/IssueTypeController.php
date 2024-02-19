<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\IssueType;

use App\Http\Requests\StoreIssueTypeRequest;
use App\Http\Requests\UpdateIssueTypeRequest;

class IssueTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $types = IssueType::all();
        return response()->json([
            'issueTypes' => $types,
            'message' => 'issue types fetched successfully!'
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreIssueTypeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(IssueType $issue_type)
    {
        //
        return response()->json([
            'issueType' => $issue_type,
            'message' => 'success'
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateIssueTypeRequest $request, IssueType $issueType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(IssueType $issueType)
    {
        //
        $issueType->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Issue Type was deleted successfully!'
        ], 200);
    }
}
