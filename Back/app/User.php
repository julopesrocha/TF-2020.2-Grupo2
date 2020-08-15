<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Http\Request;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable;
    use HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function createUser(Request $request){
        $this->name = $request->name;
        $this->email = $request->email;
        $this->password = bcrypt($request->password);
        $this->degree = $request->degree;        
        $this->save();
    }

    public function updateUser(Request $request){
        if($request->name){
            $this->name = $request->name;
        }
        if($request->email){ 
            $this->email = $request->email;   
        }
        if($request->password){
            $this->password = $request->password;    
        }
        if($request->degree){
            $this->degree = $request->degree;     
        }              
        $this->save();
    }

    public function posts(){
        return $this->hasMany('App\Post');
    }

    public function likes(){
        return $this->belongsToMany('App\Post');
    }

    public function comments(){
        return $this->hasMany('App\Comment');
    }


    // VERIFICAR SE ESTÁ CERTO

    public function followers(){
        return $this->belongsToMany('App\User','followed_follower','followed_id','follower_id');
    }

    public function following(){
        return $this->belongsToMany('App\User','followed_follower','follower_id','followed_id');
    }

}
