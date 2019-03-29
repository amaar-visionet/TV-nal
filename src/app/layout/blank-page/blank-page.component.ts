import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    customerInfo: any = "";

    getCustomerObj: any = 
          {
          "customerId":"20002414",
          "useMapping":false, 
          "searchLocation": 2
          };

    constructor(private customerService: CustomerService) {}

    ngOnInit() {

        
        this.customerService.getCustomer(this.getCustomerObj).subscribe((res)=>{
            this.customerInfo = res;
            console.log(this.customerInfo.CustomerInfo);
        });
    }

    createCustomerForm(form){
        console.log(form.value);
    }
}
