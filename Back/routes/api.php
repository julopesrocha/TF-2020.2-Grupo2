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
Route::post('filterUsers','UserController@filterUsers');
Route::get('listUsers','UserController@listUsers');
Route::get('listUser/{id}','UserController@listUser');
Route::put('updateUser/{id}','UserController@updateUser');
Route::delete('deleteUser/{id}','UserController@deleteUser');

//Comment
Route::get('listComments','CommentController@listComments');
Route::get('listCommentsFromPost/{id}','CommentController@listCommentsFromPost');

//Post
Route::get('getPost/{id}','PostController@getPost');
Route::get('listPosts','PostController@listPosts');
Route::get('getNumberOfLikes/{post_id}','PostController@getNumberOfLikes');
Route::get('getMostLikedPosts','PostController@getMostLikedPosts');
Route::post('filterPosts','PostController@filterPosts');

//Passport
Route::post('register','API\PassportController@register');
Route::post('login','API\PassportController@login');
Route::group(['middleware'=>'auth:api'], function(){
    //Post
    Route::get('likePost/{id}','PostController@likePost');
    Route::get('dislikePost/{id}','PostController@dislikePost');
    Route::get('getFollowingPosts','PostController@getFollowingPosts');
    Route::post('createPost','PostController@createPost');
    Route::put('editPost/{id}','PostController@editPost');
    Route::delete('deletePost/{id}','PostController@deletePost');
    //User
    Route::get('getDetails','API\PassportController@getDetails');
    Route::get('logout','API\PassportController@logout');
    Route::get('listUserFollowing','UserController@listUserFollowing');
    Route::get('followUser/{id}','UserController@followUser');
    //Comment
    Route::post('createComment/{id}','CommentController@createComment');

//Temporary (for tests)
// Route::post('followUser/{followed_id}/{follower_id}','UserController@followUser');
// Route::get('listUserFollowers/{id}','UserController@listUserFollowers');
// Route::get('listUserFollowing/{id}','UserController@listUserFollowing');

    Route::put('editProfile','API\PassportController@editProfile');
    Route::delete('deleteProfile','API\PassportController@deleteProfile');
});
