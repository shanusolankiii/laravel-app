<?php

namespace App\Http\Livewire;

use App\Models\LanguageMaster;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;

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

final class LanguageTable extends PowerGridComponent
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

    public function header(): array
    {
        return [
            Button::make('Add Language', 'Add Language')
                ->class('d-flex justify-content-end mb-2 btn btn-primary btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
                ->route('create-new-language', [])
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
     * @return Builder<\App\Models\LanguageMaster>
     */
    public function datasource(): Builder
    {
        return LanguageMaster::query();
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
            ->addColumn('name')
            ->addColumn('name_lower', fn(LanguageMaster $model) => strtolower(e($model->name)))
            ->addColumn('created_at')
            ->addColumn('created_at_formatted', fn(LanguageMaster $model) => Carbon::parse($model->created_at)->format('d/m/Y H:i:s'));
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

            Column::make('languages', 'language_name')
                ->searchable()
            // ->makeInputText('name')
                ->sortable(),
            Column::make('Language Code', 'language_code')
                ->searchable()
            // ->makeInputText('name')
                ->sortable(),

            Column::make('Created at', 'created_at'),
            // ->hidden(),
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
     * PowerGrid LanguageMaster Action Buttons.
     *
     * @return array<int, Button>
     */

    // public function actions(): array
    // {
    //    return [
    //        Button::make('edit', 'Edit')
    //            ->class('bg-indigo-500 cursor-pointer text-white px-3 py-2.5 m-1 rounded text-sm')
    //            ->route('language-master.edit', ['language-master' => 'id']),

    //        Button::make('destroy', 'Delete')
    //            ->class('bg-red-500 cursor-pointer text-white px-3 py-2 m-1 rounded text-sm')
    //            ->route('language-master.destroy', ['language-master' => 'id'])
    //            ->method('delete')
    //     ];
    // }

    /*
    |--------------------------------------------------------------------------
    | Actions Rules
    |--------------------------------------------------------------------------
    | Enable the method below to configure Rules for your Table and Action Buttons.
    |
     */

    /**
     * PowerGrid LanguageMaster Action Rules.
     *
     * @return array<int, RuleActions>
     */

    /*
    public function actionRules(): array
    {
    return [

    //Hide button edit for ID 1
    Rule::button('edit')
    ->when(fn($language-master) => $language-master->id === 1)
    ->hide(),
    ];
    }
     */
    public function actions(): array
    {
        return [
            Button::make('View', 'View')
                ->class('btn btn-info btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
                ->route('language-form', ['id' => 'id'])
                ->target('_self'),

        ];
    }
}
