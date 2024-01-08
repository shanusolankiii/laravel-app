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
        Schema::table('practitioners', function (Blueprint $table) {
            //
            $table->string('pract_v_clinic_name')->nullable()->after('pract_clinic');
            $table->string('pract_v_clinic_address')->nullable()->after('pract_v_clinic_name');
            $table->json('pract_v_clinic_working_hours')->nullable()->after('pract_v_clinic_address');
            $table->string('pract_v_clinic_place_id')->nullable()->after('pract_v_clinic_working_hours');
            $table->string('pract_v_clinic_latitude')->nullable()->after('pract_v_clinic_place_id');
            $table->string('pract_v_clinic_longitude')->nullable()->after('pract_v_clinic_latitude');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('practitioners', function (Blueprint $table) {
            //
            $table->dropColumn('pract_v_clinic_name');
            $table->dropColumn('pract_v_clinic_address');
            $table->dropColumn('pract_v_clinic_working_hours');
            $table->dropColumn('pract_v_clinic_place_id');
            $table->dropColumn('pract_v_clinic_latitude');
            $table->dropColumn('pract_v_clinic_longitude');
        });
    }
};
