import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-one-column',
  templateUrl: './one-column.component.html',
  styleUrls: ['./one-column.component.css']
})
export class OneColumnComponent implements OnInit {

  constructor(private _globalServices: GlobalService) { }

  ngOnInit(): void {

  }

}
