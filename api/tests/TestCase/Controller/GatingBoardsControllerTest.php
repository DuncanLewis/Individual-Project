<?php
namespace App\Test\TestCase\Controller;

use App\Controller\GatingBoardsController;
use Cake\TestSuite\IntegrationTestCase;

/**
 * App\Controller\GatingBoardsController Test Case
 */
class GatingBoardsControllerTest extends IntegrationTestCase
{

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.gating_boards',
        'app.projects',
        'app.applications',
        'app.domains',
        'app.applications_domains',
        'app.projects_applications',
        'app.projects_gating_boards'
    ];

    /**
     * Test index method
     *
     * @return void
     */
    public function testIndex()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test view method
     *
     * @return void
     */
    public function testView()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test add method
     *
     * @return void
     */
    public function testAdd()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test edit method
     *
     * @return void
     */
    public function testEdit()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test delete method
     *
     * @return void
     */
    public function testDelete()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
