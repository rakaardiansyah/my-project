import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/tab1/category-item/models/category.models';
import { Router } from '@angular/router';
import { PromoItemService } from 'src/app/tab1/promo-item/services/promo-item.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  //KATEGORI
  categories: Category[] = [];

  //ITEM PROMO
  slideOpts = {
    slidesPerView: 2.2,
  };
  slideOpts1 = {
    slidePerView: 1.3,
  };
  promoItems: any[] = [];
  featuredItems: any[] = [];

  constructor(
    public router: Router,
    public promoItemService: PromoItemService) { }

  ngOnInit() {
    this.getCategories();
    this.promoItems = this.promoItemService.items;
  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'Haji',
        image: '../../assets/icon-kategori/icon-haji.png',
        active: false,
        path: '/',
      },
      {
        id: 2,
        label: 'Umrah',
        image: '../../assets/icon-kategori/icon-umrah.png',
        active: false,
        path: '/',
      },
      {
        id: 3,
        label: 'Qurban',
        image: '../../assets/icon-kategori/icon-qurban2.png',
        active: false,
        path: '/',
      },
      {
        id: 4,
        label: 'Cicil Emas',
        image: '../../assets/icon-kategori/cicil-emas.png',
        active: false,
        path: 'tab1/cicilemas',
      },
      {
        id: 5,
        label: 'Gadai Emas',
        image: '../../assets/icon-kategori/gadai-emas4.png',
        active: false,
        path: 'gadaiemas',
      },
    ]
  }

  cicilEmas() {
    this.router.navigateByUrl("/cicilemas");
  }

  gadaiEmas() {
    this.router.navigateByUrl("/gadaiemas");
  }

  async presentLoading() {
    // const loading = await this.loadingController.create({
    //   message: "Please Wait ...",
    // });
    // await loading.present();
  }

}
