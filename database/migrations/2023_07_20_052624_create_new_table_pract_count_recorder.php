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
        Schema::create('pract_count_recorder', function (Blueprint $table) {
            $table->id();
            $table->string('session_id');
            $table->integer('user_id')->default(0);
            $table->integer('pract_id');
            $table->integer('profile_view')->default(0);
            $table->integer('bad_click')->default(0);
            $table->integer('bad_submit')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('pract_count_recorder', function (Blueprint $table) {
            $table->dropColumn('session_id');
            $table->dropColumn('user_id');
            $table->dropColumn('pract_id');
            $table->dropColumn('profile_view');
            $table->dropColumn('bad_click');
            $table->dropColumn('bad_submit');
        });
    }
};
