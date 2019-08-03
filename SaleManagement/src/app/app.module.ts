import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { MenubarModule } from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import { NavbarSearchComponent } from './top-bar/navbar-search/navbar-search.component';
import { NavbarComponent } from './top-bar/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { AreaChartComponent } from './dashboard/area-chart/area-chart.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ImportComponent } from './management/import/import.component';
import { ExportComponent } from './management/export/export.component';
import { WarehouseComponent } from './management/warehouse/warehouse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarSearchComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    OverviewComponent,
    AreaChartComponent,
    FooterComponent,
    ImportComponent,
    ExportComponent,
    WarehouseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputTextModule,
    DialogModule,
    ButtonModule, 
    MenubarModule,
    PanelMenuModule,
    TableModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent},
      { path: 'management/import', component: ImportComponent},
      { path: 'management/export', component: ExportComponent},
      { path: 'management/warehouse', component: WarehouseComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
