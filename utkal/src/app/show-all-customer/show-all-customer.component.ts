import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';
import { Customer} from '../models/customer';

@Component({
  selector: 'app-show-all-customer',
  templateUrl: './show-all-customer.component.html',
  styleUrls: ['./show-all-customer.component.css'],
  providers : [CustomerService]
})
export class ShowAllCustomerComponent implements OnInit {

  customeNames : String[]=[];
  customerList : Customer[];
  customerObj : Customer = new Customer();

  constructor(public customerService : CustomerService){



  }

  ngOnInit() {
  }
  getAllCustomer(){

    console.log("get All Customer clicked...");
    this.customerService.getUser().subscribe(
      (  data => {
        
     this.customerList = JSON.parse(data.text());
     this.customerList.forEach(obj => {
     this.customeNames.push(obj.customerName);
     });
      }),(error =>{console.log("Error.. occurred...");
  })
      );;
  }
}
