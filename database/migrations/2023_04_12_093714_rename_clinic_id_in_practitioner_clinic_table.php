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
        Schema::table('practitioner_clinic', function (Blueprint $table) {
            //
            $table->renameColumn('clinic_id', 'clinics_master_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('practitioner_clinic', function (Blueprint $table) {
            //
            $table->renameColumn('clinics_master_id', 'clinic_id');
        });
    }
};
