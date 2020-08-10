<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;


class Post extends Model
{
    public function createPost(Request $request){
        $this->content = $request->content;
        $this->tag = $request->tag;
        $this->save();
    }
}
