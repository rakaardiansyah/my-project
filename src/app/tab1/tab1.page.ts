import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/tab1/category-item/models/category.models'


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
        image: '../../assets/icon-kategori/icon-haji.png',
        active: true,
      },
      {
        id: 2,
        label: 'Umrah',
        image: '../../assets/icon-kategori/icon-umrah.png',
        active: false,
      },
      {
        id: 3,
        label: 'Qurban',
        image: '../../assets/icon-kategori/icon-qurban2.png',
        active: false,
      },
      {
        id: 4,
        label: 'Cicil Emas',
        image: '../../assets/icon-kategori/cicil-emas.png',
        active: false,
      },
      {
        id: 5,
        label: 'Gadai Emas',
        image: '../../assets/icon-kategori/gadai-emas4.png',
        active: false,
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
