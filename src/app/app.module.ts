import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
//import { DropdownModule } from 'angular-tabs-component';
//import { AngularDropdownModule } from 'angular-dropdown';
import { SelectDropDownModule } from "ngx-select-dropdown";
import { SimpledropdownComponent } from "./components/simpledropdown/simpledropdown.component";
import { SmallTileComponent } from "./components/small-tile/small-tile.component";
import { ErrorDetailsComponent } from "./components/error-details/error-details.component";
import { ErrorDetailsHeaderComponent } from "./components/error-details-header/error-details-header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { MultiselectDropdownComponent } from "./components/multiselect-dropdown/multiselect-dropdown.component";
import { BigTileComponentComponent } from "./components/big-tile-component/big-tile-component.component";
import { TableComponentComponent } from "./components/table-component/table-component.component";
import { ExecutiveSummaryComponent } from "./components/executive-summary/executive-summary.component";
import { ErrorDetailsGridComponent } from "./components/error-details-grid/error-details-grid.component";
import { NzTableModule } from "ng-zorro-antd/table";
import { DqScoreGraphComponent } from './components/dq-score-graph/dq-score-graph.component';
import { ErrorDetailsMetricGridComponent } from './components/error-details-metric-grid/error-details-metric-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimpledropdownComponent,
    SmallTileComponent,
    ErrorDetailsComponent,
    ErrorDetailsHeaderComponent,
    MultiselectDropdownComponent,
    BigTileComponentComponent,
    TableComponentComponent,
    ExecutiveSummaryComponent,
    ErrorDetailsGridComponent,
    DqScoreGraphComponent,
    ErrorDetailsMetricGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectDropDownModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NzTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
