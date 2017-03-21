<?php
namespace App\Controller;

use App\Controller\AppController;

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

}
