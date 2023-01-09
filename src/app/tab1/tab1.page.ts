import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/tab1/category-item/models/category.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  categories: Category[] = [];

  constructor(
    public router : Router
  ) { }

  ngOnInit() {
    this.getCategories();
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
