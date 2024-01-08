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
        Schema::dropIfExists('practitioner_clinics');
        Schema::dropIfExists('clinic_practitioners');
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::create('practitioner_clinics', function (Blueprint $table) {
            $table->foreignId('practitioner_id')->constrained('practitioners');
            $table->foreignId('clinic_id')->constrained('clinics');
        });
    }
};
