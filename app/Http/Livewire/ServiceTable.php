<?php

namespace App\Http\Livewire;

use App\Models\Services;
use Illuminate\Database\Eloquent\Builder;
use PowerComponents\LivewirePowerGrid\Button;
use PowerComponents\LivewirePowerGrid\Column;
use PowerComponents\LivewirePowerGrid\Exportable;
use PowerComponents\LivewirePowerGrid\Footer;
use PowerComponents\LivewirePowerGrid\Header;
use PowerComponents\LivewirePowerGrid\PowerGrid;
use PowerComponents\LivewirePowerGrid\PowerGridComponent;
use PowerComponents\LivewirePowerGrid\PowerGridEloquent;
use PowerComponents\LivewirePowerGrid\Rules\Rule;
use PowerComponents\LivewirePowerGrid\Rules\RuleActions;use PowerComponents\LivewirePowerGrid\Traits\ActionButton;

final class ServiceTable extends PowerGridComponent
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
        //$this->showCheckBox();

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
     * @return Builder<\App\Models\Clinics>
     *
     */
    public function datasource(): Builder
    {
        //$unique_records = Clinics::select('id', 'session_id')->get()->unique('session_id')->pluck('id');

        return Services::query()->latest();
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

    public function header(): array
    {
        return [
            Button::make('Add Service', 'Add Service')
                ->class('d-flex justify-content-end mb-2 btn btn-primary btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
                ->route('service.create', [])
                ->target('_self'),

        ];
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
            ->addColumn('service_name')
            ->addColumn('service_description')
            ->addColumn('service_visibility')
            ->addColumn('is_virtual');
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
            Column::make('Service Name', 'service_name')
                ->field('service_name', 'service_name')
                ->sortable()
                ->searchable(),
            Column::make('Service description', 'service_description')
                ->field('service_description', 'service_description')
                ->sortable()
                ->searchable(),
            Column::make('Service Visibility', 'is_virtual')
                ->field('service_visibility', 'service_visibility')
                ->sortable()
                ->searchable(),
            Column::make('Service Virtual', 'is_virtual')
                ->field('is_virtual', 'is_virtual')
                ->sortable()
                ->searchable(),
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
     * PowerGrid Practitioner Action Buttons.
     *
     * @return array<int, Button>
     */

    public function actions(): array
    {
        return [
            Button::make('View', 'View')
                ->class('btn btn-info btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
                ->route('service-form', ['id' => 'id'])
                ->target('_self'),

            // Button::make('Edit', 'Edit')
            //     ->class('btn btn-info btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
            //     ->route('practitioner-form', ['id' => 'session_id'])
            //     ->target('_self'),

            // Button::make('Delete', 'Delete')
            //     ->class('btn btn-danger btn-sm text-white px-3 py-1 m-1 rounded text-sm')
            //     ->route('deletePractitionerRecord', ['id' => 'session_id'])
            //     ->method('delete')
            //     ->target('_self'),

            // Button::make('delete', 'Delete')
            //     ->class('btn btn-success btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
            //     ->route('service.delete', ['id' => 'session_id'])
            //     ->target('_self'),
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
     * PowerGrid Practitioner Action Rules.
     *
     * @return array<int, RuleActions>
     */

    /*
public function actionRules(): array
{
return [

//Hide button edit for ID 1
Rule::button('edit')
->when(fn($practitioner) => $practitioner->id === 1)
->hide(),
];
}
 */
}
