import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import {AppRoutingModule, routingComponents} from './app.router';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { ShowAllCustomerComponent } from './show-all-customer/show-all-customer.component';
import {HttpModule} from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders }  from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    ContainerComponent,
    FooterComponent,
    AddcustomerComponent,
    routingComponents,
    SearchCustomerComponent,
    ShowAllCustomerComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
