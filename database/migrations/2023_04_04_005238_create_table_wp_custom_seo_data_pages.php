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
        Schema::create('meta_data_for_urls', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('url');
            $table->string('canonical_url')->unique();
            $table->text('page_title');
            $table->text('meta_title')->nullable();
            $table->longText('meta_description')->nullable();
            $table->longText('page_description')->nullable();
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
        Schema::dropIfExists('meta_data_for_urls');
    }
};
