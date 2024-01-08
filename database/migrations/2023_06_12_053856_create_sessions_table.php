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
        // Schema::connection('wp')->table('hbs_session_data', function (Blueprint $table) {
        //     $table->string('location_address')->nullable()->after('checkbox');
        //     $table->string('location_city')->nullable()->after('location_address');
        //     $table->string('address_latitude')->nullable()->after('location_city');
        //     $table->string('address_longitude')->nullable()->after('address_latitude');
        //     $table->string('address_place_id')->nullable()->after('address_longitude');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::connection('wp')->table('hbs_session_data', function (Blueprint $table) {
        //     $table->dropColumn('location_address');
        //     $table->dropColumn('location_city');
        //     $table->dropColumn('address_latitude');
        //     $table->dropColumn('address_longitude');
        //     $table->dropColumn('address_place_id');
        // });
    }
};