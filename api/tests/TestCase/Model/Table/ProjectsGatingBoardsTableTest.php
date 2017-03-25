<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ProjectsGatingBoardsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ProjectsGatingBoardsTable Test Case
 */
class ProjectsGatingBoardsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ProjectsGatingBoardsTable
     */
    public $ProjectsGatingBoards;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.projects_gating_boards',
        'app.projects',
        'app.applications',
        'app.domains',
        'app.projects_applications',
        'app.responses',
        'app.users',
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
        $config = TableRegistry::exists('ProjectsGatingBoards') ? [] : ['className' => 'App\Model\Table\ProjectsGatingBoardsTable'];
        $this->ProjectsGatingBoards = TableRegistry::get('ProjectsGatingBoards', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->ProjectsGatingBoards);

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

    /**
     * Test buildRules method
     *
     * @return void
     */
    public function testBuildRules()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
