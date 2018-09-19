import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {NgbTypeahead}  from '@ng-bootstrap/ng-bootstrap';
import {CustomerService} from '../services/customer.service';
import { Customer} from '../models/customer';



@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css'],
  providers: [CustomerService]
})
export class SearchCustomerComponent implements OnInit {
  
  customeNames : String[]=[];
  customerList : Customer[];
  customerObj : Customer = new Customer();
  showSelected : boolean;
  //search : any;
  ngOnInit(){
   
  }

constructor(public customerService : CustomerService){
  this.showSelected =false;
  customerService.getUser().subscribe(
    (  data => {
   this.customerList = JSON.parse(data.text());
   this.customerList.forEach(obj => {
   this.customeNames.push(obj.customerName);
   });
    }),(error =>{console.log("Error.. occurred...");
})
    );
}

 

public customer: any;

search = (text$: Observable<string>) =>
text$.pipe(  
  map(term => term.length < 1 ? []
    : this.customeNames.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
);


  getCustomerDetails(){

    console.log("get customer details");
  this.customerObj  = this.customerList.find(x => x.customerName==this.customer);
 
 this.showSelected =true;
}

  
updateCustomer(){
console.log(this.customerObj);
  this.customerService.saveCustomer(this.customerObj).subscribe(
    (  data => { 
      
    this.customer = JSON.parse(data.text());
    this.customerService.getUser().subscribe(
      (  data => {
        
     this.customerList = JSON.parse(data.text());
     this.customerList.forEach(obj => {
     this.customeNames.push(obj.customerName);
     
     });
      }),(error =>{console.log("Error.. occurred...");
  })
      );;
    
    }),(error =>{console.log("Error.. occurred...");
})
    );    
   
    
}
    
    
deactivateCustomer(){
  this.customerObj.active="false";
 alert(this.customerObj.active);
 this.updateCustomer();
}

populateSearchBox(){
  this.search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 1 ? []
      : this.customeNames.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  );
}


}
