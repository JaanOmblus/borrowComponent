import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ComOneComponent } from '../com-one/com-one.component';
import { ComTwoComponent } from '../com-two/com-two.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ComOneComponent, ComTwoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
