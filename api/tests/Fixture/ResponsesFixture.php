<?php
namespace App\Test\Fixture;

use Cake\TestSuite\Fixture\TestFixture;

/**
 * ResponsesFixture
 *
 */
class ResponsesFixture extends TestFixture
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
            'id' => 'ac5de1aa-7a8e-4caa-ad20-6cb3daef3b07',
            'projects_gating_board_id' => '0dab9170-45b9-4f35-a802-9c0d857573bc',
            'projects_application_id' => 'a0e53dbb-b910-483c-9a02-5eff291f7b22',
            'user_id' => 'b92316d9-6e57-46bc-a0e2-13043466bbcf',
            'response' => 'Lorem ipsum dolor sit amet',
            'comments' => 'Lorem ipsum dolor sit amet, aliquet feugiat. Convallis morbi fringilla gravida, phasellus feugiat dapibus velit nunc, pulvinar eget sollicitudin venenatis cum nullam, vivamus ut a sed, mollitia lectus. Nulla vestibulum massa neque ut et, id hendrerit sit, feugiat in taciti enim proin nibh, tempor dignissim, rhoncus duis vestibulum nunc mattis convallis.',
            'created' => '2017-03-25 12:58:30',
            'modified' => '2017-03-25 12:58:30'
        ],
    ];
}
