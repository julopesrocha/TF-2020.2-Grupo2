<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Course;

class CourseController extends Controller
{
    public function createCourse(Request $request){
        $course = new Course;
        $course->createCourse($request);
        return response()->json($course);
    }
}
