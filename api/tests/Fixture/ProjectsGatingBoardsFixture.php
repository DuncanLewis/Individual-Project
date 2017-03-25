<?php
namespace App\Test\Fixture;

use Cake\TestSuite\Fixture\TestFixture;

/**
 * ProjectsGatingBoardsFixture
 *
 */
class ProjectsGatingBoardsFixture extends TestFixture
{

    /**
     * Fields
     *
     * @var array
     */
    // @codingStandardsIgnoreStart
    public $fields = [
        'id' => ['type' => 'uuid', 'length' => null, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null],
        'project_id' => ['type' => 'string', 'fixed' => true, 'length' => 6, 'null' => false, 'default' => null, 'collate' => 'utf8_general_ci', 'comment' => 'ID of the associated project impact (projects_applications) (Foreign Key)', 'precision' => null],
        'gating_board_id' => ['type' => 'uuid', 'length' => null, 'null' => false, 'default' => null, 'comment' => 'ID of the associated gating board (Foreign Key)', 'precision' => null],
        'gate' => ['type' => 'string', 'length' => 6, 'null' => false, 'default' => null, 'collate' => 'utf8_general_ci', 'comment' => 'The gate which the project is going through at the associated board', 'precision' => null, 'fixed' => null],
        'created' => ['type' => 'datetime', 'length' => null, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null],
        'modified' => ['type' => 'datetime', 'length' => null, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null],
        '_indexes' => [
            'project_id' => ['type' => 'index', 'columns' => ['project_id'], 'length' => []],
            'gating_board_id' => ['type' => 'index', 'columns' => ['gating_board_id'], 'length' => []],
            'id' => ['type' => 'index', 'columns' => ['id'], 'length' => []],
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
            'id' => '7c1d574c-a3da-449f-b6c0-e5b2a2aa8720',
            'project_id' => 'Lore',
            'gating_board_id' => '1f7633b5-965e-4cc3-b3a9-51090dab3699',
            'gate' => 'Lore',
            'created' => '2017-03-25 13:03:31',
            'modified' => '2017-03-25 13:03:31'
        ],
    ];
}
