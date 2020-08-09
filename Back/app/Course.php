<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Course extends Model
{
    public function createCourse(Request $request){
        $this->name = $request->name;
        $this->teacher = $request->teacher;
        $this->save();
    }
}
