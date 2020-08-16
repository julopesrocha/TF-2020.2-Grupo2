<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;

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

    public function listUser($id){
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    public function updateUser($id, Request $request){
        $user = User::findOrFail($id);
        $user->updateUser($request);
        return response()->json($user);
    }

    public function deleteUser($id){
        User::destroy($id);
        return response()->json(['Usuário deletado']);
    }

    public function filterUsers(Request $request){
        $user = User::query();
        if($request->filter){
            $user = $user->where('name','LIKE','%'.$request->filter.'%');            
        }
        return response()->json($user->get());
    }

    // TEMPORARIA PARA TESTAR RELAÇÕES 

    // public function followUser($followed_id, $follower_id){
    //     $followed = User::findOrFail($followed_id);
    //     $follower = User::findOrFail($follower_id);

    //     $follower->following()->attach($followed->id);
    // }

    // public function listUserFollowers($id){
    //     $user = User::findOrFail($id);

    //     return response()->json($user->followers()->get());
    // }

    // public function listUserFollowing($id){
    //     $user = User::findOrFail($id);

    //     return response()->json($user->following()->get());
    // }

    public function listUserFollowing(){
        $user = Auth::user();
        return response()->json($user->following()->get());
    }

    public function followUser($id){
        $user = Auth::user();
        $followedUser = User::findOrFail($id);

        if(! $user->following->contains($followedUser->id)){
            $user->following()->attach($followedUser->id);
        }

        return response()->json('Usuário seguido');

    }

    public function unfollowUser($id){
        $user = Auth::user();
        $followedUser = User::findOrFail($id);

        if($user->following->contains($followedUser->id)){
            $user->following()->attach($followedUser->id);
        }

        return response()->json('Você deixou de seguir o usuário');

    }

}
