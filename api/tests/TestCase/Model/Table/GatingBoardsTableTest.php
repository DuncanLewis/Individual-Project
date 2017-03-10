<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\GatingBoardsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\GatingBoardsTable Test Case
 */
class GatingBoardsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\GatingBoardsTable
     */
    public $GatingBoards;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.gating_boards'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('GatingBoards') ? [] : ['className' => 'App\Model\Table\GatingBoardsTable'];
        $this->GatingBoards = TableRegistry::get('GatingBoards', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->GatingBoards);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
