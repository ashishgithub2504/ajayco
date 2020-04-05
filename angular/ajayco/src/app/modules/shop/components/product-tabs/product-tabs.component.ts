//import { Component, Input } from '@angular/core';
import { Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ProductFeaturesSection} from '../../../../shared/interfaces/product';
import { specification } from '../../../../../data/shop-product-spec';
import { reviews } from '../../../../../data/shop-product-reviews';
import { Review } from '../../../../shared/interfaces/review';
import { Product } from '../../../../shared/interfaces/product';
@Component({
    selector: 'app-product-tabs',
    templateUrl: './product-tabs.component.html',
    styleUrls: ['./product-tabs.component.scss']
})
export class ProductTabsComponent {
    private dataProduct: Product;
    @Input() withSidebar = false;
    @Input() tab: 'description'|'specification'|'reviews' = 'description';
    @Input() set product(value: Product) {
        this.dataProduct = value;
    }
    get product(): Product {
        return this.dataProduct;
    }

    specification: ProductFeaturesSection[] = specification;
    reviews: Review[] = reviews;

    constructor() { }
}
