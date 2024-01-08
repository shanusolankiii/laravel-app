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
            $table->tinyInteger('is_virtually_available')->default(0)->after('sync_to_portal');
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
            $table->dropColumn('is_virtually_available');
        });
    }
};
