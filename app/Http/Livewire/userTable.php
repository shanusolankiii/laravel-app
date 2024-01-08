<?php

namespace App\Http\Livewire;

use App\Models\Practitioner;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Builder;
use PowerComponents\LivewirePowerGrid\Button;
use PowerComponents\LivewirePowerGrid\Column;
use PowerComponents\LivewirePowerGrid\Footer;
use PowerComponents\LivewirePowerGrid\Header;
use PowerComponents\LivewirePowerGrid\PowerGrid;
use PowerComponents\LivewirePowerGrid\Exportable;
use PowerComponents\LivewirePowerGrid\PowerGridEloquent;
use PowerComponents\LivewirePowerGrid\PowerGridComponent;
use PowerComponents\LivewirePowerGrid\Traits\ActionButton;
use PowerComponents\LivewirePowerGrid\Rules\{Rule, RuleActions};

final class userTable extends PowerGridComponent
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

    public function header(): array
    {
        return [
            // Button::add('table-title')
            //     ->caption(__('villages Table'))
            //     ->class('block bg-slate-50 text-slate-700 mt-3 mb-2 border border-slate-300 rounded py-2.5 px-10 leading-tight
            //     focus:outline-none focus:bg-white focus:border-slate-600 dark:border-slate-500 dark:bg-slate-700
            //     2xl:dark:placeholder-slate-300 dark:text-slate-200 dark:text-slate-300 hover:animate-pulse duration-200 text-xs font-semibold')
            //     ->emit('nothing', []),

        ];
    }


    // public function datasource(): Builder
    // {
    //     return Practitioner::query()
    //         ->leftJoin('practitioner_submissions', 'practitioner_submissions.session_id', '=', 'session_id')
    //         ->select(
    //             'Practitioners.*',
    //             'practitioner_submissions.session_id as session_id',

    //         );
    // }

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
            ->addColumn('question_id')
            ->addColumn('question_title')
            ->addColumn('answer')
            ->addColumn('created_at')
            ->addColumn('updated_at')
            ->addColumn('is_completed')
            ->addColumn('has_active_campaign')
            ->addColumn('is_approved')
            ->addColumn('has_wordpress')
            ->addColumn('created_at')
            ->addColumn('created_at_formatted', fn (User $model) => Carbon::parse($model->created_at)->format('d/m/Y H:i:s'));
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

            Column::make('question_id', 'question_id')
                ->searchable()
                ->sortable(),

            Column::make('question_title', 'question_title')
                ->searchable()
                ->sortable(),

            Column::make('answer', 'answer')
                ->searchable()
                ->sortable(),

            Column::make('created_at', 'created_at')
                ->searchable()
                ->sortable(),

            Column::make('updated_at', 'updated_at')
                ->searchable()
                ->sortable(),

            Column::make('is_completed', 'is_completed')
                ->searchable()
                ->sortable(),

            Column::make('has_active_campaign', 'has_active_campaign')
                ->searchable()
                ->sortable(),

            Column::make('is_approved', 'is_approved')
                ->searchable()
                ->sortable(),

            Column::make('has_wordpress', 'has_wordpress')
                ->searchable()
                ->sortable(),
            //     
        ];
    }

    protected function getListeners(): array
    {
        return array_merge(
            parent::getListeners(),
            [
                'toggleVerify' => 'toggleVerify',
                'AddUserForm' => 'AddUserForm',
                'AdduserTable' => 'AdduserTable',
                'viewUser' => 'viewtUser',
                'refreshTable' => 'refreshTable',
            ]
        );
    }


    public function refreshTable()
    {
        $this->fillData();
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

    public function actions(): array
    {
        return [
            Button::make('View', 'view')
                ->class('bg-indigo-500 cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
            //    ->route('user.view', ['user' => 'id']),

            //    Button::make('destroy', 'Delete')
            //        ->class('bg-red-500 cursor-pointer text-white px-3 py-2 m-1 rounded text-sm')
            //        ->route('user.destroy', ['user' => 'id'])
            //        ->method('delete')
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
