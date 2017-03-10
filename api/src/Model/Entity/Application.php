<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Application Entity
 *
 * @property string $id
 * @property string $name
 * @property string $abbreviation
 * @property string $description
 * @property string $domain_id
 *
 * @property \App\Model\Entity\Domain $domain
 * @property \App\Model\Entity\Project[] $projects
 */
class Application extends Entity
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
