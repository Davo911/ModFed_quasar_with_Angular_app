import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestNGComponentComponent } from './test-ng-component/test-ng-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestNGComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
