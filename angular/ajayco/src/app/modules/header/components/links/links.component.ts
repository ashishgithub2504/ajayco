import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { navigation } from '../../../../../data/header-navigation';
import { manunavigation } from '../../../../../data/menu-navigation';
import { NavigationLink } from '../../../../shared/interfaces/navigation-link';
import { DirectionService } from '../../../../shared/services/direction.service';
import { ShopService } from '../../../../shared/api/shop.service';
import { async } from 'q';
@Component({
    selector: 'app-header-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent {
    isLoggedIn$: Observable<boolean>;
    items: NavigationLink[];
    menuitems: NavigationLink[];
    hoveredItem: NavigationLink = null;

    constructor(
        private direction: DirectionService,
        private ShopService: ShopService
    ) {}
    loginValue: any;
    ngOnInit() {
        this.isLoggedIn$ = this.ShopService.isLoggedIn; // {2}
        this.isLoggedIn$.subscribe(value => this.loginValue = value);
        // console.log(this.latestValue);
        if(localStorage.hasOwnProperty('USERINFO')) {
            this.loginValue = true;
        }
        this.items = navigation;    
        this.menuitems = manunavigation;
    }

    onItemMouseEnter(item: NavigationLink, event: MouseEvent): void {
        this.hoveredItem = item;
        
        if (!(event.target instanceof HTMLElement)) {
            return;
        }

        const element: HTMLElement = event.target;
        const megamenu = element.querySelector('.nav-links__megamenu') as HTMLElement;

        if (!megamenu) {
            return;
        }

        const container = megamenu.offsetParent;
        const containerWidth = container.getBoundingClientRect().width;
        const megamenuWidth = megamenu.getBoundingClientRect().width;

        if (this.direction.isRTL()) {
            const itemPosition = containerWidth - (element.offsetLeft + element.offsetWidth);
            const megamenuPosition = Math.round(Math.min(itemPosition, containerWidth - megamenuWidth));

            megamenu.style.right = megamenuPosition + 'px';
        } else {
            const itemPosition = element.offsetLeft;
            const megamenuPosition = Math.round(Math.min(itemPosition, containerWidth - megamenuWidth));

            megamenu.style.left = megamenuPosition + 'px';
        }
    }

    onItemMouseLeave(item: NavigationLink): void {
        if (this.hoveredItem === item) {
            this.hoveredItem = null;
        }
    }

    onSubItemClick(): void {
        this.hoveredItem = null;
    }
}
