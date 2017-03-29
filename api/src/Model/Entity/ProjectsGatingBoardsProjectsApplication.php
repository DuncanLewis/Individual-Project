<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * ProjectsGatingBoardsProjectsApplication Entity
 *
 * @property string $id
 * @property string $projects_gating_board_id
 * @property string $projects_application_id
 * @property string $user_id
 * @property string $response
 * @property string $comments
 * @property \Cake\I18n\Time $created
 * @property \Cake\I18n\Time $modified
 *
 * @property \App\Model\Entity\ProjectsGatingBoard $projects_gating_board
 * @property \App\Model\Entity\ProjectsApplication $projects_application
 * @property \App\Model\Entity\User $user
 */
class ProjectsGatingBoardsProjectsApplication extends Entity
{

    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        '*' => true,
        'id' => false
    ];
}
