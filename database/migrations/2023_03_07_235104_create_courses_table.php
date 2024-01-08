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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('course_title');
            $table->text('course_description')->nullable();
            $table->string('course_creator')->nullable();
            $table->string('instructors')->nullable();
            $table->integer('credit_counts')->nullable();          
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')
                 ->references('id')->on('categories');
            $table->string('course_logo')->nullable();
            $table->integer('price')->nullable();
            $table->integer('special_price')->nullable();
            $table->string('cta_label')->nullable();
            $table->string('cta_link')->nullable();          
            $table->integer('is_active')->default(0);          
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
        Schema::dropIfExists('courses');
    }
};
