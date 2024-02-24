<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Validator;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //

    use Notifiable, HasApiTokens;
    //
    protected $fillable = ['name', 'email', 'password'];
    protected $hidden = ['password', 'remember_token'];
    protected $cast = ['email_verified_at' => 'datetime'];

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        return response()->json($user);
    }

    public function login(Request $request)
    {
        $rules = [
            'email' => 'required|email|exists:users,email',
            'password' => 'required'
        ];
        //dd($request->all());

        $validation = Validator::make(
            $request->all(),
            $rules
        );

        if ($validation->fails()) {
            return response()->json([
                'message' => 'validation failed',
                'status' => 'failed',
            ], 401);
        }

        $user = User::where('email', $request->email)->first();
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
               // $user = Auth::user();

                $token = $user->createToken($user->email . '-' . now());

                return response()->json([
                    'token' => $token->plainTextToken,
                    'user' => $user
                ]);
            } else {
                return  response()->json([
                    'message' => 'Login credential are incorrect',
                ], 401);
            }
        } else {
            return response()->json([
                "message" => 'password or email is incorrect',
            ], 401);
        }
    }

    public function logout(Request $request)
    {
        if ($request->user()) {
            // //     // $request->user()->tokens()->delete();
            // //     $token = $request->user()->token();
            // //     $token->revoke();
            auth('api')->user()->token()->revoke();
        }


        return response()->json(['message' => 'You have been successfully logged out!']);
    }
}
