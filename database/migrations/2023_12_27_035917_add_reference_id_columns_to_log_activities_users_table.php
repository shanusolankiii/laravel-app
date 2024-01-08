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
        Schema::table('log_activities_users', function (Blueprint $table) {
            $table->integer('reference_id')->nullable(false)->change();
            $table->integer('reference_id_2')->nullable()->after('reference_id');
            $table->integer('reference_id_3')->nullable()->after('reference_id_2');
            $table->integer('reference_id_4')->nullable()->after('reference_id_3');
            $table->string('country_id')->nullable()->change();
            $table->string('state_id')->nullable()->change();
            $table->string('city_id')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('log_activities_users', function (Blueprint $table) {
            $table->dropColumn('reference_id_2');
            $table->dropColumn('reference_id_3');
            $table->dropColumn('reference_id_3');
            $table->dropColumn('reference_id_4');
        });
    }
};
