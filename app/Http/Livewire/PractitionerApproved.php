<?php

namespace App\Http\Livewire;

use App\Models\Practitioners;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Builder;
use PowerComponents\LivewirePowerGrid\Rules\{Rule, RuleActions};
use PowerComponents\LivewirePowerGrid\Traits\ActionButton;
use PowerComponents\LivewirePowerGrid\{Button, Column, Exportable, Footer, Header, PowerGrid, PowerGridComponent, PowerGridEloquent};

final class PractitionerApproved extends PowerGridComponent
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
    * @return Builder<\App\Models\Practitioners>
    */
    public function datasource(): Builder
    {
        return Practitioners::query();
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
            // ->addColumn('wp_pract_id')
            // ->addColumn('pract_is_nd')

           /** Example of custom column using a closure **/
            // ->addColumn('pract_is_nd_lower', function (Practitioners $model) {
            //     return strtolower(e($model->pract_is_nd));
            // })

            // ->addColumn('pract_title')
            ->addColumn('pract_name')
            ->addColumn('pract_email')
            ->addColumn('last_login_at')
            // ->addColumn('pract_image')
            // ->addColumn('pract_clinic')
            // ->addColumn('pract_conditions_supported')
            // ->addColumn('pract_languages_spoken')
            // ->addColumn('pract_accepting_new')
            // ->addColumn('pract_direct_bill_ins')
            // ->addColumn('pract_free_call')
            // ->addColumn('pract_services')
            // ->addColumn('pract_bio')
            // ->addColumn('pract_degrees')
            // ->addColumn('pract_education')
            // ->addColumn('pract_association')
            // ->addColumn('pract_designation')
            // ->addColumn('pract_type')
            // ->addColumn('pract_reviews')
            // ->addColumn('pract_visibility')
            ->addColumn('pract_license_year')
            // ->addColumn('pract_type')
            // ->addColumn('pract_designation')
            // ->addColumn('sync_to_wp')
            // ->addColumn('pract_v_clinic_name')
            // ->addColumn('pract_v_clinic_address')
            // ->addColumn('pract_v_clinic_working_hours')
            // ->addColumn('pract_v_clinic_place_id')
            // ->addColumn('pract_v_clinic_latitude')
            // ->addColumn('pract_v_clinic_longitude')
            // ->addColumn('created_at_formatted', fn (Practitioners $model) => Carbon::parse($model->created_at)->format('d/m/Y H:i:s'))
            // ->addColumn('updated_at_formatted', fn (Practitioners $model) => Carbon::parse($model->updated_at)->format('d/m/Y H:i:s'))
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

            // Column::make('WP PRACT ID', 'wp_pract_id'),
            //     // ->makeInputRange(),

            // Column::make('PRACT IS ND', 'pract_is_nd')
            //     ->sortable()
            //     ->searchable(),
                // ->makeInputText(),

            // Column::make('PRACT TITLE', 'pract_title')
            //     ->sortable()
            //     ->searchable(),
                // ->makeInputText(),

            Column::make('PRACT NAME', 'pract_name')
                ->sortable()
                ->searchable(),
                // ->makeInputText(),

            Column::make('PRACT EMAIL', 'pract_email')
                ->sortable()
                ->searchable(),
            Column::make('Last Logged In', 'last_login_at')
                ->sortable()
                ->searchable(),
                // ->makeInputText(),

            // Column::make('PRACT IMAGE', 'pract_image')
            //     ->sortable()
            //     ->searchable(),
            //     // ->makeInputText(),

            // Column::make('PRACT CLINIC', 'pract_clinic')
            //     ->sortable()
            //     ->searchable(),

            // Column::make('PRACT CONDITIONS SUPPORTED', 'pract_conditions_supported')
            //     ->sortable()
            //     ->searchable(),

            // Column::make('PRACT LANGUAGES SPOKEN', 'pract_languages_spoken')
            //     ->sortable()
            //     ->searchable(),

            // Column::make('PRACT ACCEPTING NEW', 'pract_accepting_new')
            //     ->sortable()
            //     ->searchable(),
            //     // ->makeInputText(),

            // Column::make('PRACT DIRECT BILL INS', 'pract_direct_bill_ins')
            //     ->sortable()
            //     ->searchable(),
            //     // ->makeInputText(),

            // Column::make('PRACT FREE CALL', 'pract_free_call')
            //     ->sortable()
            //     ->searchable(),
            //     // ->makeInputText(),

            // Column::make('PRACT SERVICES', 'pract_services')
            //     ->sortable()
            //     ->searchable(),

            // Column::make('PRACT BIO', 'pract_bio')
            //     ->sortable()
            //     ->searchable(),

            // Column::make('PRACT DEGREES', 'pract_degrees')
            //     ->sortable()
            //     ->searchable(),
            //     // ->makeInputText(),

            // Column::make('PRACT EDUCATION', 'pract_education')
            //     ->sortable()
            //     ->searchable(),

            // Column::make('PRACT ASSOCIATION', 'pract_association')
            //     ->sortable()
            //     ->searchable(),

            // Column::make('PRACT DESIGNATION', 'pract_designation')
            //     ->sortable()
            //     ->searchable(),
            //     // ->makeInputText(),

            // Column::make('PRACT TYPE', 'pract_type')
            //     ->sortable()
            //     ->searchable(),
            //     // ->makeInputText(),

            // Column::make('PRACT REVIEWS', 'pract_reviews')
            //     ->makeInputRange(),

            // Column::make('PRACT VISIBILITY', 'pract_visibility')
            //     ->makeInputRange(),

            Column::make('PRACT LICENSE YEAR', 'pract_license_year')
                ->sortable()
                ->searchable(),
            //     // ->makeInputText(),

            // Column::make('PRACT TYPE', 'pract_type')
            //     ->sortable()
            //     ->searchable(),
            //     // ->makeInputText(),

            // Column::make('PRACT DESIGNATION', 'pract_designation')
            //     ->sortable()
            //     ->searchable(),
            //     // ->makeInputText(),

            // Column::make('SYNC TO WP', 'sync_to_wp')
            //     ->makeInputRange(),

            // Column::make('PRACT V CLINIC NAME', 'pract_v_clinic_name')
            //     ->sortable()
            //     ->searchable(),
            //     // ->makeInputText(),

            // Column::make('PRACT V CLINIC ADDRESS', 'pract_v_clinic_address')
            //     ->sortable()
            //     ->searchable(),
            //     // ->makeInputText(),

            // Column::make('PRACT V CLINIC WORKING HOURS', 'pract_v_clinic_working_hours')
            //     ->sortable()
            //     ->searchable(),

            // Column::make('PRACT V CLINIC PLACE ID', 'pract_v_clinic_place_id')
            //     ->sortable()
            //     ->searchable(),
            //     // ->makeInputText(),

            // Column::make('PRACT V CLINIC LATITUDE', 'pract_v_clinic_latitude')
            //     ->sortable()
            //     ->searchable(),
            //     // ->makeInputText(),

            // Column::make('PRACT V CLINIC LONGITUDE', 'pract_v_clinic_longitude')
            //     ->sortable()
            //     ->searchable(),
            //     // ->makeInputText(),

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
     * PowerGrid Practitioners Action Buttons.
     *
     * @return array<int, Button>
     */

    
    public function actions(): array
    {
       return [
           Button::make('edit', 'Edit')
               ->class('btn btn-info btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
               ->route('practitioners-edit', ['id' => 'id']),

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
     * PowerGrid Practitioners Action Rules.
     *
     * @return array<int, RuleActions>
     */

    /*
    public function actionRules(): array
    {
       return [

           //Hide button edit for ID 1
            Rule::button('edit')
                ->when(fn($practitioners) => $practitioners->id === 1)
                ->hide(),
        ];
    }
    */
}
