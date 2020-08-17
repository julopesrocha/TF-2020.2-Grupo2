<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;
use App\Post;
use Auth;

class CommentController extends Controller
{
    public function createComment($id, Request $request){
        $user = Auth::user();
        $post = Post::findOrFail($id);

        $comment = new Comment;
        $comment->post_id = $post->id;
        $comment->user_id = $user->id;
        $comment->createComment($request);
      
      return response()->json($comment);

    }

    public function deleteComment($id){
        $user = Auth::user();
        $comment = Comment::findOrFail($id);

        if($user->id == $comment->user_id || $user->admin == TRUE){
            Comment::destroy($id);
            return response()->json('Comentário deletado');
        }else{
            return response()->json(['Não é possível deletar este comentário']);
        }
    }
   
    public function listComments(){
        $comment = Comment::all();
        return response()->json($comment);
    }

    public function listCommentsFromPost($id){
        $comment = Comment::query();
        $comment = $comment->where('post_id',$id)->with('user');
        return response()->json($comment->get());
    }
}
