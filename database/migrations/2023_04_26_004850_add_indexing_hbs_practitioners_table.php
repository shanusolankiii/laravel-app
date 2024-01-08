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
        //
        Schema::connection('wp')->table('hbs_practicitoner_table', function (Blueprint $table) {
            // $table->index('pract_clinic');
            // $table->index('pract_services');
            // $table->index('pract_conditions_supported');
            $table->index('pract_visibility');
        });
        Schema::connection('wp')->table('hbs_clinics_table', function (Blueprint $table) {
           
            $table->index('clinic_city_latitute');
            $table->index('clinic_city_longitude');
            $table->index('clinic_address_lat');
            $table->index('clinic_address_long');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::connection('wp')->table('hbs_practicitoner_table', function (Blueprint $table) {
            // $table->dropUnique('pract_clinic');
            // $table->dropUnique('pract_conditions_supported');
            // $table->dropUnique('pract_services');
            $table->dropUnique('pract_visibility');
        });
        Schema::connection('wp')->table('hbs_clinics_table', function (Blueprint $table) {
            $table->dropUnique('clinic_city_latitute');
            $table->dropUnique('clinic_city_longitude');
            $table->dropUnique('clinic_address_lat');
            $table->dropUnique('clinic_address_long');
        });
    }
};
