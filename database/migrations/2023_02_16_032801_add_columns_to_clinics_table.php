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
        Schema::table('clinics', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->after('id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('session_id')->after('user_id')->nullable();
            $table->integer('wp_clinic_id')->after('session_id');
            $table->string('clinic_name')->after('wp_clinic_id');
            $table->string('clinic_phone')->after('clinic_name');
            $table->string('clinic_email')->after('clinic_phone')->unique();
            $table->string('clinic_rating')->after('clinic_phone')->nullable();
            $table->string('clinic_website_url')->after('clinic_rating')->nullable();
            $table->text('clinic_description')->after('clinic_website_url')->nullable();;
            $table->string('clinic_city')->after('clinic_description');
            $table->string('clinic_city_latitude')->after('clinic_city')->nullable();
            $table->string('clinic_city_longitude')->after('clinic_city_latitude')->nullable();
            $table->string('clinic_address_lat')->after('clinic_city_longitude');
            $table->string('clinic_address_long')->after('clinic_address_lat');
            $table->integer('clinic_visible')->after('clinic_address_long')->default(0);
            $table->integer('clinic_virtual')->after('clinic_visible')->default(0);
            $table->string('clinic_place_id')->after('clinic_virtual');
            $table->integer('sync_to_wp')->after('clinic_place_id')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('clinics', function (Blueprint $table) {
            //
        });
    }
};
