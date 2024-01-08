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
        Schema::connection('wp')->table('hbs_service_table', function (Blueprint $table) {
            $table->tinyInteger('is_virtual')->default(0)->after('service_visibility');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('wp')->table('hbs_service_table', function (Blueprint $table) {
            $table->dropColumn('is_virtual');
        });
    }
};
