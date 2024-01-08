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
        Schema::connection('wp')->create('hbs_pract_clinic', function (Blueprint $table) {
            $table->id();
            $table->integer('pract_id');
            $table->integer('clinic_id');
            $table->timestamps();
        });
        Schema::connection('wp')->create('hbs_pract_condition', function (Blueprint $table) {
            $table->id();
            $table->integer('pract_id');
            $table->integer('condition_id');
            $table->timestamps();
        });
        Schema::connection('wp')->create('hbs_pract_service', function (Blueprint $table) {
            $table->id();
            $table->integer('pract_id');
            $table->integer('service_id');
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
        Schema::dropIfExists('pract_clinic');
        Schema::dropIfExists('pract_condition');
        Schema::dropIfExists('pract_service');
    }
};
