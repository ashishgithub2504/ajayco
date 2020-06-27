<?php
namespace App\Controller\Api;

use App\Controller\AppController;
use Cake\ORM\TableRegistry;
use Cake\Routing\Router;
use Cake\Core\Configure;
use CatalogManager\Model\Entity\Product;
use Cake\Utility\Text;

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
                //'full_name' => "CONCAT(title,' ',slug)",
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
        // print_r($products); die;
        $latest_products = $this->Products->find('all',[
            'conditions' => ['status' => 1],
            'fields' => [
            // 'full_name' => "CONCAT(title, ' ', slug)",
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

        $feature_products = $this->Products->find('all',[
            'conditions' => ['status' => 1,'is_featured' => 1],
            'fields' => [
            // 'full_name' => "CONCAT(title, ' ', slug)",
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
        foreach ($banners['banner_images'] as $key => $value) {
            $banners['banner_images'][$key] = [
                'title' => $value['title'],
                'text' => $value['description'],
                'image_classic' => Router::url('/timthumb.php?src=',true).'/img/'.$value['image'].'&w=840&h=430',
                'image_full' => Router::url('/timthumb.php?src=',true).'/img/'.$value['image'].'&w=840&h=430',
                'image_mobile' => Router::url('/timthumb.php?src=',true).'/img/'.$value['image'].'&w=510&h=390',
                'external_link' => $value['external_link'],
            ];
        }
        // print_r($banners); die;
        $footer = [
            'sec1' => [
                'logo' => Configure::read('Setting.MAIN_LOGO'),
                'text' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
            ],
            'sec2' => [
                'text' => 'Menu',
            ]
            
        ];

        $news = TableRegistry::get('News')
                    ->find()
                    ->where(['status' => '1'])->limit(5)->toArray();
        foreach($news as $k => $val) {
            $news[$k] = [
                'image' => Router::url('/timthumb.php?src=', true).'/img/uploads/news/'.$val['image'].'&w=350&h=200',
                'title' => $val['title'],
                'slug' => $val['slug'],
                'shot_desc' => $val['short_desc'],
                'long_desc' => $val['long_desc'],
                'date' => date('M d,Y',strtotime($val['created'])),
            ];
        }

        $response = [
            'status' => true,
            'message' => 'List found',
            'code' => 200,
            'data' => [
                        'logo' => Router::url('/img/', true).Configure::read('Setting.MAIN_LOGO'),
                        'products' => $products,
                        'latest_products' => $latest_products,
                        'feature_products' => $feature_products,
                        'banner_images' => $banners['banner_images'],
                        'news' => $news,
                        'footer' => $footer,
                        'timthumb_path' => Router::url('/timthumb.php?src=',true),
                        'full_path' => Router::url('/img/', true),
                        'product_path' => Router::url('/img/uploads/products/', true)
                    ]
        ];
        $this->response($response);
    }

    public function getnavigation() {
        
        $categories = $this->Category->find()
            ->where(['status'=>1,'parent_id' => 0])
            // ->limit(8)
            ->contain(['Products' => function($q) {
                return $q->select(['id','title','slug']);
            }])
            ->hydrate(false)
            ->toArray();
        $category = [];
        foreach($categories as $key=>$val) {
            $category[$key]['label'] = $val['title'];
            $category[$key]['url'] = $val['slug'];
            $cat = [];
            if(!empty($val['products'])) {
                foreach($val['products'] as $k => $v) {
                    $cat[$k]['label'] = $v['title'];
                    $cat[$k]['url'] = 'shop/products/'.$v['slug'];
                    $cat[$k]['purl'] = 'product/'.$v['slug'];
                    $cat[$k]['enabled'] = true;
                }
            }
            $category[$key]['menu'] = [
                'type'=>'menu',
                'items' => $cat
            ];
        }
        // echo '<pre>';
        // print_r($category);die;
        
        $response = [
            'status' => true,
            'message' => 'List found',
            'code' => 200,
            'data' => $category
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
                $user['profile_pic'] = Router::url($user['image_path'], true).$user['profile_photo'];
            
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
        $this->request->data['status'] = '1';
        $this->Users = TableRegistry::get('UserManager.Users');
        $user = $this->Users->newEntity();
        $user = $this->Users->patchEntity($user, $this->request->data);
        // pr($user); die;
        if ($this->Users->save($user)) {
            $response = ['status'=>true,'code' => 200 ,'message'=>'You have successfully registred','data' => $user];
        }else{
             $response['data'] = $user->errors();
        }
        $this->response($response);
    }

    public function update() {
        $response = [
            'staus' => false,
            'message' => 'invalid registration',
            'code' => 404
        ];
        $this->Users = TableRegistry::get('UserManager.Users');
        $this->request->data = $this->request->getData('detail');
        $data = $this->Users->find()
                ->where(['email' => $this->request->data['email']])
                ->first();
        
        if(!empty($data)) {
            $data['first_name'] = $this->request->data['first_name'];
            $data['last_name'] = $this->request->data['last_name'];
            $data['mobile'] = $this->request->data['phone'];
            if($this->Users->save($data)) {
                $response = ['status'=>true,'code' => 200 ,'message'=>'Profile update successfully','data' => $data];
            } else{
                $response['data'] = $data->errors();
            }
        }
        $this->response($response);
    }

    public function staticpage() {
        $response = ['status'=>false,'code' => 404 ,'message'=>'List Not Found'];
        //if($this->request->is(['post'])) {
            //pr(); die;
            $result = TableRegistry::get('pages')
                    ->find()
                    ->where(['slug' => $this->request->query('name')])
                    ->first();
            if(!empty($result)){
                $response = ['status'=>true,'code' => 200 ,'message'=>'List Found','data' => $result];
            }else {
                $response = ['status'=>false,'code' => 404 ,'message'=>'List Not Found'];
            }    
        //}        
     
        $this->response($response);
    }

    public function getcategories() {
        $response = [];
        $categories = $this->Category->find('all', [
            //'spacer' => '_', 
            'conditions' => ['status' => 1,'parent_id' => 0],
            'fields' => ['id' ,'name'=> 'title','title','slug','url'=>'slug','image'],
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

    public function getcategory() {
        $response = [
            'ok' => false,
            'status'=> 404,
            'statusText'=> 'Page Not Found',
            'url' => null,
        ];
        $categories = $this->Category->find('all', [
            'conditions' => ['status' => 1
                //,'slug'=>$this->request->data['slug']
            ],
            'fields' => ['id' ,'name'=> 'title','title','slug','url'=>'slug','image'],
        ])->first();
        // print_r($categories); die;
        if(!empty($categories)) {
            $response = [
                'children'=> [],
                'customFields'=> [],
                'id'=> 40,
                'image'=> null,
                'items'=> 54,
                'name'=> "Electronics",
                'parents'=> [],
                'path'=> "electronics",
                'slug'=> "electronics",
                'type'=> "shop",
            ];
        }
        $this->response($response);
    }

    public function getproducts() {
        $this->request->data = !empty($this->request->data['path'])?$this->request->data['path']:$this->request->data;
        // print_r($this->request->data); die;
        $response = ['status'=>false,'code' => 404 ,'message'=>'No Product Found'];
        $article = new Product();
        $limit = !empty($this->request->data['limit'])?$this->request->data['limit']:12;
        $page = !empty($this->request->data['page'])?$this->request->data['page']:1;
        $offset = $limit*($page-1);
        $sort = !empty($this->request->data['sort'])?$this->request->data['sort']:'asc';


        $orderby = ['Products.title' => $sort];

        $query = $this->Products->find()->where(['Products.status' => 1]);
        
        if(!empty($this->request->data) && !empty($this->request->data['category_id'])) {
            $query->matching('Categories',function($q){
                return $q->where(['Categories.slug' => $this->request->data['category_id']]);
            }); 
        } else {
            $query->contain(['Categories','ProductImages']);
        }

        if(!empty($this->request->query('is_featured'))) {
            $query->andWhere(['is_featured' => '1']);
        }

        if(!empty($this->request->query('bestselling'))) {
            $query->andWhere(['bestselling' => '1']);
        }

        // if(!empty($this->request->query('category'))) {
        //     $query->matching('Categories',function($q){
        //         return $q->where(['Categories.slug' => $this->request->query('category')]);
        //     });
        // }

        $count = $query->count();
        $query->limit($limit)->offset($offset);
        $query->order($orderby);

        $products = $query->hydrate(false)->toArray();

        $list = [];
        if(!empty($products)){
                foreach ($products as $key => $value) {
                    $list[$key]['id'] = $value['id'];
                    $list[$key]['name'] = $value['title'];
                    $list[$key]['slug'] = $value['slug'];
                    $list[$key]['price'] = $value['price'];
                    $list[$key]['images'][] = Router::url('/timthumb.php?src=',true).Router::url('/img/uploads/products/', true).$value['image'].'&w=700&h=700';
                    if(!empty($value['product_images'])) {
                        foreach ($value['product_images'] as $k => $val) {
                            $list[$key]['images'][] = Router::url('/timthumb.php?src=',true).Router::url('/img/uploads/products/'.$value['id'].'/', true).$val['image'].'&w=700&h=700';    
                        }                        
                    } else {
                        $list[$key]['images'] = [];
                    }
                    $list[$key]['compareAtPrice'] = null;
                    $list[$key]['badges'] = ['new'];
                    $list[$key]['rating'] = 4;
                    $list[$key]['reviews'] = 12;
                    $list[$key]['availability'] = ($value['stock_status_id'] == '1') ? 'in-stock':'Out Of Stock';
                    $list[$key]['brand'] = 'jenix';
                    $list[$key]['enquirystatus'] = $value['enquirystatus'];
                    if(!empty($value['categories'])) {
                        foreach($value['categories'] as $kk=>$vv) {
                            $list[$key]['categories'][] = $vv['title'];
                        }
                    }
                    // $list[$key]['categories'] = [];
                    $list[$key]['attributes'] = [];
                }      
        }
        
        $response = [
            'status'=>true,
            'code' => 200 ,
            'message'=>'List Found',
            'data' => [
                'limit' => (int)$limit,
                'offset' => (int)$offset,
                'page' => (int)$page,
                'sort' => $sort,
                'pages' => (int)ceil($count/$limit),
                'products' => $list
            ]
        ];
        $this->response($response);
    }

    public function getproductlist() {
        $status = 404;
        $response = ['status'=>404,'code' => 404 ,'message'=>'No Product Found'];
        $article = new Product();
        $sort = (!empty($this->request->data['options']) && isset($this->request->data['options']['sort']))?$this->request->data['options']['sort']:'default';
        $limit = (!empty($this->request->data['options']) && isset($this->request->data['options']['limit'])) ? $this->request->data['options']['limit']:'12';
        $filterValues = !empty($this->request->data['options'])?$this->request->data['options']['filterValues'] : [];
        $pricelimit = isset($filterValues['price'])?explode('-',$filterValues['price']):explode('-','0-2000');
        // pr($pricelimit); die;
        
        $categorylist = $this->Category->find()
                        ->where(['parent_id' => '0'])
                        ->contain(['Products'=>function($q) {
                            return $q->select(['id','title']);
                        }])
                        ->toArray();
                        
        $query = $this->Products->find()->where(['Products.status' => 1]);
        $query->andWhere(['Products.price <=' => $pricelimit['1'], 'Products.price >=' => $pricelimit['0']]);
        $query->limit($limit);
        
        if($sort == 'name_asc') {
            $query->order(['Products.title'=>'asc']);
        } else if ($sort == 'name_desc') {
            $query->order(['Products.title' => 'desc']);
        } else {
            $query->order(['id' => 'desc']);
        }

        if(!empty($this->request->data) && !empty($this->request->data['path'])) {
            $query->matching('Categories',function($q){
                return $q->where(['Categories.slug' => $this->request->data['path']]);
            }); 
        }else {
            $query->contain(['Categories','ProductImages']);
        }
        
        $products = $query->hydrate(false)->toArray();
        
        
        foreach($categorylist as $key=>$val) {
           $catList[] =  [
                'category' => [
                    'childern' => null,
                    'customFields' => [],
                    'id' => $val['id'],
                    'image' => null,
                    'items' => count($val['products']),
                    'name' => $val['title'],
                    'parents' => null,
                    'path' => $val['slug'],
                    'slug' => $val['slug'],
                    'type' => 'shop'
                ],
                'type' => 'child',
                'name' => $val['title'],
                'slug' => $val['slug'],
                'count' => count($val['products'])
            ];
        }

        $list = [];
        if(!empty($products)){
                $status = true;
                foreach ($products as $key => $value) {
                    $list[$key]['id'] = $value['id'];
                    $list[$key]['name'] = $value['title'];
                    $list[$key]['slug'] = $value['slug'];
                    $list[$key]['price'] = $value['price'];
                    if(!empty($value['product_images'])) {
                        foreach ($value['product_images'] as $k => $val) {
                            $list[$key]['images'][] = Router::url('/timthumb.php?src=',true).Router::url('/img/uploads/products/', true).$val['image'].'&w=700&h=700';    
                        }                        
                    } else {
                        $list[$key]['images'] = [];
                    }
                    $list[$key]['images'][] = Router::url('/timthumb.php?src=',true).Router::url('/img/uploads/products/', true).$value['image'].'&w=700&h=700';
                    $list[$key]['compareAtPrice'] = null;
                    $list[$key]['badges'] = ['new'];
                    $list[$key]['rating'] = 4;
                    $list[$key]['reviews'] = 12;
                    $list[$key]['availability'] = ($value['stock_status_id'] == '1') ? 'in-stock':'Out Of Stock';
                    $list[$key]['brand'] = 'jenix';
                    
                    $list[$key]['attributes'] = [];
                }        
        }

        $response = [
            'status'=>$status,
            'code' => 200 ,
            'message'=>'List Found',
            'data' => [
                'filterValues' => $filterValues,
                'filters' => [
                    [
                        'name' => 'Categories',
                        'root' => true,
                        'slug' => 'categories',
                        'type' => 'categories',
                        'items' => $catList
                    ],
                    [
                        'name' =>'Price',
                        'slug' =>'price',
                        'type' => 'range',
                        'min' => 0,
                        'max' => 2000,
                        'value' => [
                            $pricelimit['0'],
                            $pricelimit['1']
                            ]   
                    ],
                    // [
                    //     'name' => 'Brand',
                    //     'slug' =>'brand',
                    //     'type' => 'check',
                    //     'value' => [],
                    //     'items' => [
                    //         [
                    //             'count' => 1,
                    //             'name'=> 'Brandix',
                    //             'slug' => 'brandix'
                    //         ],
                    //         [
                    //             'count' => 4,
                    //             'name' => 'Zosch',
                    //             'slug' => 'zosch'
                    //         ]
                    //     ]
                    // ]
                ],
                'form' => 1,
                'items' => $list,
                'limit' => $limit,
                'page' => 1,
                'pages' => round(count($list)/$limit),
                'sort' => $sort,
                'to' => 1,
                'total' => count($list)
            ]
        ];
        $this->response($response);
    }

    public function productdetails() {
        $response = ['status'=>false,'code' => 404 ,'message'=>'List Not Found'];
        $detail = $this->Products->find()
        ->select([
            // 'full_name' => "CONCAT(title, ' ', slug)",
               // "link" => "status",
                //"timthumb" => "status",
                // 'linkwrite' => $article->get('full_name'),
                'id',
                'name' => 'title',
                'slug',
                'sku',
                'model',
                'price',
                'quantity',
                'minimum_quantity',
                'stock_status_id',
                'short_description',
                'description',
                'images' => 'image',
                'bestselling',
                'enquirystatus',
                'status',
        ])
        ->where([
            'slug' => $this->request->query('slug'), //$this->request->data['slug'],
            'status' => 1
        ])->first();
        // pr($detail); die;
        if(!empty($detail)){
                $response = [
                        'status'=>true,
                        'code' => 200 ,
                        'message'=>'List Found',
                        'data' => [
                            'id' => $detail['id'],
                            'name' => $detail['name'],
                            'slug'=> $detail['slug'],
                            'sku'=> $detail['sku'],
                            'price'=> $detail['price'],
                            'model' => $detail['model'],
                            'description' => $detail['description'],
                            'short_description' => $detail['short_description'],
                            'compareAtPrice'=> null,
                            'images'=> [
                                Router::url('/timthumb.php?src=',true).Router::url('/img/uploads/products/', true).$detail['images'].'&w=700&h=700',
                            ],
                            'badges'=> '',
                            'rating'=> '4',
                            'reviews'=> '20',
                            'availability'=> 'in-stock',
                            'brand'=> $detail['model'],
                            'enquirystatus' => $detail['enquirystatus'],
                            'categories' => [],
                            'attributes' => [],
                            'customFields'=> [],
                        ]
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
        if(isset($this->request->data['detail'])) {
            $this->inquiries = TableRegistry::get('ContactManager.Inquiries');
            $inquiries = $this->inquiries->newEntity();
            $inquiries = $this->inquiries->patchEntity($inquiries, $this->request->data['detail']);
            
            if($this->inquiries->save($inquiries)) {
                $this->sendmessage($this->request->data['detail']);
                $response = ['status'=>true,'code' => 200 ,'message'=>'You enquiry has been successfully saved. we will contact  you shortly.','data' => $inquiries];
            }    
        }
        
        $this->response($response);
        
    }

    public function sendmessage($data = []) {
        // Account details
        $apiKey = urlencode('q8RMJy5S6xY-MN4lCzGX24tkDdkQNU1tcNcwAKb6eW');
        // Message details
        $numbers = urlencode('919928519150,91'.$data['mobile']);
        $sender = urlencode('TXTLCL');
        $message = rawurlencode('Hi '. $data['first_name'].',
        Thank you for interest in our product. our representative will call you shortly. 
            Team Ajayco.in
         ');
         
        // Prepare data for POST request
        $data = 'apikey=' . $apiKey . '&numbers=' . $numbers . "&sender=" . $sender . "&message=" . $message;
        // Send the GET request with cURL
        $ch = curl_init('https://api.textlocal.in/send/?' . $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);
        // Process your response here
        //echo $response;
    }

    public function createorder() {
        $response = [
            'staus' => false,
            'message' => 'Order Not created successfully',
            'code' => 404
        ];
        if(!empty($this->request->data) ) {
            $this->order = TableRegistry::get('Orders');
            $this->orderdetail = TableRegistry::get('OrderDetails');

            $entity = $this->order->newEntity();
            $entity->order_no = rand(1000,9999);
            $entity->order_amount = isset($this->request->data['price'])?$this->request->data['price']:'';
            $entity->status = '2';
            $entity->created = date('Y-m-d');
            $entity->modified = date('Y-m-d');
            if($this->order->save($entity)) {
                foreach($this->request->data['detail'] as $k=>$v) {
                    $details = $this->orderdetail->newEntity();
                    $details->order_id = $entity->id;
                    $details->product_name = $v['title'];
                    $details->product_image = $v['image'];
                    $details->qty = $v['qty'];
                    $details->price = $v['price'];
                    $details->status = '1';
                    $details->created = date('Y-m-d');
                    $details->modified = date('Y-m-d');
                    $this->orderdetail->save($details);            
                }
                $hash=hash('sha512', 'Tgjxsf1A|'.$this->request->data['txnid'].'|'.$this->request->data['price'].'|jenix|'.$this->request->data['userInfo']['first_name'].'|'.$this->request->data['userInfo']['email'].'|||||BOLT_KIT_PHP7||||||l4BBd6pDnc');

                $response = ['status'=>true,'code' => 200 ,'message'=>'You order has been successfully saved.','data' => $entity,'hash' => $hash];
            } else {
                pr($entity); die;
            }
        }
        
        $this->response($response);
    }

    public function getcontact() {
        $response = [
            'status' => true,
            'message' => 'List found',
            'code' => 200,
            'data' => [
                'mobile' => Configure::read('Setting.TELEPHONE'),
                'email' => Configure::read('Setting.ADMIN_EMAIL'),
                'address' => Configure::read('Setting.ADDRESS'),
                'openinghours' => Configure::read('Setting.opening_hours'),
                'comment' => Configure::read('Setting.CONTACT_US_TEXT'),
                'location' => Configure::read('Setting.location'),
            ]
        ];
        $this->response($response);
    }

    public function newsdetail($slug= '') {
        if(isset($this->request->query['slug'])){
            $news = TableRegistry::get('News')
                ->find()
                ->where(['status' => '1','slug'=>$this->request->query['slug']])
                ->first();
            $news['image'] = Router::url('/timthumb.php?src=', true).'/img/uploads/news/'.$news['image'].'&w=850&h=200';
        } else {
            $news = TableRegistry::get('News')
                    ->find()
                    ->where(['status' => '1'])
                    ->toArray();
            foreach($news as $k => $val) {
                $news[$k] = [
                    'image' => Router::url('/timthumb.php?src=', true).'/img/uploads/news/'.$val['image'].'&w=350&h=200',
                    'title' => $val['title'],
                    'slug' => $val['slug'],
                    'shot_desc' => $val['short_desc'],
                    'long_desc' => $val['long_desc'],
                    'date' => date('M d,Y',strtotime($val['created'])),
                ];
            }    
        }
        
        $response = [
            'status' => true,
            'message' => 'List found',
            'code' => 200,
            'data' => $news
        ];
        $this->response($response);
    }

    public function completeorder() {
        $response = [
            'staus' => false,
            'message' => 'Payment not accepted',
            'code' => 404
        ];
        if(!empty($this->request->data) ) {
            $this->order = TableRegistry::get('Orders');
            $order_detail = $this->order->get($this->request->data['order_id']);
            $order_detail->payment_id = $this->request->data['payment_id'];
            $order_detail->status = '1';
            if($this->order->save($order_detail)) {
                $response = ['status'=>true,'code' => 200 ,'message'=>'Payment has been accepted.'];   
            }
        }

        $this->response($response);
    }
    
}
