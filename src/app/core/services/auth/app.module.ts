import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpinterceptorService } from './interceptors/httpinterceptor.service';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer'
import { DatePipe } from '@angular/common';
import { Chart } from 'node_modules/chart.js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PubliclayoutComponent } from './modules/public/shared/publiclayout.component';
import { AdminlayoutComponent } from './modules/admin/shared/adminlayout.component';
import { UserRoutingModule } from './modules/user/user-routing.module';
import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { SupervisorRoutingModule } from './modules/supervisor/supervisor-routing.module';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    UserRoutingModule,
    AdminRoutingModule,
    SupervisorRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule,
    DataTablesModule
  
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
  

})
export class AppModule { }
