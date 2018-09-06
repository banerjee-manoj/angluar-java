 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 import { AddcustomerComponent } from './addcustomer/addcustomer.component';
 import { HomeComponent } from './home/home.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { ShowAllCustomerComponent } from './show-all-customer/show-all-customer.component';
 
 
 const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'home' },
   {path: 'home', component : HomeComponent},
   { path: 'addCustomer', component: AddcustomerComponent },
   { path: 'searchCustomer', component: SearchCustomerComponent },
   { path: 'showAllCustomer', component: ShowAllCustomerComponent }
	   
   
 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }
 
 export const routingComponents = [AddcustomerComponent,HomeComponent];
