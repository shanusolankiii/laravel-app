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
            $table->unsignedBigInteger('user_id')->after('id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('pract_title')->after('user_id');
            $table->string('pract_name')->after('pract_title');
            $table->string('pract_email')->after('pract_name')->unique();
            $table->string('pract_phone')->after('pract_email')->nullable();
            $table->string('pract_designation')->after('pract_phone')->nullable();
            $table->string('pract_image')->after('pract_designation');
            $table->longText('pract_clinic')->after('pract_image');
            $table->longText('pract_conditions_supported')->after('pract_clinic');
            $table->text('pract_languages_spoken')->after('pract_conditions_supported')->nullable();
            $table->string('pract_license_year')->after('pract_languages_spoken');
            $table->string('pract_accepting_new')->after('pract_license_year');
            $table->string('pract_direct_bill_ins')->after('pract_accepting_new');
            $table->string('pract_free_call')->after('pract_direct_bill_ins');
            $table->longText('pract_services')->after('pract_free_call');
            $table->longText('pract_bio')->after('pract_services')->nullable();
            $table->string('pract_degrees')->after('pract_bio');
            $table->longText('pract_education')->after('pract_degrees')->nullable();
            $table->longText('pract_association')->after('pract_education')->nullable();
            $table->integer('pract_visibility')->after('pract_association')->default(0);
            $table->string('pract_website')->after('pract_visibility')->nullable();
            $table->string('pract_leads')->after('pract_website')->default('No');
            $table->string('pract_content')->after('pract_leads')->default('No');
            $table->string('pract_consent')->after('pract_content')->default('No');
            $table->string('pract_awareness')->after('pract_consent')->default('No');
            $table->string('pract_guest_teacher')->after('pract_awareness')->nullable();
            $table->integer('pract_reviews')->after('pract_guest_teacher')->default(0);
            $table->integer('sync_to_wp')->after('pract_reviews')->default(0);
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
            //
        });
    }
};
