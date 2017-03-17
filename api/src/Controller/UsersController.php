<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;

use Cake\Network\Exception\UnauthorizedException;
use Cake\Utility\Security;
use Firebase\JWT\JWT;

/**
 * Users Controller
 *
 * @property \App\Model\Table\UsersTable $Users
 */
class UsersController extends AppController
{

    public function initialize()
    {
        parent::initialize();
        $this->Auth->allow(['add', 'token']);
    }

    /**
     * token
     *
     * Used to verify a users token via the API, a 200 response is given if the user is authenticated successfully
     *
     */
    public function token()
    {
        $user = $this->Auth->identify();
        if (!$user) {
            throw new UnauthorizedException('Invalid username or password.');
        }

        $this->set([
           'success' => true,
            'data' => [
                'token' => JWT::encode([
                    'id' => $user['id'],
                    'sub' => $user['id'],
                    'exp' => time() + 604800
                ],
                Security::salt())
            ],
            '_serialize' => ['success', 'data']
        ]);
    }
}
