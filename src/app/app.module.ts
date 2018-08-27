// 核心原件
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routesDef } from './routes.def';

//
import { MatMenuModule } from '@angular/material';

// igniteui控制項
import {
  IgxLayoutModule,
  IgxNavigationDrawerModule,
  IgxToggleModule } from 'igniteui-angular';

// 頁面Component
import { AppComponent } from './app.component';
import { NavigationComponent } from './page/shared/navigation/navigation.component';
import { SidebarComponent } from './page/shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './page/shared/breadcrumb/breadcrumb.component';
import { DashbordComponent } from './page/dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidebarComponent,
    BreadcrumbComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,

    MatMenuModule,

    IgxLayoutModule,
    IgxNavigationDrawerModule,
    IgxToggleModule,
    HttpClientModule,
    RouterModule.forRoot(routesDef)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
