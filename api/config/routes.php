<?php
/**
 * Routes configuration
 *
 * In this file, you set up routes to your controllers and their actions.
 * Routes are very important mechanism that allows you to freely connect
 * different URLs to chosen controllers and their actions (functions).
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

use Cake\Core\Plugin;
use Cake\Routing\RouteBuilder;
use Cake\Routing\Router;
use Cake\Routing\Route\DashedRoute;

const API_RESOURCES = [
    'Projects',
    //'Users',
    'Domains',
    'Applications',
    'ProjectsApplications',
    'ProjectsGatingBoards',
    'Responses',
    'Risks',
    'Documents'
];
Router::defaultRouteClass(DashedRoute::class);

Router::scope('/', function (RouteBuilder $routes) {
    $routes->extensions(['json', 'xml']);

    foreach (API_RESOURCES as $apiResource) {
        $routes->resources($apiResource, [
            'inflect' => 'dasherize'
        ]);
    }

    $routes->fallbacks('DashedRoute');
});

Router::connect('/users/login', ['controller' => 'Users', 'action' => 'login']);

Plugin::routes();
