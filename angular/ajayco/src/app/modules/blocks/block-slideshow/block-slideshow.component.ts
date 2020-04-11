import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DirectionService } from '../../../shared/services/direction.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-block-slideshow',
    templateUrl: './block-slideshow.component.html',
    styleUrls: ['./block-slideshow.component.scss']
})
export class BlockSlideshowComponent {
    @Input() withDepartments = false;
    APIURL = 'http://localhost:8765/api/webservice/';
    // APIURL = 'http://13.233.91.120/api/webservice/';
    result : any;
    options = {
        nav: false,
        dots: true,
        loop: true,
        responsive: {
            0: {items: 1}
        },
        rtl: this.direction.isRTL()
    };

    slides = [
        // {
        //     title: 'Big choice of<br>Plumbing products',
        //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
        //     image_classic: 'assets/images/slides/slide-1.jpg',
        //     image_full: 'assets/images/slides/slide-1-full.jpg',
        //     image_mobile: 'assets/images/slides/slide-1-mobile.jpg'
        // },
        // {
        //     title: 'Screwdrivers<br>Professional Tools',
        //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
        //     image_classic: 'assets/images/slides/slide-2.jpg',
        //     image_full: 'assets/images/slides/slide-2-full.jpg',
        //     image_mobile: 'assets/images/slides/slide-2-mobile.jpg'
        // },
        // {
        //     title: 'One more<br>Unique header',
        //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
        //     image_classic: 'assets/images/slides/slide-3.jpg',
        //     image_full: 'assets/images/slides/slide-3-full.jpg',
        //     image_mobile: 'assets/images/slides/slide-3-mobile.jpg'
        // }
    ];

    constructor(
        public sanitizer: DomSanitizer,
        private http:HttpClient,
        private direction: DirectionService
    ) { 
        this.apicall();
    }

    apicall() {
        this.http
        .get(this.APIURL+`index`)
        .subscribe((response: any) => {
            this.result = response.data;
            this.slides = response.data.banner_images;
        });
        
    }
}
