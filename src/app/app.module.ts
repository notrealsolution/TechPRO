import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IconosComponent } from './iconos/iconos.component';
import { SobreTechComponent } from './sobre-tech/sobre-tech.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconosComponent,
    SobreTechComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
