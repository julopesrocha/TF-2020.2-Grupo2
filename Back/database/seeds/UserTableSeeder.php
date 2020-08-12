<?php

use Illuminate\Database\Seeder;
use App\Post;
use App\Comment;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory (App\User::class,10)->create()->each(function($user){
            $posts = factory(App\Post::class,2)->make();
            $user->posts()->saveMany($posts);

            $comment = factory(App\Comment::class,3)->make();
            $user->comments()->saveMany($comment);
            
        });

        $all_posts = App\Post::all();

        App\User::all()->each(function ($user) use ($all_posts){
            $user->likes()->attach(
                $all_posts->random(rand(1,10))->pluck('id')->toArray()
            );
        });

    }
}
