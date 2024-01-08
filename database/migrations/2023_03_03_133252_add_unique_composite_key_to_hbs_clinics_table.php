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
        Schema::connection('wp')->table('hbs_clinics_table', function (Blueprint $table) {
            $table->unique(
                [
                    "clinic_name", 
                    "clinic_email", 
                    "clinic_city"
                ], 
                'unique_clinic_name_email_city');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('wp')->table('hbs_clinics_table', function (Blueprint $table) {
            $table->dropUnique('unique_clinic_name_email_city');
        });
    }
};
