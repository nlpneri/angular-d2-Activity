import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  appTitle = 'Title from Service';
  appSubTitle = 'Subtitle from Service';
  subjectname = new Subject;
  flagName = new Subject;

  constructor() { }

  toUpperCase(text: any) : any{
    return text.toUpperCase();
  }
}
