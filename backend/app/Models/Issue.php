<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'subject',
        'priority',
        'status',
        'due',
        'description',
        'category_id',
        'assignee',
        'issue_type'
    ];

    public function types(){
        return $this->belongsTo(IssueType::class);
    }
    public function category(){
        return $this->belongsTo(Category::class);
    }
}
