<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\UserController;
use App\User;

class PassportController extends Controller
{
    public function register(Request $request){
        $newUser = new User;
        $newUser->createUser($request);
        $success['token']=$newUser->createToken('MyApp')->accessToken;
        return response()->json(['success'=>$success,'user'=>$newUser]);
    }
}
