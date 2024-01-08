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
        Schema::connection('wp')->table('hbs_practicitoner_table', function (Blueprint $table) {
            $table->integer('discovery_call_booked')->nullable()->default(0)->after('pract_association');
            $table->integer('profile_users_visit')->nullable()->default(0)->after('discovery_call_booked');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('wp')->table('hbs_practicitoner_table', function (Blueprint $table) {
            $table->dropColumn('discovery_call_booked');
            $table->dropColumn('profile_users_visit');
        });
    }
};
