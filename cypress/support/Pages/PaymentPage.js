import basePage from "./BasePage";
import {faker} from '@faker-js/faker';

let user = {
  firstName: faker.name.firstName(),
  cardNumber: '1234654896511236'
  
  
}

class PaymentPage extends basePage{
    visit(){
        cy.log('**Open My Payment Page**');
        cy.visit('/#/payment/shop')
    }

    getExistingCard(){
      return cy.get('.mat-radio-inner-circle').eq(0);
    }

    clickOnExistingCard(){
      this.getExistingCard().click();
    }

    chooseExistingCard(){
      this.getExistingCard().click();
      this.getContinueButtonCreditCart().click();
    }

    getAddNewCart(){
        return cy.get('app-payment-method > div > div > mat-expansion-panel');
    }
    
    clickOnAddNewCart(){
       this.getAddNewCart().click();
     }

     getName(){
      return cy.get('.mat-form-field-infix [type="text"]').eq(1);
        
    }

    typeName(){
        this.getName().type(user.firstName);
     }

    getCardNumber(){
      return cy.get('.mat-form-field-infix [type="number"]');
        
    }
    
    typeCardNumber(){
        this.getCardNumber().type(user.cardNumber);
     }

    getExpiryMonth(){
      return cy.get('select.mat-input-element').eq(0);
      
    }

    clickOnExpiryMonth(){
      this.getExpiryMonth().select('5');
     }

     getExpiryYear(){
      return cy.get('select.mat-input-element').eq(1);
     
    }

    clickOnExpiryYear(){
        this.getExpiryYear().select('2081');
    }

    getSubmitButton(){
        return cy.get('#submitButton')
     }

     clickSubmitButton(){
        this.getSubmitButton().click();
     }

     choosetheCreditCard(){
        return cy.get('.mat-radio-inner-circle').eq(1);
     }

     clickonTheCreditCard(){
        this.choosetheCreditCard().click();
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
        return cy.get('.order-summary').should('contain', 'Order Summary');
     }

     getFinishOrder(){
      return cy.get('[aria-label="Complete your purchase"]');
     }

     clickOnFinishOrder(){
      this.getFinishOrder().click();
     }

     finishCheck1(){
      cy.url().should('include', '/#/order-completion');
     }

     finishCheck2(){
      return cy.get('.confirmation').should('contain', 'Thank you for your purchase!');
     }

     finishTheOrder(){
      cy.log(`Finish the Order`);
      this.getFinishOrder().click();
      cy.url().should('include', '/#/order-completion');
      return cy.get('.confirmation').should('contain', 'Thank you for your purchase!');
     }


     
     creditcardCreation(){
        cy.log(`Create credit card`);
        
        this.getAddNewCart().click();
        this.getName().type(user.firstName);
        this.getCardNumber().type(user.cardNumber);
        
        this.getExpiryMonth().select('5');
        this.getExpiryYear().select('2081');
        
        this.getSubmitButton().click();
        this.choosetheCreditCard().click();
        this.getContinueButtonCreditCart().click();
     }

     
}



export default new PaymentPage();