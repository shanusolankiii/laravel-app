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
        // Drop the existing unique key
        Schema::connection('wp')->table('hbs_clinics_table', function (Blueprint $table) {
            $table->dropUnique('unique_clinic_name_email_city');
        });

        // Add a new unique key without "clinic_email"
        Schema::connection('wp')->table('hbs_clinics_table', function (Blueprint $table) {
            $table->unique(['clinic_name', 'clinic_city'], 'unique_clinic_name_city');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop the new unique key
        Schema::connection('wp')->table('hbs_clinics_table', function (Blueprint $table) {
            $table->dropUnique('unique_clinic_name_city');
        });

        // Recreate the old unique key
        Schema::connection('wp')->table('hbs_clinics_table', function (Blueprint $table) {
            $table->unique(
                ['clinic_name', 'clinic_email', 'clinic_city'],
                'unique_clinic_name_email_city'
            );
        });
    }
};
