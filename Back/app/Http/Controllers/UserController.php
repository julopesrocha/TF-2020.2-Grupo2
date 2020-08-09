<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function createUser(Request $request){
        $user = new User;
        $user->createUser($request);
        return response()->json($user);
    }

    public function listUsers(){
        $user = User::all();
        return response()->json($user);
    }
}
