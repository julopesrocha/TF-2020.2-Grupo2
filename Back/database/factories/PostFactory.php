<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'content'=>$faker->text,
        'teacher'=>$faker->name,
        'course'=>$faker->randomElement($array = array ('Cálculo I','Circuitos Lógicos','Ética II','Ciência da Computação','Fotografia','Teoria do Design I','Eletromagnetismo','Banco de Dados','Álgebra Linear II')),
        'tag'=>$faker->randomElement($array = array ('Feedback','Recomendações','Dúvidas','Outros'))
    ];
});
