<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ProjectsApplicationsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ProjectsApplicationsTable Test Case
 */
class ProjectsApplicationsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ProjectsApplicationsTable
     */
    public $ProjectsApplications;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.projects_applications',
        'app.projects',
        'app.applications',
        'app.domains',
        'app.gating_boards',
        'app.projects_gating_boards'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('ProjectsApplications') ? [] : ['className' => 'App\Model\Table\ProjectsApplicationsTable'];
        $this->ProjectsApplications = TableRegistry::get('ProjectsApplications', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->ProjectsApplications);

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
