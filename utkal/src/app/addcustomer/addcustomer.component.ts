import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {Customer} from '../models/customer';
import {Address} from '../models/address';
import {CustomerService} from '../services/customer.service';



@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css'],
  providers: [CustomerService]
})
export class AddcustomerComponent implements OnInit {


  customer : Customer;
  address : Address[]=[];
 addressC : Address;

 constructor(public customerService : CustomerService) {
    this.customer = new Customer();
   this.addressC = new Address();
    this.addressC.address="object address";
    this.address.push(this.addressC);
    this.customer.customerAddressLst=this.address;
    console.log(this.customer.customerAddressLst);
  this.customer.customerName="Manoj Banerjee";
  this.customer.customerMobileNumber="8017990706";
  this.customer.customerType="Regular";
 // this.customer.address="Rajarhat";
 // this.customer.normalJarRate="100";
 // this.customer.coldJarRate="120";
//  this.customer.securityDeosit="500";
 // this.customer.startDate="2018-10-18";
  console.log("Add Customer constructor");
  console.log(this.customer);
  
   }

  ngOnInit() {
    console.log("on init...");

  }
  saveCustomer() {
    console.log("data from submit...");
  console.log(this.customer);
  
  this.customerService.saveCustomer(this.customer).subscribe(
    (  data => {console.log("return data from the service"); 
      console.log(data);
    console.log(data.text());
    this.customer = JSON.parse(data.text());
    console.log(this.customer.customerName);
    }),(error =>{console.log("Error.. occurred...");
})
    );
  };

}
