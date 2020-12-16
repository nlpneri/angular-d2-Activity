import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

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

  constructor() { }



  ngOnInit(): void {
  }

}
