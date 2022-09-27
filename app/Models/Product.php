<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'product';

    protected $fillable = ['id', 'name', 'url_image', 'price', 'discount', 'category'];

    protected $primaryKey = 'id';

    public function getCategory(){
		return $this->belongsTo(Category::class, 'category', 'id');
	}

    //Query Scope
    public function scopeName($query, $name){
        if($name){
            return $query->where('name','LIKE',"%$name%");
        }
    }

    public function scopeCategory($query, $category){
        if($category){
            return $query->where('category', $category);
        }
    }
}
