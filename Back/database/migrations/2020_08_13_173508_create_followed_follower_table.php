<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFollowedFollowerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('followed_follower', function (Blueprint $table) {
            $table->unsignedBigInteger('followed_id')->nullable();
            $table->unsignedBigInteger('follower_id')->nullable();
            $table->timestamps();
        });

        Schema::table('followed_follower', function (Blueprint $table){
            $table->foreign('followed_id')->references('id')->on('users');
            $table->foreign('follower_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('followed_follower');
    }
}
