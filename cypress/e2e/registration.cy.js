///<reference types="cypress"/>
import registrationPage from '../support/pages/RegistrationPage.js';


it('Registration', () => {
  registrationPage.visit();
  registrationPage.getWelcomeBanner();
  registrationPage.closeWelcomeBanner();
  registrationPage.SubmitRegistrationForm();
  registrationPage.registrationCheck();


})