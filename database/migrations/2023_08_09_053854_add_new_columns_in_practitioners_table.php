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
            $table->string('yt_video_link')->nullable()->after('profile_users_visit');
            $table->json('faqs')->nullable()->after('yt_video_link');
        });
        Schema::connection('wp')->table('hbs_practicitoner_table', function (Blueprint $table) {
            $table->string('yt_video_link')->nullable()->after('profile_users_visit');
            $table->json('faqs')->nullable()->after('yt_video_link');
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
            $table->dropColumn('yt_video_link');
            $table->dropColumn('faqs');
        });
        Schema::table('hbs_practicitoner_table', function (Blueprint $table) {
            $table->dropColumn('yt_video_link');
            $table->dropColumn('faqs');
        });
    }
};
