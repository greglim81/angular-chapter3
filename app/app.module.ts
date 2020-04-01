import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarComponent }   from './star.component';
import { StarFillComponent }   from './starfill.component';
import { RatingComponent }   from './rating.component';

@NgModule({
  declarations: [
    AppComponent,StarComponent,StarFillComponent,RatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
