<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Projects Model
 *
 * @property \Cake\ORM\Association\BelongsToMany $Applications
 * @property \Cake\ORM\Association\BelongsToMany $GatingBoards
 *
 * @method \App\Model\Entity\Project get($primaryKey, $options = [])
 * @method \App\Model\Entity\Project newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\Project[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Project|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Project patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Project[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\Project findOrCreate($search, callable $callback = null, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class ProjectsTable extends Table
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

        $this->setTable('projects');
        $this->setDisplayField('nokia_project_id');
        $this->setPrimaryKey('id');

        $this->addBehavior('Timestamp');

        /**
         * belongsToMany CurrentGate
         *
         * This creates a virtual entity which is accessible by the API and uses special code in the beforeFind
         */
        $this->belongsToMany('CurrentGate', [
            'className' => 'GatingBoards',
            'through' => 'ProjectsGatingBoards',
            'foreignKey' => 'project_id',
            'targetForeignKey' => 'gating_board_id',
            'joinTable' => 'projects_gating_boards'
        ]);

        $this->belongsToMany('Applications', [
            'through' => 'ProjectsApplications'
        ]);
        $this->belongsToMany('GatingBoards', [
            'through' => 'ProjectsGatingBoards'
        ]);

        $this->hasMany('Risks');

        $this->hasMany('Documents');
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
            ->allowEmpty('id', 'create');

        $validator
            ->requirePresence('name', 'create')
            ->notEmpty('name');

        $validator
            ->allowEmpty('description');

        $validator
            ->requirePresence('status', 'create')
            ->notEmpty('status');

        $validator
            ->requirePresence('accenture_pm', 'create')
            ->notEmpty('accenture_pm');

        $validator
            ->requirePresence('hpe_pm', 'create')
            ->notEmpty('hpe_pm');

        $validator
            ->integer('aldea_request_number')
            ->requirePresence('aldea_request_number', 'create')
            ->notEmpty('aldea_request_number');

        $validator
            ->requirePresence('post_go_live_support', 'create')
            ->notEmpty('post_go_live_support');

        $validator
            ->date('warranty_start')
            ->requirePresence('warranty_start', 'create')
            ->notEmpty('warranty_start');

        $validator
            ->date('warranty_end')
            ->requirePresence('warranty_end', 'create')
            ->notEmpty('warranty_end');

        $validator
            ->date('technical_go_live')
            ->requirePresence('technical_go_live', 'create')
            ->notEmpty('technical_go_live');

        $validator
            ->date('business_go_live')
            ->requirePresence('business_go_live', 'create')
            ->notEmpty('business_go_live');

        return $validator;
    }


    public function findCurrentGate(Query $query, array $options) {

    }
}
