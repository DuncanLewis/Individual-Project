<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * ProjectsGatingBoards Model
 *
 * @property \Cake\ORM\Association\BelongsTo $Projects
 * @property \Cake\ORM\Association\BelongsTo $GatingBoards
 * @property \Cake\ORM\Association\HasMany $Responses
 *
 * @method \App\Model\Entity\ProjectsGatingBoard get($primaryKey, $options = [])
 * @method \App\Model\Entity\ProjectsGatingBoard newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\ProjectsGatingBoard[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\ProjectsGatingBoard|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\ProjectsGatingBoard patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\ProjectsGatingBoard[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\ProjectsGatingBoard findOrCreate($search, callable $callback = null, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class ProjectsGatingBoardsTable extends Table
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

        $this->setTable('projects_gating_boards');
        $this->setDisplayField('project_id_gate_date');
        $this->setPrimaryKey('id');

        $this->addBehavior('Timestamp');

        $this->belongsTo('Projects', [
            'foreignKey' => 'project_id',
            'joinType' => 'INNER'
        ]);
        $this->belongsTo('GatingBoards', [
            'foreignKey' => 'gating_board_id',
            'joinType' => 'INNER'
        ]);

        $this->belongsToMany('ProjectsApplications', [
            'through' => 'ProjectsGatingBoardsProjectsApplications'
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
            ->requirePresence('gate', 'create')
            ->notEmpty('gate');

        return $validator;
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules)
    {
        $rules->add($rules->existsIn(['project_id'], 'Projects'));
        $rules->add($rules->existsIn(['gating_board_id'], 'GatingBoards'));

        return $rules;
    }
}
