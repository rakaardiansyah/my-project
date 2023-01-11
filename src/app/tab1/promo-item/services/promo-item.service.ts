import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromoItemService {

  items: any[] = [
    {
      id: 1,
      name: 'Umrah RHD',
      price: 15000,
      category: 'MURAH BANGET',
      img: 'assets/image-thumnails/Untitled-1.jpg',
    },
    {
      id: 2,
      name: 'Umrah DWW',
      price: 10000,
      category: 'MURAH NICH',
      img: 'assets/image-thumnails/Untitled-2.jpg'
    },
    {
      id: 3,
      name: 'Umrah JSD',
      price: 12000,
      category: 'MURAH NICH',
      img: 'assets/image-thumnails/Untitled-5.jpg'
    },
    {
      id: 4,
      name: 'Umrah GHA',
      price: 12000,
      category: 'MURAHH',
      img: 'assets/image-thumnails/Untitled-5.jpg'
    },
    {
      id: 5,
      name: 'Umrah DGH',
      price: 12000,
      category: 'MURAH AJA',
      img: 'assets/image-thumnails/Untitled-5.jpg'
    }
    /*
      id
      category
      img
      seat
      icon
      title
      desc
      ket1
      ket2
      price
    */
  ]

  constructor() { }
}
