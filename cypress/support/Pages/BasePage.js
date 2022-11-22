export default class BasePage {
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

    performSearch(searchQuery){
        cy.log(`**Perform search with search query ${searchQuery}**`)
        this.getSearchButton().type(searchQuery);
    }
}