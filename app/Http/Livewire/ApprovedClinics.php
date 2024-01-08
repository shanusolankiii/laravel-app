<?php

namespace App\Http\Livewire;

use App\Models\ClinicsMaster;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Builder;
use PowerComponents\LivewirePowerGrid\Rules\{Rule, RuleActions};
use PowerComponents\LivewirePowerGrid\Traits\ActionButton;
use PowerComponents\LivewirePowerGrid\{Button, Column, Exportable, Footer, Header, PowerGrid, PowerGridComponent, PowerGridEloquent};

final class ApprovedClinics extends PowerGridComponent
{
    use ActionButton;

    /*
    |--------------------------------------------------------------------------
    |  Features Setup
    |--------------------------------------------------------------------------
    | Setup Table's general features
    |
    */
    public function setUp(): array
    {
        $this->showCheckBox();

        return [
            Exportable::make('export')
                ->striped()
                ->type(Exportable::TYPE_XLS, Exportable::TYPE_CSV),
            Header::make()->showSearchInput(),
            Footer::make()
                ->showPerPage()
                ->showRecordCount(),
        ];
    }

    /*
    |--------------------------------------------------------------------------
    |  Datasource
    |--------------------------------------------------------------------------
    | Provides data to your Table using a Model or Collection
    |
    */

    /**
    * PowerGrid datasource.
    *
    * @return Builder<\App\Models\ClinicsMaster>
    */
    public function datasource(): Builder
    {
        return ClinicsMaster::query();
    }

    /*
    |--------------------------------------------------------------------------
    |  Relationship Search
    |--------------------------------------------------------------------------
    | Configure here relationships to be used by the Search and Table Filters.
    |
    */

    /**
     * Relationship search.
     *
     * @return array<string, array<int, string>>
     */
    public function relationSearch(): array
    {
        return [];
    }

    /*
    |--------------------------------------------------------------------------
    |  Add Column
    |--------------------------------------------------------------------------
    | Make Datasource fields available to be used as columns.
    | You can pass a closure to transform/modify the data.
    |
    | ❗ IMPORTANT: When using closures, you must escape any value coming from
    |    the database using the `e()` Laravel Helper function.
    |
    */
    public function addColumns(): PowerGridEloquent
    {
        return PowerGrid::eloquent()
            ->addColumn('id')
        //     ->addColumn('session_id')

        //    /** Example of custom column using a closure **/
        //     ->addColumn('session_id_lower', function (ClinicsMaster $model) {
        //         return strtolower(e($model->session_id));
        //     })

        //     ->addColumn('user_id')
        //     ->addColumn('wp_clinic_id')
            ->addColumn('clinic_name')
            ->addColumn('clinic_email')
            ->addColumn('clinic_address')
            // ->addColumn('clinic_city')
            ->addColumn('clinic_phone')
            // ->addColumn('clinic_rating')
            // ->addColumn('clinic_website_url')
            // ->addColumn('clinic_description')
            // ->addColumn('clinic_city_latitude')
            // ->addColumn('clinic_city_longitude')
            // ->addColumn('clinic_address_lat')
            // ->addColumn('clinic_address_long')
            // ->addColumn('clinic_visible')
            // ->addColumn('clinic_virtual')
            // ->addColumn('clinic_place_id')
            // ->addColumn('sync_to_wp')
            // ->addColumn('created_at_formatted', fn (ClinicsMaster $model) => Carbon::parse($model->created_at)->format('d/m/Y H:i:s'))
            // ->addColumn('updated_at_formatted', fn (ClinicsMaster $model) => Carbon::parse($model->updated_at)->format('d/m/Y H:i:s'))
            ;
    }

    /*
    |--------------------------------------------------------------------------
    |  Include Columns
    |--------------------------------------------------------------------------
    | Include the columns added columns, making them visible on the Table.
    | Each column can be configured with properties, filters, actions...
    |
    */

     /**
     * PowerGrid Columns.
     *
     * @return array<int, Column>
     */
    public function columns(): array
    {
        return [
            Column::make('ID', 'id')
            ->sortable(),
                // ->makeInputRange(),

            // Column::make('SESSION ID', 'session_id')
            //     ->sortable()
            //     ->searchable()
            //     ->makeInputText(),

            // Column::make('USER ID', 'user_id')
            //     ->makeInputRange(),

            // Column::make('WP CLINIC ID', 'wp_clinic_id')
            //     ->makeInputRange(),

            Column::make('CLINIC NAME', 'clinic_name')
                ->sortable()
                ->searchable(),
                // ->makeInputText(),

            Column::make('CLINIC EMAIL', 'clinic_email')
                ->sortable()
                ->searchable(),
                // ->makeInputText(),

            Column::make('CLINIC ADDRESS', 'clinic_address')
                ->sortable()
                ->searchable(),
                // ->makeInputText(),

            // Column::make('CLINIC CITY', 'clinic_city')
            //     ->sortable()
            //     ->searchable(),
                // ->makeInputText(),

            Column::make('CLINIC PHONE', 'clinic_phone')
                ->sortable()
                ->searchable(),
                // ->makeInputText(),

            // Column::make('CLINIC RATING', 'clinic_rating')
            //     ->sortable()
            //     ->searchable()
            //     ->makeInputText(),

            // Column::make('CLINIC WEBSITE URL', 'clinic_website_url')
            //     ->sortable()
            //     ->searchable()
            //     ->makeInputText(),

            // Column::make('CLINIC DESCRIPTION', 'clinic_description')
            //     ->sortable()
            //     ->searchable(),

            // Column::make('CLINIC CITY LATITUDE', 'clinic_city_latitude')
            //     ->sortable()
            //     ->searchable()
            //     ->makeInputText(),

            // Column::make('CLINIC CITY LONGITUDE', 'clinic_city_longitude')
            //     ->sortable()
            //     ->searchable()
            //     ->makeInputText(),

            // Column::make('CLINIC ADDRESS LAT', 'clinic_address_lat')
            //     ->sortable()
            //     ->searchable()
            //     ->makeInputText(),

            // Column::make('CLINIC ADDRESS LONG', 'clinic_address_long')
            //     ->sortable()
            //     ->searchable()
            //     ->makeInputText(),

            // Column::make('CLINIC VISIBLE', 'clinic_visible')
            //     ->makeInputRange(),

            // Column::make('CLINIC VIRTUAL', 'clinic_virtual')
            //     ->makeInputRange(),

            // Column::make('CLINIC PLACE ID', 'clinic_place_id')
            //     ->sortable()
            //     ->searchable()
            //     ->makeInputText(),

            // Column::make('SYNC TO WP', 'sync_to_wp')
            //     ->makeInputRange(),

            // Column::make('CREATED AT', 'created_at_formatted', 'created_at')
            //     ->searchable()
            //     ->sortable()
            //     ->makeInputDatePicker(),

            // Column::make('UPDATED AT', 'updated_at_formatted', 'updated_at')
            //     ->searchable()
            //     ->sortable()
            //     ->makeInputDatePicker(),

        ]
;
    }

    /*
    |--------------------------------------------------------------------------
    | Actions Method
    |--------------------------------------------------------------------------
    | Enable the method below only if the Routes below are defined in your app.
    |
    */

     /**
     * PowerGrid ClinicsMaster Action Buttons.
     *
     * @return array<int, Button>
     */

    
    public function actions(): array
    {
       return [
           Button::make('view', 'View')
               ->class('btn btn-info btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
               ->route('clinics-view', ['id' => 'id']),
        ];
    }
    

    /*
    |--------------------------------------------------------------------------
    | Actions Rules
    |--------------------------------------------------------------------------
    | Enable the method below to configure Rules for your Table and Action Buttons.
    |
    */

     /**
     * PowerGrid ClinicsMaster Action Rules.
     *
     * @return array<int, RuleActions>
     */

    /*
    public function actionRules(): array
    {
       return [

           //Hide button edit for ID 1
            Rule::button('edit')
                ->when(fn($clinics-master) => $clinics-master->id === 1)
                ->hide(),
        ];
    }
    */
}
