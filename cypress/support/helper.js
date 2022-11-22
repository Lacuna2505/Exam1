export function searchExistingProduct(productName){
    cy.get('.mat-search_icons.mat-search_icons--active')
    cy.get('[type="text"]').clear()
    .type(productName)
    .type('{enter}')
    //.click();

    cy.get('div.item-name').should('contain', productName);
}

