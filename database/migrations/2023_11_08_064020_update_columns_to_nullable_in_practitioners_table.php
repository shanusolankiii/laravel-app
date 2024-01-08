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
           $table->string('pract_direct_bill_ins')->nullable()->change();
           $table->string('pract_accepting_new')->nullable()->change();
           $table->string('pract_awareness')->nullable()->change();
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
            $table->dropColumn('pract_direct_bill_ins');
            $table->dropColumn('pract_accepting_new');
            $table->dropColumn('pract_awareness');
        });
    }
};