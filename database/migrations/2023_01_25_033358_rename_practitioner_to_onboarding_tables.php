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
        Schema::rename('practitioners', 'onboarding_practitioners');
        Schema::rename('practitioner_submissions', 'onboarding_practitioners_data');
        Schema::rename('clinics', 'onboarding_clinics_data'); 
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('onboarding_practitioners'); 
        Schema::dropIfExists('practitioners');
        Schema::drop('onboarding_practitioners_data'); 
        Schema::dropIfExists('practitioner_submissions');
        Schema::drop('onboarding_clinics_data'); 
        Schema::dropIfExists('clinics');
    }
};
