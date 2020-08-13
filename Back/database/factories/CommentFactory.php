<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Comment;
use App\Post;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    $posts = Post::all()->pluck('id')->toArray(); 
    return [
        'comment'=>$faker->text,
        'post_id'=>$faker->randomElement($posts)
    ];
});
