import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  selectedProduct: any;

  products = [
    {
      id: 1,
      name: 'Intel',
      description: 'i5-7200K',
      price: 'P12,000',
      image: 'https://www.notebookcheck.net/fileadmin/Notebooks/Huawei/P_smart_Pro/processor_badge_intel_icon_1x1.png.rendition.intel.web.550.550.png'
    },
    {
      id: 2,
      name: 'AMD',
      description: 'r-5 3500',
      price: 'P18,000',
      image: 'https://gnd-tech.com/content/2019/01/amd-ryzen-3-matisse.jpg'
    }
  ];

  constructor(private router: ActivatedRoute, private _globalService: GlobalService ) {
    console.log(this.router)

    this.router.params.subscribe((params: Params) => {
      const id = params.id;

      const selected = this.products.filter((product) =>{
        return +product.id === +id;
      });

      if(selected.length > 0)
      {
        this.selectedProduct = selected[0];
        this._globalService.subjectname.next(this.selectedProduct.name)
      }
    });
   }


  ngOnDestroy(): void {
    this._globalService.subjectname.next('');
  }

  ngOnInit(): void {

  }

}
