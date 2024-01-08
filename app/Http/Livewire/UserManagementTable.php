<?php

namespace App\Http\Livewire;

use App\Models\User;
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

final class UserManagementTable extends PowerGridComponent
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
     * @return Builder<\App\Models\User>
     */
    public function datasource(): Builder
    {
        return User::query()->with('roles', 'user_profile')->latest();
        // return User::query()->join( 'roles', 'users.role_id', '=', 'roles.id')
        // ->select('users.*','roles.name as role');
        // return User::query()
        // ->join('model_has_roles', function ($model_has_roles) {
        //     $model_has_roles->on('model_has_roles.model_id', '=', 'users.id');
        // })
        // ->join('roles', function ($roles) {
        //     $roles->on('model_has_roles.role_id', '=', 'roles.id');
        // })
        // ->select([
        //     'users.id',
        //     'users.name',
        //     'users.email',
        //     'roles.name  as name',
        //     'users.created_at'
        // ]);
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
            ->addColumn('name', function (User $user) {
                return $user->user_profile->pract_name ?? $user->name;
            })
            ->addColumn('email')
            ->addColumn('roles', function (User $user) {
                $roleNames = $user->roles->pluck('name')->join(', ');
                return $roleNames;
            })
            ->addColumn('created_at');
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
                ->searchable()
                ->sortable(),

            Column::make('Name', 'name')
                ->searchable()
            // ->makeInputText('name')
                ->sortable(),
            Column::make('Email', 'email')
                ->searchable()
            // ->makeInputText('name')
                ->sortable(),
            Column::make('Roles', 'roles')
                ->searchable(),
            // ->makeInputText('name')
                // ->sortable(),

            Column::make('Created at', 'created_at')
                ->hidden(),

            Column::make('Created at', 'created_at')
            // ->makeInputDatePicker()
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
     * PowerGrid User Action Buttons.
     *
     * @return array<int, Button>
     */

    /*
    public function actions(): array
    {
    return [
    Button::make('edit', 'Edit')
    ->class('bg-indigo-500 cursor-pointer text-white px-3 py-2.5 m-1 rounded text-sm')
    ->route('user.edit', ['user' => 'id']),

    Button::make('destroy', 'Delete')
    ->class('bg-red-500 cursor-pointer text-white px-3 py-2 m-1 rounded text-sm')
    ->route('user.destroy', ['user' => 'id'])
    ->method('delete')
    ];
    }
     */

    /*
    |--------------------------------------------------------------------------
    | Actions Rules
    |--------------------------------------------------------------------------
    | Enable the method below to configure Rules for your Table and Action Buttons.
    |
     */

    /**
     * PowerGrid User Action Rules.
     *
     * @return array<int, RuleActions>
     */

    /*
    public function actionRules(): array
    {
        return [

        //Hide button edit for ID 1
        Rule::button('edit')
        ->when(fn($user) => $user->id === 1)
        ->hide(),
        ];
    }
    */
}