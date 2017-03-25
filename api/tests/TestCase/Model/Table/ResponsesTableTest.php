<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ResponsesTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ResponsesTable Test Case
 */
class ResponsesTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ResponsesTable
     */
    public $Responses;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.responses',
        'app.projects_gating_boards',
        'app.projects',
        'app.applications',
        'app.domains',
        'app.projects_applications',
        'app.gating_boards',
        'app.users'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Responses') ? [] : ['className' => 'App\Model\Table\ResponsesTable'];
        $this->Responses = TableRegistry::get('Responses', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Responses);

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
