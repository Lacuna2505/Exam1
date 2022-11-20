///<reference types="cypress"/>
import authorizationPage from '../support/pages/AuthorizationPage.js';
import registrationPage from '../support/pages/RegistrationPage.js';
import user from '../fixtures/user.json';

it('Authorization with wrong password', () => {
  authorizationPage.visit();
  registrationPage.getWelcomeBanner();
  registrationPage.closeWelcomeBanner();

  authorizationPage.submitLoginForm(user.email, 'user.password');
  authorizationPage.getAlertText().should('contain', 'Invalid email or password.');
  
})

it('Authorization with wrong login', () => {
  authorizationPage.visit();
  registrationPage.getWelcomeBanner();
  registrationPage.closeWelcomeBanner();

  authorizationPage.submitLoginForm('user.userName', user.password);
  authorizationPage.getAlertText().should('contain', 'Invalid email or password.');
  
})

