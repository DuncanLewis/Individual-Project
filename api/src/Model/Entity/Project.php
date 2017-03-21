<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Project Entity
 *
 * @property string $id
 * @property string $name
 * @property string $status
 * @property string $accenture_pm
 * @property string $hpe_pm
 * @property int $aldea_request_number
 * @property string $post_go_live_support
 * @property \Cake\I18n\Time $warranty_start
 * @property \Cake\I18n\Time $warranty_end
 * @property \Cake\I18n\Time $technical_go_live
 * @property \Cake\I18n\Time $business_go_live
 * @property \Cake\I18n\Time $created
 * @property \Cake\I18n\Time $modified
 *
 * @property \App\Model\Entity\Application[] $applications
 */
class Project extends Entity
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
