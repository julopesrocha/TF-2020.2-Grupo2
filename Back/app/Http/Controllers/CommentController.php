<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;

class CommentController extends Controller
{
    public function createComment(Request $request){
        $comment = new Comment;
        $comment->createComment($request);
        return response()->json($comment);
    }

    public function listComments(){
        $comment = Comment::all();
        return response()->json($comment);
    }

    public function listCommentsFromPost($id){
        $comment = Comment::query();
        $comment = $comment->where('post_id',$id);
        return response()->json($comment);
    }
}
