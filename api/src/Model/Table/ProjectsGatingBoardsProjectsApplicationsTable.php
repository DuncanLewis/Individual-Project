<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * ProjectsGatingBoardsProjectsApplications Model
 *
 * @property \Cake\ORM\Association\BelongsTo $ProjectsGatingBoards
 * @property \Cake\ORM\Association\BelongsTo $ProjectsApplications
 * @property \Cake\ORM\Association\BelongsTo $Users
 *
 * @method \App\Model\Entity\ProjectsGatingBoardsProjectsApplication get($primaryKey, $options = [])
 * @method \App\Model\Entity\ProjectsGatingBoardsProjectsApplication newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\ProjectsGatingBoardsProjectsApplication[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\ProjectsGatingBoardsProjectsApplication|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\ProjectsGatingBoardsProjectsApplication patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\ProjectsGatingBoardsProjectsApplication[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\ProjectsGatingBoardsProjectsApplication findOrCreate($search, callable $callback = null, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class ProjectsGatingBoardsProjectsApplicationsTable extends Table
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

        $this->setTable('projects_gating_boards_projects_applications');
        $this->setDisplayField('id');
        $this->setPrimaryKey('id');

        $this->addBehavior('Timestamp');

        $this->belongsTo('ProjectsGatingBoards', [
            'foreignKey' => 'projects_gating_board_id',
            'joinType' => 'INNER'
        ]);
        $this->belongsTo('ProjectsApplications', [
            'foreignKey' => 'projects_application_id',
            'joinType' => 'INNER'
        ]);
        $this->belongsTo('Users', [
            'foreignKey' => 'user_id',
            'joinType' => 'INNER'
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
            ->requirePresence('response', 'create')
            ->notEmpty('response');

        $validator
            ->allowEmpty('comments');

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
        $rules->add($rules->existsIn(['projects_gating_board_id'], 'ProjectsGatingBoards'));
        $rules->add($rules->existsIn(['projects_application_id'], 'ProjectsApplications'));
        $rules->add($rules->existsIn(['user_id'], 'Users'));

        return $rules;
    }
}
