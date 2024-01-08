<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ClinicController;
use App\Http\Controllers\LogUserActivities;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\API\QuestionController;
use App\Http\Controllers\PractitionerController;
use App\Http\Controllers\UserManagementController;
use App\Http\Controllers\frontend\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return view('home.welcome');
});

Route::get('/url', [PractitionerController::class, 'urlListing'])->name('url-listing');

Route::get('/join', [QuestionController::class, 'join'])->name('onboard-practitioner');
// Route::get('/mail/{id?}', [QuestionController::class, 'sendMailToAdmin']);

Route::controller(AuthController::class)->group(function () {
    Route::get('auth/redirect', 'authRedirect');
    Route::get('auth/callback', 'authCallback');

    Route::get('hb-cpanel', 'login')->name('admin');
    Route::post('admin/logout', 'logout')->name('admin.logout');
});

Route::prefix('hb-cpanel')->group(function () {
    Route::get('/searchClinicByNameOrCity', [QuestionController::class, 'searchClinicByNameOrCity']);
    Route::post('/addclinic', [QuestionController::class, 'addclinic']);


});


Route::group(['prefix' => 'hb-cpanel'], function(){
        Route::get('/home', \App\Http\Livewire\PractitionerTable::class)->name('practitioners');
        Route::get('practitioners', \App\Http\Livewire\PractitionerTable::class)->name('practitioner-table');

        Route::get('practitioners/detail/{id}', \App\Http\Livewire\PractitionerForm::class)->name('practitioner-form');
        Route::post('practitioners/detail/update/{id}', \App\Http\Livewire\PractitionerForm::class, 'questionUpdate')->name('practitioner-form-update');

        Route::delete('practitioner-delete/{id}', [PractitionerController::class, 'deletePractitionerRecord'])->name('deletePractitionerRecord');
        Route::get('practitioner-edit/{id}', [PractitionerController::class, 'editPractitionerRecord'])->name('editPractitionerRecord');
        /* Clinics Module */
        Route::get('clinics', \App\Http\Livewire\ClinicTable::class)->name('clinic-table');
        Route::get('clinics/detail/{id}', \App\Http\Livewire\ClinicForm::class)->name('clinic-form');
        Route::post('clinics/detail/update/{id}', \App\Http\Livewire\PractitionerForm::class, 'clinicUpdate')->name('clinic-form-update');

        Route::get('/create/clinic', [ClinicController::class, 'index'])->name('clinic.create');
        Route::post('/create/clinic', [ClinicController::class, 'create'])->name('clinic.add');
        Route::get('/edit/clinic/{id}', [ClinicController::class, 'edit'])->name('clinic.edit');
        Route::post('/update/clinic/{id}', [ClinicController::class, 'update'])->name('clinic.update');
        Route::delete('/delete/clinic/{id}', [ClinicController::class, 'destroy'])->name('clinic.delete');

        /* Services Module */
        Route::get('services', \App\Http\Livewire\ServiceTable::class)->name('services-table');
        Route::get('services/detail/{id}', \App\Http\Livewire\ServiceForm::class)->name('service-form');
        Route::get('/create/service', [ServiceController::class, 'index'])->name('service.create');
        Route::post('/create/service', [ServiceController::class, 'create'])->name('service.add');

        /* User Management Module */
        Route::get('/user', \App\Http\Livewire\UserManagementTable::class)->name('users_list');
        Route::get('/roles', \App\Http\Livewire\RoleTable::class)->name('roles.table');

        Route::resource('role', RoleController::class);
        Route::resource('users', UserManagementController::class);

        /* Language Management Module */
        Route::get('/languages', \App\Http\Livewire\LanguageTable::class)->name('languages_list');
        Route::get('/create/language', App\Http\Livewire\CreateLanguage::class)->name('create-new-language');
        Route::post('/create/language', \App\Http\Livewire\LanguageMasterForm::class)->name('add-new-language');
        Route::get('languages/detail/{id}', \App\Http\Livewire\LanguageMasterForm::class)->name('language-form');

        /* Course Management Module */
        Route::get('categories', \App\Http\Livewire\CategoryTable::class)->name('category-table');
        Route::get('/category/add',\App\Http\Livewire\CreateCategory::class)->name('category-add');
        Route::get('/category/edit/{category}',\App\Http\Livewire\EditCategory::class)->name('category-edit');


        Route::get('instructors', \App\Http\Livewire\InstructorTable::class)->name('instructor-table');

        Route::get('courses', \App\Http\Livewire\CourseTable::class)->name('course-table');
        Route::get('/course/add',\App\Http\Livewire\CreateCourse::class)->name('course-add');

        Route::get('/course/creators', \App\Http\Livewire\CourseCreatorTable::class)->name('course.creators');
        Route::get('/course/creators/add',\App\Http\Livewire\CreateCourseInstrutor::class)->name('course-creators-add');

        /* SEO data module  */
        Route::get('seoUpdates', \App\Http\Livewire\SeoUpdateTable::class)->name('seo-table');
        Route::get('create/seo-urls', \App\Http\Livewire\CreateSEOUrls::class)->name('create-seo-urls');
        Route::get('/seo/{seoUpdate}',\App\Http\Livewire\EditSeoUpdate::class)->name('meta-data-edit');

        /* Users FAQs module  */
        Route::get('/faq/users/add',\App\Http\Livewire\CreateFAQ::class)->name('faq-users-add');
        Route::get('/faq/users/edit/{userFaq}',\App\Http\Livewire\EditFAQ::class)->name('faq-users-edit');
        Route::get('/faq/users/delete/{userFaq}',\App\Http\Livewire\EditFAQ::class)->name('faq-users-delete');
        Route::get('/faq/users', \App\Http\Livewire\UserFAQTable::class)->name('faq.users');

        /* User Activity  */
        Route::get('/log/activities', \App\Http\Livewire\LogActivitiesUser::class)->name('log-activities');

        /* Dashboard  */
        Route::get('/dashboard/practitioners', \App\Http\Livewire\UserLogPractitioner::class)->name('dashboard-practitioners');
        Route::get('/dashboard/conditions', \App\Http\Livewire\UserLogConditions::class)->name('dashboard-conditions');
        Route::get('/dashboard/services', \App\Http\Livewire\UserLogServices::class)->name('dashboard-services');
        Route::get('/dashboard/cities', \App\Http\Livewire\UserLogCities::class)->name('dashboard-services');
        Route::get('/dashboard/condition/cities', \App\Http\Livewire\UserLogConditonsCity::class)->name('dashboard-services');
        Route::get('/dashboard/services/cities', \App\Http\Livewire\UserLogServicesCity::class)->name('dashboard-services');

        /* Approved Practitioners and Clincs  */
        Route::get('approved/practitioners',\App\Http\Livewire\PractitionerApproved::class)->name('approved-pract');
        Route::get('practitioner/view/{id}',\App\Http\Livewire\ApprovedPractitioners::class)->name('practitioners-edit');

        Route::get('approved/clinics',\App\Http\Livewire\ApprovedClinics::class)->name('approved-clinics');
        Route::get('clinics/view/{id}',\App\Http\Livewire\ClinicApproved::class)->name('clinics-view');

        Route::get('/popular-city',\App\Http\Livewire\PupularCityList::class)->name('popular-city');
        Route::get('/popular-city/create',\App\Http\Livewire\PopularCityCreate::class)->name('city-add');
        Route::get('/popular-city/view/{id}',\App\Http\Livewire\PopularCityUpdate::class)->name('popular-city-view');

        // Route::get('/user-visited',\App\Http\Livewire\LeadsTable::class)->name('user-visited');
        Route::get('/user-visited',\App\Http\Livewire\UserLocationLeads::class)->name('user-visited');
        Route::get('/user-visited/view/{id}',\App\Http\Livewire\LeadsView::class)->name('user-visited-view');


});

Route::group(['prefix' => 'practitioners', 'middleware' => ['auth', 'role:practitioner']], function () {
    Route::get('/logout', [ProfileController::class, 'logout'])->name('logout');
    Route::get('/profile', [ProfileController::class, 'index'])->name('practitioner-profile');
    Route::post('/profile/{id}', [ProfileController::class, 'updatePersonalInfo'])->name('update-personal-info');
    Route::post('/profiles/{id}', [ProfileController::class, 'updateEducationAssociation'])->name('update-education-association');
    Route::post('/profiless/{id}', [ProfileController::class, 'updatePracticeInfo'])->name('update-practice-info');
    Route::post('/profilesss/{id}', [ProfileController::class, 'updateClinicInfo'])->name('update-clinic-info');
    Route::post('/profilessss/{id}', [ProfileController::class, 'updateAboutUs'])->name('update-about-us');
    Route::post('/profilesssss/{id}', [ProfileController::class, 'addClinicInfo'])->name('add-clinic-info');
    Route::post('/profile/update-image/{id}', [ProfileController::class, 'updateProfileImage'])->name('update-profile-image');
    Route::get('/hb-academy', [ProfileController::class, 'hbAcademy'])->name('hb-academy');
    Route::get('/profile/search-clinic', [ProfileController::class, 'searchClinics'])->name('search-clinic');
    Route::post('/profilessssss/{id}', [ProfileController::class, 'updateVirtualClinicInfo'])->name('update-virtual-clinic-info');
    Route::get('/dashboard', [ProfileController::class, 'dashboard'])->name('practitioner-dashboard');
    Route::post('/profile/youtube-video/{id}', [ProfileController::class, 'updateYouTubeVideoLinks'])->name('update-youtube-links');
    Route::post('/practitioners/add-faq/{id}', [ProfileController::class, 'addFAQs'])->name('practitioners-add-faq');
    Route::get('/practitioners/delete-faq//{id}{faqIndex}', [ProfileController::class, 'deleteFAQs'])->name('practitioners-delete-faq');
    Route::post('/practitioners/{id}/edit-faq/{faqIndex}', [ProfileController::class, 'updateFAQs'])->name('practitioners-edit-faq');


});
Route::group(['prefix' => 'practitioners', 'middleware' => ['web']], function () {
    Route::get('/logout', [ProfileController::class, 'logout'])->name('logout');
});

Route::prefix('practitioners')->group(function () {
    Route::get('/', [\App\Http\Controllers\frontend\PractitionerController::class, 'index'])->name('practitioners');
    Route::get('/login', [\App\Http\Controllers\frontend\PractitionerController::class, 'login'])->name('practitioner-login');
    Route::post('/login', [\App\Http\Controllers\frontend\PractitionerController::class, 'postLogin'])->name('practitioner-post-login');

    Route::get('/forgot-password', [\App\Http\Controllers\frontend\PractitionerController::class, 'forgotPassword'])->name('practitioner-forgot-password');
    Route::post('/forgot-password', [\App\Http\Controllers\frontend\PractitionerController::class, 'postForgotPassword'])->name('practitioner-post-forgot-password');

    Route::get('/reset-password/{token}', [\App\Http\Controllers\frontend\PractitionerController::class, 'showResetPasswordForm'])->name('practitioner-reset-password');
    Route::post('/reset/password', [\App\Http\Controllers\frontend\PractitionerController::class, 'submitResetPasswordForm'])->name('practitioner-post-reset-password');

});

// Do Codes here
Route::get('do', function () {
    return $disk = Storage::disk('do')->allFiles('/');
});

Route::get('/courseview/{cid}/{token}', [\App\Http\Controllers\frontend\PractitionerController::class, 'course_view'])->name('course-view');
Route::get('/webinarview/{postid}/{token}', [\App\Http\Controllers\frontend\PractitionerController::class, 'webinar_view'])->name('webinar-view');
