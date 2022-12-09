import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(
    public router : Router
  ) { }

  profilesaya() {
    this.router.navigateByUrl("/profilesaya");
  }

  daftartransaksi() {
    this.router.navigateByUrl("/daftartransaksi");
  }

  referralfee() {
    this.router.navigateByUrl("/referralfee");
  }

  fasilitasmembership() {
    this.router.navigateByUrl("/fasilitasmembership");
  }

}
