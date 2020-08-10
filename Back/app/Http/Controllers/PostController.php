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

    public function editPost(Request $request, $id){
        $user = Auth::user();
        $post = Post::findOrFail($id);
        
        if($user->id == $post->user_id){
            $post->editPost($request);
            return response()->json($post);
        }else{
            return response()->json(['Ele nao pode editar']);
        }

    }
}
