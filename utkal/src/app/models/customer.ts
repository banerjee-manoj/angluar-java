import { Address } from '../models/address';

export class Customer {

    customerName : String;
    customerMobileNumber : String;
    customerType : String;
  //  address : String;
  securityDeposit : String;
  returnSecurityDeposit : String;
    normalJarRate : String;
    coldJarRate : String;
    activattionDate : String;
    deActivattionDate : String;
    active : String = 'true';
    customerAddressLst : Address[];

}
