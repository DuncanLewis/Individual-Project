<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * ProjectsGatingBoard Entity
 *
 * @property string $id
 * @property string $project_id
 * @property string $gating_board_id
 * @property string $gate
 * @property \Cake\I18n\Time $created
 * @property \Cake\I18n\Time $modified
 *
 * @property \App\Model\Entity\Project $project
 * @property \App\Model\Entity\GatingBoard $gating_board
 * @property \App\Model\Entity\Response[] $responses
 */
class ProjectsGatingBoard extends Entity
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


    protected function _getProjectIdGateDate()
    {
        return $this->_properties['project_id'];
    }

}
