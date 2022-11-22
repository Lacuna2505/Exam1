import basePage from "./BasePage";
import {faker} from '@faker-js/faker';

let user = {
  country: faker.address.country(),
  firstName: faker.name.firstName(),
  mobile: '2488451256',
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  postcode: '10200'
  
}

class AddNewAddressPage extends basePage{
    visit(){
        cy.log('**Open Add New Address Page**');
        cy.visit('/#/address/create')
    }

    addNewAddress(){
        return cy.get('[aria-label="Add a new address"]');
    }

    clickOnNewAddress(){
        this.addNewAddress().click();
    }
    
    getCountry(){
        return cy.get('#mat-input-3');
        
    }
    
    typeCountry(){
        this.getCountry().type(user.country);
     }


    getName(){
        return cy.get('#mat-input-4');
     }

     typeTextInNameField(){
        this.getName().type(user.firstName);
        }

    getMobile(){
        return cy.get('#mat-input-5');
        
    }

    typeMobile(){
        this.getMobile().type(user.mobile);
        }
    
    getZipCode(){
        return cy.get('#mat-input-6');
        
    }

    typeZipCode(){
        this.getZipCode().type(user.postcode);
        }

    getAddress(){
        return cy.get('#address');
     }

    typeAddress(){
        this.getAddress().type(user.address);
        }

    getCity(){
        return cy.get('#mat-input-8');
    }

    typeCity(){
        this.getCity().type(user.city);
    }

    getSubmitButton(){
        return cy.get('#submitButton');
    }

    clickOnSubmitButton(){
        this.getSubmitButton().click();
        }

    addAddressCheck1(){
            cy.url().should('include', '/#/address/select');
         }

    addAddressCheck2(){
            return cy.get('h1.ng-star-inserted');
          }

    submitNewAddress(){
            cy.log(`Submit New Address form`);

            this.addNewAddress().click();
      
            this.getCountry().type(user.country);
      
            this.getName().type(user.firstName);
      
            this.getMobile().type(user.mobile);
      
            this.getZipCode().type(user.postcode);
      
            this.getAddress().type(user.address);

            this.getCity().type(user.city);
      
            cy.log('Click Submit button')
            this.getSubmitButton().click();
          }
}
export default new AddNewAddressPage();
