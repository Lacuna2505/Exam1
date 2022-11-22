import basePage from "./BasePage";

class SelectAdressPage extends basePage{
    visit(){
        cy.log('**Open Select Address Page**');
        cy.visit('/#/address/select')
    }

    choosetheAddress(){
        return cy.get('.mat-radio-inner-circle').eq(0);
    }
    
    clickOnTheAddress(){
       this.choosetheAddress().click();
     }

    choosetheNewAddress(){
        return cy.get('.mat-radio-inner-circle').eq(1);
    }
    
    clickOnTheNewAddress(){
       this.choosetheNewAddress().click();
     }

     getContinueButton(){
        return cy.get('mat-card > button ');
        
    }

    clickContinueButton(){
        this.getContinueButton().click();
     }

    getStandartDelivery(){
        return cy.get('.mat-radio-inner-circle').eq(2);
        
    }
    
    ckickOnStandartDelivery(){
        this.getStandartDelivery().click();
        
    }

    getContinueButton2(){
        return cy.get('[aria-label="Proceed to delivery method selection"]') ;
    }

    clickOnContinueButton2(){
        this.getContinueButton2().click();
     }

     selectNewAddressAndDelivery(){
        cy.log(`Select address and delivery`);
        
        this.choosetheNewAddress().click();
 
        this.getContinueButton().click();
 
        this.getStandartDelivery().click();

        this.getContinueButton2().click();


     }

     selectAddressAndDelivery(){
        cy.log(`Select address and delivery`);
        
        this.choosetheAddress().click();
 
        this.getContinueButton().click();
 
        this.getStandartDelivery().click();

        this.getContinueButton2().click();


     }

     addressCheck(){
        cy.url().should('include', '/#/payment/shop');
     }


}
export default new SelectAdressPage();
