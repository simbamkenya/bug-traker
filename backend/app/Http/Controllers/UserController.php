<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        // $users = User::all();
        $users = User::with('spaces')->get();

        return response()->json([
            'status' => 'success',
            'users' => $users
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        //
        $request->validated();

        $user = User::create($request->all());

        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $fileName = hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();

            $file->storeAs('profile/', $fileName, 'public');

            $user->update([
                'photo' => $fileName
            ]);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'user was created successfully',
            'user' => $user
        ], 200);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        // $user = User::find($id);
        $user = User::with(['projects', 'spaces', 'issues'])->where('id', $id)->first();

        if ($user) {
            return response()->json($user);
        }

        return response()->json(['message' => 'User not found!'], 404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        //
        $request->validated();

        $user->update($request->except('photo'));

        if ($request->hasFile('photo')) {
            if ($user->photo) {
                unlink(public_path('storage/profile/') . $user->photo);
            }

            $file = $request->file('photo');
            $fileName = hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();

            $file->storeAs('profile/', $fileName, 'public');

            $user->update([
                'photo' => $fileName
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
        if ($user->photo) {
            unlink(public_path('storage/profile/') . $user->photo);
        }

        $user->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'user was deleted successfully!'
        ], 200);
    }
}
