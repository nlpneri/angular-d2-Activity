import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Angular';
  subtitle = 'Angular Subtitle';
  colorflag = '';
  flag: any;

  constructor(private _globalService: GlobalService, private router: ActivatedRoute) { }

  ngOnInit(): void {


    console.log(this.router)

    this.title = this._globalService.toUpperCase(this._globalService.appTitle);
    this.subtitle = this._globalService.appSubTitle;
    this.flag =  this.colorflag;
    this.flag = this._globalService.flagName;

    this._globalService.subjectname.subscribe(
      (name: any) => {
        this.title = name || this._globalService.toUpperCase(this._globalService.appTitle);
      }
    )

    this._globalService.flagName.subscribe(
      (name: any) => {
        this.colorflag = name;
      }
    )
  }

}
