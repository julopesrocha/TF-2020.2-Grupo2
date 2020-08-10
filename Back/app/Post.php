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

    // Fix bug when request is null
    public function editPost(Request $request){
        if($this->content){
            $this->content = $request->content;
        }
        if($this->tag){
            $this->tag = $request->tag;
        }        
        $this->save();
    }
}
