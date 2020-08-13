<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//User
Route::post('createUser','UserController@createUser');
Route::get('listUsers','UserController@listUsers');
Route::get('listUser/{id}','UserController@listUser');
Route::put('updateUser/{id}','UserController@updateUser');
Route::delete('deleteUser/{id}','UserController@deleteUser');

//Comment
Route::get('listComments','CommentController@listComments');
Route::get('listCommentsFromPost/{id}','CommentController@listCommentsFromPost');

//Post
Route::get('listPosts','PostController@listPosts');
Route::get('getNumberOfLikes/{post_id}','PostController@getNumberOfLikes');
Route::post('filterPosts','PostController@filterPosts');

//Passport
Route::post('register','API\PassportController@register');
Route::post('login','API\PassportController@login');
Route::group(['middleware'=>'auth:api'], function(){
    //Post
    Route::post('createPost','PostController@createPost');
    Route::post('likePost/{post_id}','PostController@likePost');
    Route::post('dislikePost/{post_id}','PostController@dislikePost');
    // Route::post('likeDislikePost','PostController@likeDislikePost');
    Route::put('editPost/{id}','PostController@editPost');
    Route::delete('deletePost/{id}','PostController@deletePost');
    //User
    Route::get('getDetails','API\PassportController@getDetails');
    Route::get('logout','API\PassportController@logout');
    //Comment
    Route::post('createComment/{id}','CommentController@createComment');
});


//Temporary (for tests)

    Route::put('editProfile','API\PassportController@editProfile');
    Route::delete('deleteProfile','API\PassportController@deleteProfile');
});
