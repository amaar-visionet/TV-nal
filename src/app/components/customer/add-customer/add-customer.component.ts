import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
// import { FormGroup, FormControl,FormBuilder  } from '@angular/forms';
import { FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
    customerInfo: any = "";
    
    addCustomerJSON: any = "";
    addCustomerForm = new FormGroup({
        customerName: new FormControl(''),
        customerEmail: new FormControl(''),
        customerPhone: new FormControl(''),
        customerType: new FormControl(''),
        address: new FormGroup({
            addressName: new FormControl(''),
            addressStreet: new FormControl(''),
            addressCity: new FormControl(''),
            addressState: new FormControl(''),
            addressPhone: new FormControl('')
        })
      });
      
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

    createCustomerForm(){
        console.warn(this.addCustomerForm.value);
    }

    onSubmit(): void {
        console.log(this.addCustomerForm.value);
        console.log(this.addCustomerForm.value.customerPhone);  
        this.addCustomerJSON = {
                "useMapping":false,
                "customer":{
                 "Phone": this.addCustomerForm.value.customerPhone,
                 "Email": this.addCustomerForm.value.customerEmail,
                 "Name": this.addCustomerForm.value.customerName,
                 "FirstName": "",
                 "MiddleName": "",
                 "LastName": "",
                 "VatNumber": "",
                 "Language" : "en-us",
                 "CustomerType": this.addCustomerForm.value.customerType,
                 "IdentificationNumber": "test",
                 "Addresses": [{
                       "Name": this.addCustomerForm.value.address.addressName,
                       "Street": this.addCustomerForm.value.address.addressStreet,
                       "City": this.addCustomerForm.value.address.addressCity,
                       "ZipCode": "2595",
                       "State": this.addCustomerForm.value.address.addressState,
                       "ThreeLetterISORegionName": "NLD",
                       "Phone": this.addCustomerForm.value.address.addressPhone,
                       "AddressType": "Business",
                       "IsPrimary": true
                     }],
                   "Image": null,
                   "EntityName": null,
                   "ExtensionData": null,
                   "ExtensionProperties": [],
                   "Item": null,
                   "EcomCustomerId": "20010191271",
                   "SLBirthMonth": null,
                   "CustomerAddresses": null,
                   "IsAsyncCustomer": false,
                   "Attributes":[
                    {
                       "AttributeValue":{"BooleanValue":true},
                       "Name":"TMVSanctionFlag"
                    },
                    {
                       "AttributeValue":{"BooleanValue":true},
                       "Name":"TMVIsDuplicateUser"
                    },
                    {
                       "AttributeValue":{"StringValue":"2000214"},
                       "Name":"TMVDuplicateCustomerAccountNumber"
                    },
                    {
                       "AttributeValue":{"StringValue":"Red"},
                       "Name":"TMVSanctionStatus"
                    }
                 ]
               }
           
        };

        console.log(this.addCustomerJSON);
        this.customerService.addCustomer(this.addCustomerJSON).subscribe((res)=>{
            // this.customerInfo = res;
            console.log(res);
        });
    }
}
