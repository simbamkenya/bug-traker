<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Issue;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function issues(){
        return $this->hasMany(Issue::class);
    }
}
