<?php
namespace CatalogManager\Model\Entity;

use Cake\ORM\Entity;

/**
 * RelatedProduct Entity
 *
 * @property int $id
 * @property int $product_id
 * @property int $related_id
 *
 * @property \App\Model\Entity\Product $product
 * @property \App\Model\Entity\Related $related
 */
class RelatedProduct extends Entity
{

    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        '*' => true,
        'id' => false
    ];
}
