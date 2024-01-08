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
            $table->string('pract_is_nd')->nullable()->after('wp_pract_id');
            $table->string('pract_consent')->nullable()->change();
            $table->string('pract_content')->nullable()->change();
        });
        Schema::connection('wp')->table('hbs_practicitoner_table', function (Blueprint $table) {
            //
            $table->string('pract_is_nd')->nullable()->after('pract_id');
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
            $table->dropColumn('pract_is_nd');
            // $table->string('pract_consent')->nullable(false);
            // $table->string('pract_content')->nullable(false);
        });
        Schema::connection('wp')->table('hbs_practicitoner_table', function (Blueprint $table) {
            //
            $table->dropColumn('pract_is_nd');
        });
    }
};
