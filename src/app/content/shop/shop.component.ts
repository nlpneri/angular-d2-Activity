import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  title;
  productName;
  subtitle;
  constructor(private _globalService: GlobalService) {
    this.title = 'Shopping Cart';
    this.subtitle = 'Shop Now!';
   }

  ngOnInit(): void {
    this._globalService.flagName.next('bg-dark');
    this.title = this._globalService.toUpperCase(this.title);
    this.subtitle = this._globalService.appSubTitle;

    this._globalService.subjectname.subscribe(
      (product: any) => {
      setTimeout(() => {
        this.productName = product;
      }, 2);
    });
  }
}
