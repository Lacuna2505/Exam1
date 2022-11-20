///<reference types="cypress"/>
import authorizationPage from '../support/pages/AuthorizationPage.js';
import registrationPage from '../support/pages/RegistrationPage.js';
import user from '../fixtures/user.json';

it('Authorization', () => {
  authorizationPage.visit();
  registrationPage.getWelcomeBanner();
  registrationPage.closeWelcomeBanner();

  authorizationPage.submitLoginForm(user.email, user.password);
  
  authorizationPage.authorizationCheck1();
  authorizationPage.authorizationCheck2();

  cy.getCookie(user.token);

})

