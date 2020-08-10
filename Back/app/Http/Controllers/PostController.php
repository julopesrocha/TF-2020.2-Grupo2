<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use Auth;

class PostController extends Controller
{
    public function createPost(Request $request){
        $post = new Post;
        $user = Auth::user();
        $post->user_id = $user->id;
        $post->createPost($request);
        return response()->json($post);
    }
}
