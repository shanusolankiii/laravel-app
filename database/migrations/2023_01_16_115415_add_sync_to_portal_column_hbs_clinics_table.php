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
            //
            $table->boolean('sync_to_portal')->default(0)->after('clinic_placeID');
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
            //
            $table->dropColumn('sync_to_portal');
            
        });
    }
};
