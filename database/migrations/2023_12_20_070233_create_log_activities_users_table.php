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
        Schema::create('log_activities_users', function (Blueprint $table) {
            $table->id();
            $table->string('ip_address');
            $table->string('session_id');
            $table->integer('user_id')->default(0);
            $table->foreignId('module_id')->nullable()->constrained('log_master_module');
            $table->foreignId('submodule_id')->nullable()->constrained('log_master_submodule');
            $table->foreignId('event_id')->nullable()->constrained('log_master_event');
            $table->integer('reference_id')->nullable();
            $table->string('country_id');
            $table->string('state_id');
            $table->string('city_id')->default(0);
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
        Schema::dropIfExists('log_activities_users');
    }
};
