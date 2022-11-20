import basePage from "./BasePage";
import {faker} from '@faker-js/faker';

let user = {
  firstName: faker.name.firstName(),
  cardNumber: faker.finance.creditCardNumber()
  
  
}

class PaymentPage extends basePage{
    visit(){
        cy.log('**Open My Payment Page**');
        cy.visit('/#/payment/shop')
    }

    getAddNewCart(){
        return cy.get('.mat-expansion-panel-header-description.ng-tns-c150-30');
    }
    
    clickOnAddNewCart(){
       this.getAddNewCart().click();
     }

     getName(){
        return cy.get('#mat-input-22');
        
    }

    typeName(){
        this.getName().type(user.firstName);
     }

    getCardNumber(){
        return cy.get('#mat-input-23');
        
    }
    
    typeCardNumber(){
        this.getCardNumber().type(user.cardNumber);
     }

    getExpiryMonth(){
        return cy.get('#mat-input-24') ;
    }

    clickOnExpiryMonth(){
        this.getExpiryMonth().click();
     }

     chooseExpiryMonth(){
        return cy.get('[value="5"]');
     }

     clickOnTheExpiryMonth(){
        this.chooseExpiryMonth().click();
     }

     getExpiryYear(){
        return cy.get('#mat-input-25') ;
    }

    clickOnExpiryYear(){
        this.getExpiryYear().click();
     }

     chooseExpiryYear(){
        return cy.get('[value="2081"]');
     }

     clickOnTheExpiryYear(){
        this.chooseExpiryYear().click();
     }

     getSubmitButton(){
        return cy.get('#submitButton')
     }

     clickSubmitButton(){
        this.getSubmitButton().click();
     }

     choosetheCreditCard(){
        return cy.get('#mat-radio-47-input');
     }

     clickonTheCreditCard(){
        this.choosetheCreditCard().check();
     }

     getContinueButtonCreditCart(){
        return cy.get('[aria-label="Proceed to review"]')
     }

     clickOnTheContinueButton(){
        this.getContinueButtonCreditCart().click();
     }

     paymentCheck1(){
        cy.url().should('include', '/#/order-summary');
     }

     paymentCheck2(){
        return cy.get('.order-summary').should('include', 'Order Summary');
     }


     
     creditcardCreation(){
        cy.log(`Create credit card`);
        
        this.getAddNewCart().click();
        this.getName().type(user.firstName);
        this.getCardNumber().type(user.cardNumber);
        this.getExpiryMonth().click();
        this.getExpiryYear().click();
        this.getSubmitButton().click();
        this.choosetheCreditCard().check();
        this.getContinueButtonCreditCart().click();
     }

     
}



export default new PaymentPage();