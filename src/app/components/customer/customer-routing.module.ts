import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

const routes: Routes = [
    {
        path: '',
        component: CustomerInfoComponent
    },
    {
        path: 'add-customer',
        component: AddCustomerComponent
    },
    {
        path: 'customer-info',
        component: CustomerInfoComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule {}
