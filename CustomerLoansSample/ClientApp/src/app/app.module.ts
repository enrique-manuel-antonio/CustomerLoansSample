import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerAdministrationComponent } from './customer-administration/customer-administration.component';
import { LoanAdministrationComponent } from './loan-administration/loan-administration.component';
import { CustomerLoansComponent } from './customer-loans/customer-loans.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CustomerRegistrationComponent,
    CustomerAdministrationComponent,
    LoanAdministrationComponent,
    CustomerLoansComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'customer-registration', component: CustomerRegistrationComponent },
      { path: 'customer-modification/:id', component: CustomerRegistrationComponent },
      { path: 'customer-administration', component: CustomerAdministrationComponent },
      { path: 'loan-administration', component: LoanAdministrationComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
