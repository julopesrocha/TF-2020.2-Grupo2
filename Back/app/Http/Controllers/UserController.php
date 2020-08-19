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

    public function filterAuthUsers(Request $request){
        $authUser = Auth::user();
        $user = User::query();
        if($request->filter){
            $user = $user->where('name','LIKE','%'.$request->filter.'%');            
        }

        $user = $user->with(array('followers' => function($q) use ($authUser){
            $q->where('id',$authUser->id);
        }));

        return response()->json($user->get());


    }

    public function listUserFollowing(){
        $user = Auth::user();
        return response()->json($user->following()->get());
    }

    public function followUser($id){
        $user = Auth::user();
        $followedUser = User::findOrFail($id);

        if(! $user->following->contains($followedUser->id)){
            $user->following()->attach($followedUser->id);
        } else{
            $user->following()->detach($followedUser->id);
        }

        return response()->json('Operação de seguir/deixar de seguir realizada com sucesso!');

    }

    public function unfollowUser($id){
        $user = Auth::user();
        $followedUser = User::findOrFail($id);

        if($user->following->contains($followedUser->id)){
            $user->following()->detach($followedUser->id);
        }

        return response()->json('Você deixou de seguir o usuário');

    }

}
