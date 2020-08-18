<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\UserController;
use App\User;
use Auth;
use DB;
use App\Notifications\EmailNotification;

class PassportController extends Controller
{
    public function register(Request $request){
        $newUser = new User;
        $newUser->createUser($request);

        $newUser->notify(new EmailNotification());

        $success['token']=$newUser->createToken('MyApp')->accessToken;
        return response()->json(['success'=>$success,'user'=>$newUser]);
    }

    public function login(Request $request){
        Auth::attempt(['email'=>request('email'), 'password'=>request('password')]);
        $user = Auth::user();
        $success['token']=$user->createToken('MyApp')->accessToken;
        return response()->json(['success'=>$success, 'user'=>$user], 500);
    }

    public function getDetails(){
        $user = Auth::user();
        return response()->json($user);
    }

    public function logout(){
        $accessToken = Auth::user()->token();
        DB::table('oauth_refresh_tokens')->where('access_token_id', $accessToken->id)->update(['revoked'=>true]);
        $accessToken->revoke();
        return response()->json(['Usuário deslogado']);
    }

    public function editProfile(Request $request){
        $user = Auth::user();
        $user->updateUser($request);
        return response()->json($user);
    }

    public function deleteProfile(){
        $user = Auth::user();
        User::destroy($user->id);
        return response()->json('Usuário deletado');

    }

}
