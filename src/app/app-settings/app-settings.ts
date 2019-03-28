import { environment } from '../environments/environment';

export class AppSettings {

    //Get Customer Data Single Endpoint
    public static getCustomerInfo = environment.apiBaseUrl+"Customer/GetCustomer";

    //Create Customer Endpoint
    public static createCustomer = environment.apiBaseUrl+"customer/CreateCustomer";
    
    //Update Customer Endpoint 
    public static updateCustomer = environment.apiBaseUrl+"Customer/UpdateCustomer";
    
    //Create Contact Person Endpoint
    public static createContactPerson = environment.apiBaseUrl+"ContactPerson/CreateContactPerson";
    
    //Get Contact Person Endpoint 
    public static getContactPerson = environment.apiBaseUrl+"ContactPerson/GetContactPerson";
    
    //Update Contact Person Endpoint
    public static updateContactPerson = environment.apiBaseUrl+"ContactPerson/UpdateContactPerson";
    
    //Create Merged Card Endpoint
    public static createCartMerged = environment.apiBaseUrl+"Cart/CreateMergedCart";
 }