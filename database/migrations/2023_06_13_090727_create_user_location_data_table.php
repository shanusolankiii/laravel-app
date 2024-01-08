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
        Schema::connection('wp')->create('hbs_user_location_data', function (Blueprint $table) {
            $table->id();
            $table->string('session_id')->unique();
            $table->string('conditions')->nullable();
            $table->string('services')->nullable();
            $table->string('location_address')->nullable();
            $table->string('location_city')->nullable();
            $table->string('address_latitude')->nullable();
            $table->string('address_longitude')->nullable();
            $table->string('address_place_id')->nullable();
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
        Schema::dropIfExists('hbs_user_location_data');
    }
};