import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
//import { DropdownModule } from 'angular-tabs-component';
//import { AngularDropdownModule } from 'angular-dropdown';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { SimpledropdownComponent } from './components/simpledropdown/simpledropdown.component';
import { SmallTileComponent } from './components/small-tile/small-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimpledropdownComponent,
    SmallTileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SelectDropDownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
