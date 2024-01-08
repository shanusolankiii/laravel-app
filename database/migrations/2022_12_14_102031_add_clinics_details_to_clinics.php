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
            //
            $table->string('clinic_phone')->default(0);
            $table->string('clinic_rating')->default(0);
            $table->string('clinic_website_url')->nullable();
            $table->text('clinic_description')->nullable();
            $table->string('clinic_city')->nullable();
            $table->string('clinic_city_latitude')->nullable();
            $table->string('clinic_city_longitude')->nullable();
            $table->string('clinic_address_latitude')->nullable();
            $table->string('clinic_address_longitude')->nullable();
            $table->boolean('clinic_visibility')->default(1);
            $table->boolean('clinic_virtual')->default(0);
            $table->string('clinic_placeID')->nullable();
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
            $table->dropColumn('clinic_phone');
            $table->dropColumn('clinic_rating');
            $table->dropColumn('clinic_website_url');
            $table->dropColumn('clinic_description');
            $table->dropColumn('clinic_city');
            $table->dropColumn('clinic_city_latitude');
            $table->dropColumn('clinic_city_longitude');
            $table->dropColumn('clinic_address_latitude');
            $table->dropColumn('clinic_address_longitude');
            $table->dropColumn('clinic_visibility');
            $table->dropColumn('clinic_virtual');
            $table->dropColumn('clinic_placeID');
        });
    }
};
