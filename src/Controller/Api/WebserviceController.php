<?php
namespace App\Controller\Api;

use App\Controller\AppController;
use Cake\ORM\TableRegistry;
use Cake\Routing\Router;
use Cake\Core\Configure;
use CatalogManager\Model\Entity\Product;

class WebserviceController extends AppController {

    public function initialize() {
        parent::initialize();
        
        $this->RequestHandler->renderAs($this, 'json');
        $this->Products = TableRegistry::get('CatalogManager.Products');
        $this->Category = TableRegistry::get('CategoryManager.Categories');
        
    }

    /**
     * Index method
     *
     * @return \Cake\Network\Response|null
     */
    public function index() {
        
        $products = $this->Products->find('all',[
            'conditions' => ['status' => 1,'bestselling' => '1'],
            'fields' => [
                'full_name' => "CONCAT(title, ' ', slug)",
                "link" => "status",    
                'id',
                'title',
                'slug',
                'model',
                'price',
                'quantity',
                'minimum_quantity',
                'stock_status_id',
                'short_description',
                'description',
                'image',
                'bestselling',
                'enquirystatus',
            ]],['order' => ['sort_order','desc']]
        )
        ->toArray();
    
        $latest_products = $this->Products->find('all',[
            'conditions' => ['status' => 1],
            'fields' => [
            'full_name' => "CONCAT(title, ' ', slug)",
            "link" => "status",
            'id',
            'title',
            'slug',
            'model',
            'price',
            'quantity',
            'minimum_quantity',
            'stock_status_id',
            'short_description',
            'description',
            'image',
            'enquirystatus',

        ]],['order' => ['id','desc']])->toArray();
        // print_r($products); die;
        $banners = TableRegistry::get('BannerManager.Banners')->find()
                    ->contain(['BannerImages'=> function($q) {
                        return $q->select(['external_link','description',
                                'image','title','banner_id'
                            ]);
                    }])
                    ->where(['id' => '1', 'status' => '1'])->first();
        
        $footer = [
            'sec1' => [
                'logo' => Configure::read('Setting.MAIN_LOGO'),
                'text' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
            ],
            'sec2' => [
                'text' => 'Menu',

            ]
            
        ];

        $response = [
            'status' => true,
            'message' => 'List found',
            'code' => 200,
            'data' => [
                        'products' => $products,
                        'latest_products' => $latest_products,
                        'banner_images' => $banners['banner_images'],
                        'footer' => $footer,
                        'timthumb_path' => Router::url('/timthumb.php?src=',true),
                        'full_path' => Router::url('/webroot/img/', true),
                        'product_path' => Router::url('/webroot/img/uploads/products/', true)
                    ]
        ];
        $this->response($response);
    }

    public function getnavigation() {
        
        $categories = $this->Category->find()
            ->where(['status'=>1,'parent_id' => 0])
            ->contain(['Products' => function($q) {
                return $q->select(['id','title','slug']);
            }])
            ->hydrate(false)
            ->toArray();
        $category = [];
        foreach($categories as $key=>$val) {
            $category[$key]['name'] = $val['title'];
            $category[$key]['slug'] = $val['slug'];
            if(!empty($val['products'])) {
                foreach($val['products'] as $k => $v) {
                    $category[$key]['products'][$k]['title'] = $v['title'];
                    $category[$key]['products'][$k]['slug'] = $v['slug'];
                }
            }
        }
        
        $response = [
            'status' => true,
            'message' => 'List found',
            'code' => 200,
            'data' => [
                        'categories'=> $category
                      ]
            ];
        $this->response($response);
    }

    public function login(){
        $response = [
            'status' => false,
            'message' => 'Invalid credentials, try again',
            'code' => 404
        ];
        if ($this->request->is('post')) {
            $this->request->data = $this->request->data['detail'];
            $user = $this->Auth->identify();

            if ($user) {
                if ($user['is_verified'] != 1) {
                    $response['message'] = 'Your account is not verified. Please check your email and verify them.';
                } else if ($user['status'] != 1) {
                    $response['message'] = 'Your account has been deactivated. Please contact ' . $this->ConfigSettings['SYSTEM_APPLICATION_NAME'] . ' Support for assistance';
                } else {
                    $this->Auth->setUser($user);
                    $response = [
                        'status' => true,
                        'code' => 400,
                        'data' => $user,
                        'message' => 'You have successfully login'
                    ];
                }
            }
        }
        $this->response($response);
    }

    public function signup(){
        
        $response = [
            'staus' => false,
            'message' => 'invalid registration',
            'code' => 404
        ];

        $this->request->data = $this->request->getData('detail');
        $this->request->data['login_count'] = 0;
        $this->request->data['is_verified'] = 0;
        $this->request->data['status'] = 0;
        $this->Users = TableRegistry::get('UserManager.Users');
        $user = $this->Users->newEntity();
        
        $user = $this->Users->patchEntity($user, $this->request->data);
        
        if ($this->Users->save($user)) {
            $response = ['status'=>true,'code' => 200 ,'message'=>'You have successfully registred','data' => $user];
        }else{
             $response['data'] = $user->errors();
        }
        $this->response($response);
    }

    public function staticpage() {
        $response = ['status'=>false,'code' => 404 ,'message'=>'List Not Found'];
        if($this->request->is(['post'])) {
            
            $result = TableRegistry::get('pages')
                    ->find()
                    ->where(['slug' => $this->request->getData('name')])
                    ->first();
            if(!empty($result)){
                $response = ['status'=>true,'code' => 200 ,'message'=>'List Found','data' => $result];
            }else {
                $response = ['status'=>false,'code' => 404 ,'message'=>'List Not Found'];
            }    
        }        
     
        $this->response($response);
    }

    public function getcategories() {
        $categories = $this->Category->find('all', [
            //'spacer' => '_', 
            'conditions' => ['status' => 1,'parent_id' => 0],
            'fields' => ['id' , 'title'],
            ]);
        
        if(!empty($categories->toArray())){
            $response = [
                'status' => true,
                'message' => 'List found',
                'code' => 200,
                'data' => $categories->toArray()
            ];
        }
        
        $this->response($response);

    }

    public function getproducts() {
        $response = ['status'=>false,'code' => 404 ,'message'=>'List Not Found'];
        
        $article = new Product();
        $article->setVirtual(['linkwrite', 'anshu']);
        $article->virtualProperties(['linkwrite', $article->get('full_name')]);
        
        $products = $this->Products->find('all',[
            'conditions' => ['status' => 1],
            'fields' => [
                //'product_path' => Router::url('/webroot/img/uploads/products/', true),
                'full_name' => "CONCAT(title, ' ', slug)",
                "link" => "status",
                "timthumb" => "status",
                // 'linkwrite' => $article->get('full_name'),
                'id',
                'title',
                'slug',
                'model',
                'price',
                'quantity',
                'minimum_quantity',
                'stock_status_id',
                'short_description',
                'description',
                'image',
                'bestselling',
                'enquirystatus',
                'title'
            ],
            'matching' => [
                'Categories',function($q){
                    return $q;
                }
            ]
        ],['order' => ['sort_order','desc']]
        )
        //->hydrate(false)
        ->toArray();
        
        $mostsell = $this->Products->find('all',[
            'conditions' => ['status' => 1,'bestselling' => 1],
            'fields' => [
                //'product_path' => Router::url('/webroot/img/uploads/products/', true),
                'full_name' => "CONCAT(title, ' ', slug)",
                "link" => "status",
                "timthumb" => "status",
                // 'linkwrite' => $article->get('full_name'),
                'id',
                'title',
                'slug',
                'model',
                'price',
                'quantity',
                'minimum_quantity',
                'stock_status_id',
                'short_description',
                'description',
                'image',
                'bestselling',
                'enquirystatus',
            ]
        ],['order' => ['sort_order','desc']]
        )
        //->hydrate(false)
        ->toArray();
        
        if(!empty($products)){
                $response = [
                        'status'=>true,
                        'code' => 200 ,
                        'message'=>'List Found',
                        'data' => [
                                    'products' => $products,
                                    'mostsell' => $mostsell,
                                ]
                    ];
        }
        $this->response($response);
    }

    public function productdetails() {
        $response = ['status'=>false,'code' => 404 ,'message'=>'List Not Found'];
        $detail = $this->Products->find()->select([
            'full_name' => "CONCAT(title, ' ', slug)",
                "link" => "status",
                "timthumb" => "status",
                // 'linkwrite' => $article->get('full_name'),
                'id',
                'title',
                'slug',
                'model',
                'price',
                'quantity',
                'minimum_quantity',
                'stock_status_id',
                'short_description',
                'description',
                'image',
                'bestselling',
                'enquirystatus',
                'status',
        ])->where([
            'slug' => $this->request->data['slug'],
            'status' => 1
        ])->first();

        if(!empty($detail)){
                $response = [
                        'status'=>true,
                        'code' => 200 ,
                        'message'=>'List Found',
                        'data' => $detail
                    ];
        }
        $this->response($response);
    }

    public function enquiry() {
        $response = [
            'staus' => false,
            'message' => 'Enquiry not submited successfully',
            'code' => 404
        ];
        $this->inquiries = TableRegistry::get('ContactManager.Inquiries');
        $inquiries = $this->inquiries->newEntity();
        $inquiries = $this->inquiries->patchEntity($inquiries, $this->request->data['detail']);
        
        if($this->inquiries->save($inquiries)) {
            $response = ['status'=>true,'code' => 200 ,'message'=>'You enquiry has been successfully saved. we will contact  you shortly.','data' => $inquiries];
        }
        $this->response($response);
        // print_r($this->request->data); die;
    }
    
}
