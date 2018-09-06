import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {NgbTypeahead}  from '@ng-bootstrap/ng-bootstrap';
import {CustomerService} from '../services/customer.service';
import { Customer} from '../models/customer';
const states1 = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css'],
  providers: [CustomerService]
})
export class SearchCustomerComponent implements OnInit {
  
  states : String[]=[];
  customerList : Customer[];

  ngOnInit(){
   
  }

constructor(public customerService : CustomerService){
  customerService.getUser().subscribe(
    (  data => {
      
   this.customerList = JSON.parse(data.text());
   this.customerList.forEach(obj => {
   this.states.push(obj.customerName);
   });
    }),(error =>{console.log("Error.. occurred...");
})
    );;
}

  

public model: any;
  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 1 ? []
      : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )

  
  
    
    


}
