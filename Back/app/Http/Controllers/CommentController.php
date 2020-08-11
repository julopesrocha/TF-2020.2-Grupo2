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
}
