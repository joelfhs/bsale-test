<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\V1\CategoryController;
use App\Http\Controllers\Api\V1\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/


//Route::apiResource('v1/categorias', CategoryController::class)->only(['index', 'show']);
//Route::apiResource('v1/productos', ProductController::class)->only(['index', 'show']);

Route::get('v1/categories', [CategoryController::class,'index'])->name('api.v1.categories.index');
Route::get('v1/categories/{id}', [CategoryController::class,'show'])->name('api.v1.categories.show');

Route::get('v1/products', [ProductController::class,'index'])->name('api.v1.products.index');
Route::get('v1/products/{id}', [ProductController::class,'show'])->name('api.v1.products.show');

Route::get('v1/products/by-category/{category}', [ProductController::class,'byCategory'])->name('api.v1.products.by-category');

Route::get('v1/products/search/{product}', [ProductController::class,'search'])->name('api.v1.products.search');