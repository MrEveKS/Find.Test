import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  public findEmmit = new Observable<string>();
  public findControl: FormControl;

  constructor() {
    this.findControl = new FormControl('');
    this.findEmmit = this.findControl.valueChanges;
  }

}
