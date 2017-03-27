<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\RisksTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\RisksTable Test Case
 */
class RisksTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\RisksTable
     */
    public $Risks;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.risks',
        'app.users',
        'app.responses',
        'app.projects_gating_boards',
        'app.projects',
        'app.applications',
        'app.domains',
        'app.projects_applications',
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
        $config = TableRegistry::exists('Risks') ? [] : ['className' => 'App\Model\Table\RisksTable'];
        $this->Risks = TableRegistry::get('Risks', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Risks);

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
