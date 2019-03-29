import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddCustomerModule } from './add-customer/add-customer.module';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AddContactPersonComponent } from './shared/add-contact-person/add-contact-person.component';
// const routes = CustomerRoutingModule;

@NgModule({
    imports: [CustomerRoutingModule,FormsModule,ReactiveFormsModule],
    exports: [AddCustomerModule],
    declarations: [CustomerInfoComponent]
})
export class CustomerModule {}
