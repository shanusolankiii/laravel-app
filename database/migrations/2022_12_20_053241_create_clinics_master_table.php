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
        Schema::create('clinics_master', function (Blueprint $table) {
            $table->id();       
            $table->string('session_id');
            $table->boolean('is_completed')->default(0);
            $table->boolean('has_active_campaign')->default(0);
            $table->boolean('is_approved')->default(0);
            $table->boolean('has_wordpress')->default(0);
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
        Schema::dropIfExists('clinics_master');
    }
};
