import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCustomerComponent } from './add-customer.component';
import { AddContactPersonComponent } from '../shared/add-contact-person/add-contact-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule,FormsModule,ReactiveFormsModule],
    declarations: [AddCustomerComponent,AddContactPersonComponent]
})
export class AddCustomerModule {}
