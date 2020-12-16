import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  colorflag = '';
  flag: any;
  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this._globalService.flagName.subscribe(
      (name: any) => {
        this.colorflag = name;
      }
    )
  }

}
