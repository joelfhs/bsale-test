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
}
