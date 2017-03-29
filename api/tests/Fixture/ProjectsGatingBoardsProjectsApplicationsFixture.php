<?php
namespace App\Test\Fixture;

use Cake\TestSuite\Fixture\TestFixture;

/**
 * ProjectsGatingBoardsProjectsApplicationsFixture
 *
 */
class ProjectsGatingBoardsProjectsApplicationsFixture extends TestFixture
{

    /**
     * Fields
     *
     * @var array
     */
    // @codingStandardsIgnoreStart
    public $fields = [
        'id' => ['type' => 'uuid', 'length' => null, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null],
        'projects_gating_board_id' => ['type' => 'uuid', 'length' => null, 'null' => false, 'default' => null, 'comment' => 'ID of the associated associated impact from the projects_gating_boards table (Foreign Key)', 'precision' => null],
        'projects_application_id' => ['type' => 'uuid', 'length' => null, 'null' => false, 'default' => null, 'comment' => 'ID of associated project application impact', 'precision' => null],
        'user_id' => ['type' => 'uuid', 'length' => null, 'null' => false, 'default' => null, 'comment' => 'ID of the associated user from the users table (Foreign Key)', 'precision' => null],
        'response' => ['type' => 'string', 'length' => null, 'null' => false, 'default' => null, 'collate' => 'utf8_general_ci', 'comment' => 'Response status, can be either approved, conditional or rejected', 'precision' => null, 'fixed' => null],
        'comments' => ['type' => 'text', 'length' => null, 'null' => true, 'default' => null, 'collate' => 'utf8_general_ci', 'comment' => 'Free text comment field, contains the reason for the response given (if applicable)', 'precision' => null],
        'created' => ['type' => 'datetime', 'length' => null, 'null' => false, 'default' => null, 'comment' => '', 'precision' => null],
        'modified' => ['type' => 'datetime', 'length' => null, 'null' => true, 'default' => null, 'comment' => '', 'precision' => null],
        '_indexes' => [
            'user_id' => ['type' => 'index', 'columns' => ['user_id'], 'length' => []],
            'projects_applications_id' => ['type' => 'index', 'columns' => ['projects_gating_board_id'], 'length' => []],
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
            'id' => '62a605b8-92e6-4914-80b7-d21b53ffd05a',
            'projects_gating_board_id' => '74cd927f-3b69-4975-b7dd-50e6e7e4ad83',
            'projects_application_id' => '3a9c5255-0c1e-47cb-a963-38163bb68808',
            'user_id' => '47896763-d123-4ec1-9d4b-343a95083fad',
            'response' => 'Lorem ipsum dolor sit amet',
            'comments' => 'Lorem ipsum dolor sit amet, aliquet feugiat. Convallis morbi fringilla gravida, phasellus feugiat dapibus velit nunc, pulvinar eget sollicitudin venenatis cum nullam, vivamus ut a sed, mollitia lectus. Nulla vestibulum massa neque ut et, id hendrerit sit, feugiat in taciti enim proin nibh, tempor dignissim, rhoncus duis vestibulum nunc mattis convallis.',
            'created' => '2017-03-29 11:25:07',
            'modified' => '2017-03-29 11:25:07'
        ],
    ];
}
