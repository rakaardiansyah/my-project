import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/tab1/models/category.models'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  categories: Category[] = [];

  constructor() {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'Haji',
        image: 'asset/icon-kategori/icon-haji.png',
        active: true,
      },
      {
        id: 2,
        label: 'Umrah',
        image: 'asset/icon-kategori/icon/icon-umrah.png',
        active: true,
      },
      {
        id: 3,
        label: 'Qurban',
        image: 'asset/icon-kategori/icon-qurban2.png',
        active: true,
      },
      {
        id: 4,
        label: 'Cicil Emas',
        image: 'asset/icon-kategori/cicil-emas.png',
        active: true,
      },
      {
        id: 5,
        label: 'Gadai Emas',
        image: 'asset/icon-kategori/gadai-emas4.png',
        active: true,
      },
    ]
  }



  async presentLoading() {
    // const loading = await this.loadingController.create({
    //   message: "Please Wait ...",
    // });
    // await loading.present();
  }

}
