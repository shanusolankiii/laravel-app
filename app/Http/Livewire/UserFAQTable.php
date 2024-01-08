<?php

namespace App\Http\Livewire;

use App\Models\UserFAQ;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Builder;
use PowerComponents\LivewirePowerGrid\Traits\ActionButton;
use PowerComponents\LivewirePowerGrid\Rules\{Rule, RuleActions};
use PowerComponents\LivewirePowerGrid\{Button, Column, Exportable, Footer, Header, PowerGrid, PowerGridComponent, PowerGridEloquent};

final class UserFAQTable extends PowerGridComponent
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
            Button::make('Add FAQ', 'Add FAQ')
                ->class('d-flex justify-content-end mb-2 btn btn-primary btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
                ->route('faq-users-add', [])
                ->target('_self'),

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
    * @return Builder<\App\Models\UserFAQ>
    */
    public function datasource(): Builder
    {
        return UserFAQ::query();
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
            
            ->addColumn('faq_quesion', function (UserFAQ $model) {
                $truncatedName = Str::limit($model->faq_quesion, 15); // Change 15 to your desired length
                return  $truncatedName;
            })
            ->addColumn('faq_quesion_lower', function (UserFAQ $model) {
                return strtolower(e($model->faq_quesion));
            })

            ->addColumn('faq_answer', function (UserFAQ $model) {
                $truncatedName = Str::limit($model->faq_answer, 25); // Change 25 to your desired length
                return strtolower(e($truncatedName));
            })
            ->addColumn('is_active')
            ->addColumn('created_at_formatted', fn (UserFAQ $model) => Carbon::parse($model->created_at)->format('d/m/Y H:i:s'))
            ->addColumn('updated_at_formatted', fn (UserFAQ $model) => Carbon::parse($model->updated_at)->format('d/m/Y H:i:s'));
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
               

            Column::make('FAQ QUESION', 'faq_quesion'),

            Column::make('FAQ ANSWER', 'faq_answer'),
            

            Column::make('IS ACTIVE', 'is_active'),

            Column::make('CREATED AT', 'created_at_formatted', 'created_at'),
              

            Column::make('UPDATED AT', 'updated_at_formatted', 'updated_at'),


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
     * PowerGrid UserFAQ Action Buttons.
     *
     * @return array<int, Button>
     */

    /*
    public function actions(): array
    {
       return [
           Button::make('edit', 'Edit')
               ->class('bg-indigo-500 cursor-pointer text-white px-3 py-2.5 m-1 rounded text-sm')
               ->route('user-f-a-q.edit', ['user-f-a-q' => 'id']),

           Button::make('destroy', 'Delete')
               ->class('bg-red-500 cursor-pointer text-white px-3 py-2 m-1 rounded text-sm')
               ->route('user-f-a-q.destroy', ['user-f-a-q' => 'id'])
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
     * PowerGrid UserFAQ Action Rules.
     *
     * @return array<int, RuleActions>
     */

     public function actions(): array
     {
         return [
             Button::make('Edit', 'Edit')
                 ->class('btn btn-info btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
                 ->route('faq-users-edit', ['userFaq' => 'id'])
                 ->target('_self'),
 
         ];
     }
}
