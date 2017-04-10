import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `    
      <products></products>
    `
})
export class AppComponent {
    title = "hello";

    onClick($event){
      console.log("Clicked",$event)
    }
}