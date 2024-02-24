<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Space;
use App\Models\User;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'key',
        'space_id',
        'user_id'
    ];

    public function space(){
        return $this->belongsTo(Space::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
