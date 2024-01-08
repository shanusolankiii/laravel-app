<?php

namespace App\Http\Livewire;

use App\Models\Category;
use Illuminate\Support\Carbon;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\Builder;
use PowerComponents\LivewirePowerGrid\Rules\{Rule, RuleActions};
use PowerComponents\LivewirePowerGrid\Traits\ActionButton;
use PowerComponents\LivewirePowerGrid\{Button, Column, Exportable, Footer, Header, PowerGrid, PowerGridComponent, PowerGridEloquent};

final class CategoryTable extends PowerGridComponent
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
            Button::make('Add Category', 'Add Category')
                ->class('d-flex justify-content-end mb-2 btn btn-info btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
                ->route('category-add', [])
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
    * @return Builder<\App\Models\Category>
    */
    public function datasource(): Builder
    {
        return Category::query();
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
            ->addColumn('category_title')
           // ->addColumn('category_description', fn (Category $model) => strtolower(e($model->category_description)))
            ->addColumn('created_at')
            ->addColumn('created_at_formatted', fn (Category $model) => Carbon::parse($model->created_at)->format('d/m/Y H:i:s'));
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
     *///   ->makeInputText('category_title') ->makeInputDatePicker()
    public function columns(): array
    {
        return [
            Column::make('ID', 'id')
                ->searchable()
                ->sortable(),

            Column::make('Category Name', 'category_title')
                ->searchable()             
                ->sortable(),
           // Column::make('Category Description', 'category_description'),
            Column::make('Created at', 'created_at')
                ->hidden(),

            Column::make('Created at', 'created_at', 'created_at')
                
                ->searchable()
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
     * PowerGrid Category Action Buttons.
     *
     * @return array<int, Button>
     */

  
    public function actions(): array
    {
       return [
           Button::make('edit', 'Edit')
               ->class('btn btn-info btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
               ->route('category-edit', ['category' => 'id']),
//bg-indigo-500 cursor-pointer text-white px-3 py-2.5 m-1 rounded text-sm
        //    Button::make('destroy', 'Delete')
        //        ->class('bg-red-500 cursor-pointer text-white px-3 py-2 m-1 rounded text-sm')
        //        ->route('category.destroy', ['category' => 'id'])
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
     * PowerGrid Category Action Rules.
     *
     * @return array<int, RuleActions>
     */

    /*
    public function actionRules(): array
    {
       return [

           //Hide button edit for ID 1
            Rule::button('edit')
                ->when(fn($category) => $category->id === 1)
                ->hide(),
        ];
    }
    */
    
}
