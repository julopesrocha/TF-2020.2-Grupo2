<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;


class Post extends Model
{
    public function createPost(Request $request){
        $this->content = $request->content;
        $this->tag = $request->tag;
        $this->course = $request->course;
        $this->teacher = $request->teacher;
        $this->save();
    }

    // Fix bug when request is null
    public function editPost(Request $request){
        if($request->course){
            $this->course = $request->course;
        }
        if($request->content){
            $this->content = $request->content;
        }
        if($request->tag){
            $this->tag = $request->tag;
        }
        if($request->teacher){
            $this->teacher = $request->teacher;
        }        
        $this->save();
    }

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function liked(){
        return $this->belongsToMany('App\User');
    }

    public function postcomments(){
        return $this->hasMany('App\Comment');
    }
}
