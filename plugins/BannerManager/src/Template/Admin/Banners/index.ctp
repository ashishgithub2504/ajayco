<?php
/**
 * @var \App\View\AppView $this
 * @var \Cake\Datasource\EntityInterface[]|\Cake\Collection\CollectionInterface $banners
 */

?>
<section class="content-header">
    <h1>
<?= __('Manage Banner') ?>  
        <small><?php echo __('Here you can manage the banners'); ?></small>
    </h1>
<?= $this->element('breadcrumb') ?>
</section>
<section class="content" data-table="banners">   
    <div class="row banners">
        <div class="col-md-12">
            <div class="box box-info">
                <h3></h3>

                <div class="box-header">
                    <h3 class="box-title"><span class="caption-subject font-green bold uppercase">List <?= __('Banners') ?></span></h3>
                    <div class="box-tools">
<?= $this->Html->link("<i class=\"fa fa-plus\"></i> " . __('New Banner'), ["action" => "add"], ["class" => "btn btn-success btn-flat", "escape" => false]) ?>
                    </div>
                </div><!-- /.box-header -->

                <div class="box-body table-responsive">    
                    <table class="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th scope="col"><?= $this->Paginator->sort('id', 'Banner ID') ?></th>
                                <th scope="col"><?= $this->Paginator->sort('title') ?></th>
                                <th scope="col"><?= $this->Paginator->sort('status') ?></th>
                                <th scope="col"><?= $this->Paginator->sort('sort_order') ?></th>
                                <th scope="col"><?= $this->Paginator->sort('created') ?></th>
                                <th scope="col" class="actions"><?= __('Actions') ?></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            if (!empty($banners->toArray())):
                                $i = ((($this->Paginator->param('page') - 1) * $this->Paginator->param('perPage')) + 1);
                                foreach ($banners as $banner):

                                    ?>
                                    <tr>
                                        <td><?= $this->Number->format($i) ?>.</td>
                                        <td>#<?= $banner->id ?></td>
                                        <td><?= h($banner->title) ?></td>
                                        <td>
                                            <?= $this->Form->checkbox('status', ['checked' => $banner->status == 1 ? true : false, 'class' => 'switch-status change-request', 'data-id' => $banner->id, 'data-field' => 'status', 'data-url' => $this->Url->build(['action' => 'changeFlag']), 'data-size' => 'mini']); ?>

                                        </td>
                                        <td><?= $this->Number->format($banner->sort_order) ?></td>
                                        <td>
        <?php
        if ($banner->created != "") {
            echo $banner->created->format($ConfigSettings['ADMIN_DATE_TIME_FORMAT']);
        }

        ?>
                                        </td>
                                        <td class="actions">
                                    <?= $this->Html->link("<i class=\"fa fa-fw fa-eye\"></i>", ['action' => 'view', $banner->id], ['class' => 'btn btn-warning btn-sm btn-flat', 'escape' => false, 'data-toggle' => 'tooltip', 'alt' => __('View banner'), 'title' => __('View banner')]) ?>
                                    <?= $this->Html->link("<i class=\"fa fa-edit\"></i>", ['action' => 'add', $banner->id], ['class' => 'btn btn-primary btn-sm btn-flat', 'escape' => false, 'data-toggle' => 'tooltip', 'alt' => __('Edit banner'), 'title' => __('Edit banner')]) ?>
                                    <?= $this->Form->postLink("<i class=\"fa fa-trash\"></i>", ['action' => 'delete', $banner->id], ['onClick' => 'confirmDelete(this, \'' . $banner->id . '\')', 'class' => 'btn btn-danger btn-sm btn-flat', 'data-toggle' => 'tooltip', 'escape' => false, 'alt' => __('Delete banner'), 'title' => __('Delete banner')]) ?>
                                        </td>
                                    </tr>
        <?php $i++;
    endforeach; ?>
<?php else: ?>
                                <tr> <td colspan='7' align='center' class="tbodyNotFound" style="text-align:center;"> <strong>Record Not Available</strong> </td> </tr>
                    <?php endif; ?>
                        </tbody>
                    </table>

                </div>            

                <div class="box-footer clearfix">
<?php echo $this->element('pagination'); ?>
                </div>            

            </div>
        </div>
    </div>
</section>