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
        Schema::table('courses', function (Blueprint $table) {
            $table->dropForeign('courses_category_id_foreign');
            $table->dropColumn('category_id');
            $table->string('category')->nullable()->after('credit_counts');
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
        Schema::table('courses', function (Blueprint $table) {
            $table->foreign('category_id')
            ->references('id')->on('categories');
            $table->dropColumn('category');
        });
    }
};
