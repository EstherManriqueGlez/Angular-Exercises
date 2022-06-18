import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parentchild';
  childState = false;


  onClick() {
    this.childState = !this.childState;
  }
}
