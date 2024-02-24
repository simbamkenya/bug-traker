<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class Space extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id'
    ];

    public function projects()
    {
        return $this->hasMany(Project::class);
    }
    
    public function user() {
        return $this->belongsTo(User::class);
    }
}
