<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * GatingBoards Controller
 *
 * @property \App\Model\Table\GatingBoardsTable $GatingBoards
 */
class GatingBoardsController extends AppController
{

    /**
     * Index method
     *
     * @return \Cake\Network\Response|null
     */
    public function index()
    {
        $gatingBoards = $this->paginate($this->GatingBoards);

        $this->set(compact('gatingBoards'));
        $this->set('_serialize', ['gatingBoards']);
    }

    /**
     * View method
     *
     * @param string|null $id Gating Board id.
     * @return \Cake\Network\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $gatingBoard = $this->GatingBoards->get($id, [
            'contain' => []
        ]);

        $this->set('gatingBoard', $gatingBoard);
        $this->set('_serialize', ['gatingBoard']);
    }

    /**
     * Add method
     *
     * @return \Cake\Network\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $gatingBoard = $this->GatingBoards->newEntity();
        if ($this->request->is('post')) {
            $gatingBoard = $this->GatingBoards->patchEntity($gatingBoard, $this->request->getData());
            if ($this->GatingBoards->save($gatingBoard)) {
                $this->Flash->success(__('The gating board has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The gating board could not be saved. Please, try again.'));
        }
        $this->set(compact('gatingBoard'));
        $this->set('_serialize', ['gatingBoard']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Gating Board id.
     * @return \Cake\Network\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $gatingBoard = $this->GatingBoards->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $gatingBoard = $this->GatingBoards->patchEntity($gatingBoard, $this->request->getData());
            if ($this->GatingBoards->save($gatingBoard)) {
                $this->Flash->success(__('The gating board has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The gating board could not be saved. Please, try again.'));
        }
        $this->set(compact('gatingBoard'));
        $this->set('_serialize', ['gatingBoard']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Gating Board id.
     * @return \Cake\Network\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $gatingBoard = $this->GatingBoards->get($id);
        if ($this->GatingBoards->delete($gatingBoard)) {
            $this->Flash->success(__('The gating board has been deleted.'));
        } else {
            $this->Flash->error(__('The gating board could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
