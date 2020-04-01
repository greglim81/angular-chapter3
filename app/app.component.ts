import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<rating></rating>
  `
})
export class AppComponent {
  onClickMe($event){
    console.log("Clicked",$event)
  }
}
