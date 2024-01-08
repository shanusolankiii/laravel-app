<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::connection('wp')->create('hbs_popular_cities', function (Blueprint $table) {
            $table->id();
            $table->string('city_name');
            $table->string('city_slug')->unique();
            $table->string('city_lat');
            $table->string('city_long');
            $table->timestamps();
        });
        Schema::create('hbs_popular_cities', function (Blueprint $table) {
            $table->id();
            $table->string('city_name');
            $table->string('city_slug')->unique();
            $table->string('city_lat');
            $table->string('city_long');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('wp')->table('hbs_popular_cities', function (Blueprint $table) {
            $table->dropColumn('city_name');
            $table->dropColumn('city_slug');
            $table->dropColumn('city_lat');
            $table->dropColumn('city_long');
        });
        Schema::table('hbs_popular_cities', function (Blueprint $table) {
            $table->dropColumn('city_name');
            $table->dropColumn('city_slug');
            $table->dropColumn('city_lat');
            $table->dropColumn('city_long');
        });
    }
};
