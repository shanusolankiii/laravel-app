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
        Schema::table('onboarding_clinics', function (Blueprint $table) {
           
            $table->integer('wp_clinic_id')->nullable()->after('has_wordpress');
            
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
        Schema::table('onboarding_clinics', function (Blueprint $table) {
            //
            $table->dropColumn('wp_clinic_id');
            
        });
       
    }
};
