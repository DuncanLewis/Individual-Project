<?php
namespace App\Test\Fixture;

use Cake\TestSuite\Fixture\TestFixture;

/**
 * ProjectsApplicationsFixture
 *
 */
class ProjectsApplicationsFixture extends TestFixture
{

    /**
     * Fields
     *
     * @var array
     */
    // @codingStandardsIgnoreStart
    public $fields = [
        'id' => ['type' => 'uuid', 'length' => null, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null],
        'project_id' => ['type' => 'uuid', 'length' => null, 'null' => false, 'default' => null, 'comment' => 'ID of associated project within the projects table', 'precision' => null],
        'application_id' => ['type' => 'uuid', 'length' => null, 'null' => false, 'default' => null, 'comment' => 'ID of the associated application within the applications table', 'precision' => null],
        'created' => ['type' => 'datetime', 'length' => null, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null],
        'modified' => ['type' => 'datetime', 'length' => null, 'null' => true, 'default' => null, 'comment' => '', 'precision' => null],
        '_indexes' => [
            'project_id' => ['type' => 'index', 'columns' => ['project_id'], 'length' => []],
            'application_id' => ['type' => 'index', 'columns' => ['application_id'], 'length' => []],
        ],
        '_constraints' => [
            'primary' => ['type' => 'primary', 'columns' => ['id'], 'length' => []],
        ],
        '_options' => [
            'engine' => 'InnoDB',
            'collation' => 'utf8_general_ci'
        ],
    ];
    // @codingStandardsIgnoreEnd

    /**
     * Records
     *
     * @var array
     */
    public $records = [
        [
            'id' => 'f26cfb41-7078-49d0-946c-226f6eb06b74',
            'project_id' => '7aa3eace-fe9f-4dd0-8b8d-d83eed0a7808',
            'application_id' => '37c0063c-ab86-4d28-9e6f-6b49ea035cfa',
            'created' => '2017-03-25 12:58:02',
            'modified' => '2017-03-25 12:58:02'
        ],
    ];
}
