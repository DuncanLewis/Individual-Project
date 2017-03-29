<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ProjectsGatingBoardsProjectsApplicationsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ProjectsGatingBoardsProjectsApplicationsTable Test Case
 */
class ProjectsGatingBoardsProjectsApplicationsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ProjectsGatingBoardsProjectsApplicationsTable
     */
    public $ProjectsGatingBoardsProjectsApplications;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.projects_gating_boards_projects_applications',
        'app.projects_gating_boards',
        'app.projects',
        'app.current_gate',
        'app.applications',
        'app.domains',
        'app.projects_applications',
        'app.responses',
        'app.users',
        'app.gating_boards',
        'app.risks'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('ProjectsGatingBoardsProjectsApplications') ? [] : ['className' => 'App\Model\Table\ProjectsGatingBoardsProjectsApplicationsTable'];
        $this->ProjectsGatingBoardsProjectsApplications = TableRegistry::get('ProjectsGatingBoardsProjectsApplications', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->ProjectsGatingBoardsProjectsApplications);

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
