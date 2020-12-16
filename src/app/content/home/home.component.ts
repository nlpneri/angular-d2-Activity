import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  status = '';

  constructor(private _globalServices: GlobalService) { }

  ngOnInit(): void {
    this._globalServices.flagName.next('bg-dark');
  }

  ngOnDestroy(): void {
    this._globalServices.flagName.next('bg-dark');
  }

  onClick()
  {
    this._globalServices.flagName.next('bg-' + (this.status === '' ? 'dark' :  this.status));
  }



}
