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
            $table->string('pract_degrees')->nullable()->change();
            $table->string('pract_type')->nullable()->after('pract_designation');
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
            $table->string('pract_degrees')->nullable(false);
            $table->dropColumn('pract_type');
        });
    }
};
