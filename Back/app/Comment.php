<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Comment extends Model
{
    public function createComment(Request $request){
        $this->comment = $request->comment;
        $this->save();
    }

    public function user(){
        return $this->belongsTo('App\User');
    }
}
