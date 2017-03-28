<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;

/**
 * Projects Controller
 *
 * @property \App\Model\Table\ProjectsTable $Projects
 */
class ProjectsController extends AppController
{


    /**
     * Pagination settings
     *
     * These are used when the index method is called, and anywhere else $this->paginate method is utilised
     *
     * @var array
     */
    public $paginate = [
        'page' => 1,
        'limit' => 10,
        'maxLimit' => 100,
        'fields' => [
            'id', 'name', 'status', 'accenture_pm', 'hpe_pm', 'aldea_request_number', 'post_go_live_support', 'warranty_start', 'warranty_end', 'technical_go_live', 'business_go_live'
        ],
        'sortWhitelist' => [
            'id', 'name'
        ]
    ];


    public function index()
    {
        $this->Crud->on('beforeFind', function (Event $event) {
            $event->subject()->query->contain([
                'GatingBoards',
                'Applications'
            ]);
        });

        return $this->Crud->execute();

    }

    /**
     * view method for projects
     *
     * Modifies the CRUD
     *
     * @return mixed
     */
    public function view()
    {
        $this->Crud->on('beforeFind', function(Event $event) {
            $event->getSubject()->query
                ->contain([
                    'CurrentGate' => [
                        'strategy' => 'select',
                        'queryBuilder' => function ($q) {
                            return $q->order(['CurrentGate.date' =>'DESC'])->limit(1);
                        }
                    ]
                ]);
        });


        /*$this->Crud->on('afterFind', function(Event $event) {
            $this->log("Found item: " . $event->getSubject()->entity . " in the database");

            //print_r($event->getSubject()->entity->gating_boards);

           /* $gatingBoards = $event->getSubject()->entity->gating_boards;

            $this->Crud->action()->findMethod('my_custom_finder');

            foreach ($gatingBoards as $gatingBoard) {
                $date = $gatingBoard['date'];

                var_dump($date);
            }*/

        //});

        return $this->Crud->execute();
    }

}
