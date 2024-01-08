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
            $table->timestamp('last_login_at')->nullable()->after('is_virtually_available');
        });
        Schema::connection('wp')->table('hbs_practicitoner_table', function (Blueprint $table) {
            $table->timestamp('last_login_at')->nullable()->after('is_virtually_available');
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
            $table->dropColumn('last_login_at');
        });
        Schema::connection('wp')->table('hbs_practicitoner_table', function (Blueprint $table) {
            $table->dropColumn('last_login_at');
        });
    }
};