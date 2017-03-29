<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * GatingBoards Model
 *
 * @property \Cake\ORM\Association\BelongsToMany $Projects
 *
 * @method \App\Model\Entity\GatingBoard get($primaryKey, $options = [])
 * @method \App\Model\Entity\GatingBoard newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\GatingBoard[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\GatingBoard|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\GatingBoard patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\GatingBoard[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\GatingBoard findOrCreate($search, callable $callback = null, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class GatingBoardsTable extends Table
{

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->setTable('gating_boards');
        $this->setDisplayField('date');
        $this->setPrimaryKey('id');

        $this->addBehavior('Timestamp');

        $this->belongsToMany('Projects', [
            /*'foreignKey' => 'gating_board_id',
            'targetForeignKey' => 'project_id',
            'joinTable' => 'projects_gating_boards'*/
            'through' => 'ProjectsGatingBoards'
        ]);
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->uuid('id')
            ->allowEmpty('id', 'create');

        $validator
            ->date('date')
            ->requirePresence('date', 'create')
            ->notEmpty('date');

        $validator
            ->requirePresence('status', 'create')
            ->notEmpty('status');

        return $validator;
    }
}
