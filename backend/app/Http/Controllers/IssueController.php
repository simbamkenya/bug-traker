<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Issue;

use App\Http\Requests\StoreIssueRequest;
use App\Http\Requests\UpdateIssueRequest;
use Carbon\Carbon;

class IssueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $issues = Issue::all();
        return response()->json([
            'issues' => $issues,
            'message' => 'issues fetched successfully!'
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreIssueRequest $request)
    {
        
        $request->validated();

        // if ($request->fails()) {
        //     return response()->json([
        //         'errors' => $this->errorResponse($request->errors()->all())
        //     ]);
        // }
        // dd($request->all());

        $issue = new Issue();
        $issue->category_id = $request->category;
        $issue->issue_type_id = $request->type;
        $issue->due = Carbon::parse($request->due);
        $issue->status = $request->status;
        $issue->assignee = $request->assignee;
        $issue->priority =$request->priority;
        $issue->subject = $request->subject;
        $issue->description = $request->description;
        $issue->save();

        return response()->json([
            'status' => 'success',
            'message' => 'issue was created successfully',
            'issue' => $issue
        ], 200);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
        return response()->json([
            'category' => $category,
            'message' => 'success'
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Issue $issue)
    {
        //
        $issue->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'issue was deleted successfully!'
        ], 200);
    }
}
