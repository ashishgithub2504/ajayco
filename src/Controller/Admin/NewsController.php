<?php
namespace App\Controller\Admin;

use App\Controller\AppController;

/**
 * Banners Controller
 *
 * @property \App\Model\Table\BannersTable $Banners
 *
 * @method \App\Model\Entity\Banner[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class NewsController extends AppController
{

    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
		$query = $this->News->find();
		$options['order'] = ['Banners.id' => 'DESC'];
        $options['limit'] = $this->ConfigSettings['ADMIN_PAGE_LIMIT'];
        $this->paginate = $options;
        $banners = $this->paginate($query);
		$this->set(compact('banners'));
        $this->set('_serialize', ['banners']);
    }

    /**
     * View method
     *
     * @param string|null $id Banner id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $banner = $this->News->get($id, [
            'contain' => []
        ]);

        $this->set('banner', $banner);
        $this->set('_serialize', ['banner']);
    }


    /**
     * Add/Edit method
     *
     * case: add
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     * cse: edit
     * @param string|null $id Banner id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function add($id = null)
    {
        if($id){
            $news = $this->News->get($id, [
                'contain' => []
            ]);
        }else{
            $news = $this->News->newEntity();
        }
        if ($this->request->is(['post','patch', 'put'])) {
            $news = $this->News->patchEntity($news, $this->request->getData());
            if ($this->News->save($news)) {
                $this->Flash->success(__('The News has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The News could not be saved. Please, try again.'));
        }
        
        $this->set(compact('news'));
        $this->set('_serialize', ['news']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Banner id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $this->add($id);
        $this->render("add");
    }

    /**
     * Delete method
     *
     * @param string|null $id Banner id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $banner = $this->News->get($id);
        if ($this->News->delete($banner)) {
            $this->Flash->success(__('The News has been deleted.'));
        } else {
            $this->Flash->error(__('The News could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
