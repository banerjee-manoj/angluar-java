import { Injectable } from '@angular/core';
import {Http,Response,HttpModule} from '@angular/http';
import { Customer} from '../models/customer';
import { Address} from '../models/address';
import { map } from "rxjs/operators";
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
 

@Injectable()

export class CustomerService {

  constructor(private http : Http) { 
    console.log("customer Service constructor");
      }

  header : HttpHeaders;
  saveCustomer(customer : Customer)  {

return this.http.post("http://localhost:8081/saveCustomer",
customer);

  }

  getUser() {
    console.log("get User method...");
    console.log(this.http.
     get("http://localhost:8081/getAllCustomer").pipe(
     map((res:Response) => res.json())));
     return this.http.
     get("http://localhost:8081/getAllCustomer");
   }


}
