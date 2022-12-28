import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daftarmembership',
  templateUrl: './daftarmembership.page.html',
  styleUrls: ['./daftarmembership.page.scss'],
})
export class DaftarmembershipPage{

  constructor(private route: Router) { }

  getBack() {
    this.route.navigate(['/fasilitasmembership']);
  }

}
