<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * Domains Controller
 *
 * @property \App\Model\Table\DomainsTable $Domains
 */
class DomainsController extends AppController
{

    /**
     * Index method
     *
     * @return \Cake\Network\Response|null
     */
    public function index()
    {
        $domains = $this->paginate($this->Domains);

        $this->set(compact('domains'));
        $this->set('_serialize', ['domains']);
    }

    /**
     * View method
     *
     * @param string|null $id Domain id.
     * @return \Cake\Network\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $domain = $this->Domains->get($id, [
            'contain' => ['Applications']
        ]);

        $this->set('domain', $domain);
        $this->set('_serialize', ['domain']);
    }

    /**
     * Add method
     *
     * @return \Cake\Network\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $domain = $this->Domains->newEntity();
        if ($this->request->is('post')) {
            $domain = $this->Domains->patchEntity($domain, $this->request->getData());
            if ($this->Domains->save($domain)) {
                $this->Flash->success(__('The domain has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The domain could not be saved. Please, try again.'));
        }
        $this->set(compact('domain'));
        $this->set('_serialize', ['domain']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Domain id.
     * @return \Cake\Network\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $domain = $this->Domains->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $domain = $this->Domains->patchEntity($domain, $this->request->getData());
            if ($this->Domains->save($domain)) {
                $this->Flash->success(__('The domain has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The domain could not be saved. Please, try again.'));
        }
        $this->set(compact('domain'));
        $this->set('_serialize', ['domain']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Domain id.
     * @return \Cake\Network\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $domain = $this->Domains->get($id);
        if ($this->Domains->delete($domain)) {
            $this->Flash->success(__('The domain has been deleted.'));
        } else {
            $this->Flash->error(__('The domain could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
