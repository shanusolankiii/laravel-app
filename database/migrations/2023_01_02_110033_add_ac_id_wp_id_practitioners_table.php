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
            $table->integer('ac_contact_id')->nullable()->after('has_active_campaign');
            $table->integer('wp_practitioner_id')->nullable()->after('has_wordpress');
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
            $table->dropColumn('ac_contact_id');
            $table->dropColumn('wp_practitioner_id');
        });
    }
};
