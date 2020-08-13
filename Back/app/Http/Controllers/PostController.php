<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\User;
use Auth;

class PostController extends Controller
{
    public function listPosts(){
        $post = Post::all();
        return response()->json($post);
    }

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

    public function deletePost($id){
        $user = Auth::user();
        $post = Post::findOrFail($id);

        if($user->id == $post->user_id){
            Post::destroy($id);
            return response()->json('Post deletado');
        }else{
            return response()->json(['Não é possível deletar este post']);
        }
    }

    public function filterPosts(Request $request){
        $post = Post::query();
        if($request->filter){
            $post = $post->where('teacher','LIKE','%'.$request->filter.'%')->orWhere('course','LIKE','%'.$request->filter.'%');           
        }

        return response()->json($post->withCount('liked')->with('user:id,name')->get());
    }

    public function likePost($id){
        $user = Auth::user();
        $post = Post::findOrFail($id);

        if(! $post->liked->contains($user->id)){
            $post->liked()->attach($user->id);
        }
        return response()->json($post->liked()->get());

    }

    public function dislikePost($post_id){
        $user = Auth::user();
        $post = Post::findOrFail($post_id);

        if($post->liked->contains($user->id)){
            $post->liked()->detach($user->id);
        }

        return response()->json($post->liked()->get());
    }


    public function getNumberOfLikes($post_id){
        $post = Post::findOrFail($post_id);
        return response()->json($post->liked()->count());
    }
}
