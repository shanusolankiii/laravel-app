<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\QuestionController;
use App\Http\Controllers\API\LogUserActivities;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/questions', [QuestionController::class, 'getQuestions']);
Route::match(['options'], 'wp-logger', function () {
    return response('', 200)
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', 'POST')
        ->header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
});
Route::get('wp-logger', [LogUserActivities::class, 'log_activity'])->name('wp-logger');

Route::post('/store', [QuestionController::class, 'store']);
Route::post('/uniqueEmail', [QuestionController::class, 'uniqueEmail']);
Route::post('/saveClinic', [QuestionController::class, 'saveClinic']);

Route::post('/info', [QuestionController::class, 'info']);

Route::post('/searchClinicByNameOrCity', [QuestionController::class, 'searchClinicByNameOrCity']);

Route::post('/addClinicByNameOrCity', [QuestionController::class, 'addClinicByNameOrCity']);

Route::post('/addclinic', [QuestionController::class, 'addclinic']);

Route::post('/addVirtualPractice', [QuestionController::class, 'addVirtualPractice']);

// Route::match(array('GET', 'POST'), 'store', [QuestionController::class, 'store']);
// Route::match(array('GET', 'POST'), 'info', [QuestionController::class, 'info']);
