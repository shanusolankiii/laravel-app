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
        //
        Schema::table('practitioners', function (Blueprint $table) {
            //
            $table->longText('pract_services')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('practitioners', function (Blueprint $table) {
            //
            $table->longText('pract_services')->after('pract_free_call');
        });
    }
};
