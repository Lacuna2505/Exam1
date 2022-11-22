import basePage from "./BasePage";

class SearchPage extends basePage{
    visit(){
        cy.log('**Open Search Page**');
        cy.visit('/#/search')
    }

    chooseProduct(){
        return cy.get('.mat-grid-tile:nth-child(5)>div>mat-card>div:nth-child(2)>button');
    }
    
    clickOnTheProduct(){
       this.chooseProduct().click();
     }

     checkThatProductWasAdded(){
        return cy.get('.mat-simple-snack-bar-content');
        
    }

    goToMyBasket(){
        return cy.get('[aria-label="Show the shopping cart"]');
     }

    clickOnMyBasket(){
        this.goToMyBasket().click();
        
    }
    
    checkoutButton(){
        return cy.get('#checkoutButton');
        
    }

    clickOnCheckoutButton(){
        this.checkoutButton().click(); 
    }

    checkoutCheck(){
        cy.url().should('include', '/#/address/select');
     }

     orderProduct(){
        cy.log(`Order the Product`);
        
        this.chooseProduct().click();
 
        this.goToMyBasket().click();
 
        this.checkoutButton().click(); 

     }

     addToBasket(){
        return cy.get('[aria-label="Add to Basket"]')
     }

     clickAddToBasket(){
        this.addToBasket().click();
     }

     orderProductThatWasFound(){
        cy.log(`Order the Product that was found`);
        
        this.addToBasket().click();
 
        this.goToMyBasket().click();
 
        this.checkoutButton().click(); 

     }




     getSearchButton(){
        cy.log('Get the search button')
        return cy.get('.mat-ripple.mat-search_icon-search');
    }
    
    clickOnTheSearchButton(){
        cy.log('Click on the Search Button')
        this.getSearchButton().click();

    }

    openTheSearchField(){
        this.getSearchButton().click();
    }

     


}
export default new SearchPage();
