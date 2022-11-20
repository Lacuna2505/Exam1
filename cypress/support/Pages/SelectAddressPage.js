import basePage from "./BasePage";

class SelectAdressPage extends basePage{
    visit(){
        cy.log('**Open Select Address Page**');
        cy.visit('/#/address/select')
    }

    choosetheAddress(){
        return cy.get('#mat-radio-43-input');
    }
    
    clickOnTheAddress(){
       this.choosetheAddress().check();
     }

     getContinueButton(){
        return cy.get('mat-card > button ');
        
    }

    clickContinueButton(){
        this.getContinueButton().click();
     }

    getStandartDelivery(){
        return cy.get('#mat-radio-46-input');
        
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

     selectAddressAndDelivery(){
        cy.log(`Select address and delivery`);
        
        this.choosetheAddress().check();
 
        this.getContinueButton().click();
 
        this.getStandartDelivery().click();

        this.getContinueButton2().click();


     }

     addressCheck(){
        cy.url().should('include', '/#/payment/shop');
     }


}
export default new SelectAdressPage();
