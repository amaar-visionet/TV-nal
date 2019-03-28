import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer';
import { AppSettings } from '../app-settings/app-settings'; 

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  //Get Customer Info
  public getCustomer(customer: Customer){
    return this.httpClient.post(AppSettings.getCustomerInfo,customer);
  }
}
