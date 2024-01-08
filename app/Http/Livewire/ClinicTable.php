<?php

namespace App\Http\Livewire;

use App\Models\User;
use App\Models\Clinics;
use App\Models\ClinicMaster;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Builder;
use PowerComponents\LivewirePowerGrid\Rules\{Rule, RuleActions};
use PowerComponents\LivewirePowerGrid\Traits\ActionButton;
use PowerComponents\LivewirePowerGrid\{Button, Column, Exportable, Footer, Header, PowerGrid, PowerGridComponent, PowerGridEloquent};

final class ClinicTable extends PowerGridComponent
{
    use ActionButton;

    /*
    |--------------------------------------------------------------------------
    |  Features Setup
    |--------------------------------------------------------------------------
    | Setup Table's general features
    |
    */

    protected $listeners = ['clinicAdded' => 'addClinic'];
    public function setUp(): array
    {
        // $this->showCheckBox();

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
    public function header(): array
    {
        return [
            // Button::make('Add Clinic', 'Add Clinic')
            //     ->class('d-flex justify-content-end mb-2 btn btn-primary btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
            //     ->route('clinic.create', [])
            //     ->target('_self'),
            
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
     * @return Builder<\App\Models\Clinics>
     *
     */
    public function datasource(): Builder
    {
        return  Clinics::query()->latest();
    }

    public function addClinic()
    {
        # code...
        Log::info('Even"s Listener get called....');
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
            ->addColumn('clinic_name')
            ->addColumn('clinic_email')
            ->addColumn('name', function(Clinics $model ){
                $user_name = User::where( 'id', '=', $model->user_id)->first();
                return $user_name ? $user_name->name :'';
             })
            ->addColumn('created_at')
            ->addColumn('Status', function (Clinics  $model) {
    
                $is_approved = ClinicMaster::where(
                    [
                        ['session_id', '=', $model->session_id]
                    ]
                )->value('is_approved');
    
                return $model->session_id && $is_approved ? 
                        '<span class="badge badge-success">Approved</span>' : '<span class="badge badge-danger">Not Approved</span>';
            });
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
            Column::make('ID', 'id'),
            Column::make('Clinic Name', 'clinic_name')
                ->field('clinic_name', 'clinic_name')
                ->sortable()
                ->searchable(),

            Column::make('Clinic Email', 'clinic_email')
                ->field('clinic_email', 'clinic_email')
                ->sortable()
                ->searchable(),  
            Column::make('Pract Name', 'name'),
            Column::make('Date_created', 'created_at')->sortable(),
            Column::make('Status', 'Status')

         
        ];
    }

    /*
    |--------------------------------------------------------------------------
    | Actions Method
    |--------------------------------------------------------------------------
    | Enable the method below only if the Routes below are defined in your app.
    |
    */

    /**
     * PowerGrid Clinics Action Buttons.
     *
     * @return array<int, Button>
     */


    public function actions(): array
    {
        return [
            Button::make('View', 'View')
                ->class('btn btn-info btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
                ->route('clinic-form', ['id' => 'id'])
                ->target('_self'),

            
        ];
    }   
}
