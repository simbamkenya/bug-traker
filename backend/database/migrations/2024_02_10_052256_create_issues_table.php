<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('issues', function (Blueprint $table) {
            $table->id();
            $table->date('due')->nullable();
            $table->string('status')->nullable();
            $table->string('subject');
            $table->string('priority')->nullable();

            $table->string('description')->nullable();
            $table->foreignId('category_id')->nullable()->constrained();
            $table->foreignId('issue_type_id')->nullable()->constrained();
            $table->foreignId('project_id')->nullable()->constrained();

           // $table->foreignId('assignee')->nullable()->constrained();

           $table->unsignedBigInteger('assignee');
           $table->foreign('assignee')->references('id')->on('users');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('issues');
    }
};
