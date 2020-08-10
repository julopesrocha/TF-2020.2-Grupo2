<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\UserController;
use App\User;
use Auth;

class PassportController extends Controller
{
    public function register(Request $request){
        $newUser = new User;
        $newUser->createUser($request);
        $success['token']=$newUser->createToken('MyApp')->accessToken;
        return response()->json(['success'=>$success,'user'=>$newUser]);
    }

    public function login(Request $request){
        if(Auth::attempt(['email'=>request('email'), 'password'=>request('password')])){
            $user = Auth::user();
            $success['token']=$user->createToken('MyApp')->accessToken;
            return response()->json(['success'=>$success, 'user'=>$user]);
        }
        else{
            return response()->json(['error'=>'Não autorizado']);
        }
    }
}
