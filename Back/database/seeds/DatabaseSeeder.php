<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserTableSeeder::class);

        DB::table('users')->insert([
            'name' => 'Lucas Pereira',
            'email' => 'lucas@email.com',
            'password' => bcrypt('senha123'),
            'degree' => 'Engenharia Elétrica',
            'admin' => 1,
        ]);

        DB::table('users')->insert([
            'name' => 'Anna Bruzaca',
            'email' => 'anna@email.com',
            'password' => bcrypt('senha123'),
            'degree' => 'Design',
            'admin' => 1,
        ]);

        DB::table('users')->insert([
            'name' => 'Arthur Albuquerque',
            'email' => 'arthur@email.com',
            'password' => bcrypt('senha123'),
            'degree' => 'Ciência da Computação',
            'admin' => 1,
        ]);
    }

}
