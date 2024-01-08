<?php

namespace App\Http\Livewire;

use App\Models\Practitioner;
use App\Models\PractitionerSubmission;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\API\QuestionController;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Console\View\Components\Alert;
use PowerComponents\LivewirePowerGrid\Rules\{Rule, RuleActions};
use PowerComponents\LivewirePowerGrid\Traits\ActionButton;
use PowerComponents\LivewirePowerGrid\{Button, Column, Exportable, Footer, Header, PowerGrid, PowerGridComponent, PowerGridEloquent};

final class PractitionerTable extends PowerGridComponent
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
     * @return Builder<\App\Models\Practitioner>
     * @return Builder<\App\Models\PractitionerSubmission>
     */
    public function datasource(): Builder
    {
        $unique_records = PractitionerSubmission::select('id', 'session_id')->get()->unique('session_id')->pluck('id');

        return  PractitionerSubmission::query()
            ->whereIn('id', $unique_records)
            ->latest();
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
            ->addColumn('name', function (PractitionerSubmission $model) {
                $name = PractitionerSubmission::where(
                    [
                        ['session_id', '=', $model->session_id],
                        ['question_id', '=', 'q_name']
                    ]
                )->value('answer');
                return $model->session_id && $name ? $name : "Not Available";
            })
            ->addColumn('email', function (PractitionerSubmission $model) {

                $email = PractitionerSubmission::where(
                    [
                        ['session_id', '=', $model->session_id],
                        ['question_id', '=', 'q_email']
                    ]
                )->value('answer');

                return $model->session_id && $email ? $email : "Not Available";
            })
            
            
            ->addColumn('created_at')
            ->addColumn('Status', function (PractitionerSubmission  $model) {
    
                $is_approved = Practitioner::where(
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

            Column::make('Name', 'Name')
                ->field('name', 'name')
                ->sortable()
                ->searchable(),

            Column::make('Email', 'Email')
                ->field('email', 'email')
                ->sortable()
                ->searchable(),           

                Column::make('Date_created', 'created_at'),
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
     * PowerGrid Practitioner Action Buttons.
     *
     * @return array<int, Button>
     */


    public function actions(): array
    {
        return [
            Button::make('View', 'View')
                ->class('btn btn-info btn-sm cursor-pointer text-white px-3 py-1 m-1 rounded text-sm')
                ->route('practitioner-form', ['id' => 'session_id'])
                ->target('_self'),            
            
        ];
    }
    protected function getListeners(): array
    {
        return array_merge(
            parent::getListeners(),
            [
                'pushToWordpress'  => 'pushToWordpress',
                'pushToActivecampaign'  => 'pushToActivecampaign'
            ]
        );
    }

    public function pushToWordpress($practitioner)
    {
        Artisan::call('pms:push2wordpress --session_id='.$practitioner['session_id']);
    }

    public function pushToActivecampaign($practitioner)
    {
        Artisan::call('pms:push2activecampaign --session_id='.$practitioner['session_id']);
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