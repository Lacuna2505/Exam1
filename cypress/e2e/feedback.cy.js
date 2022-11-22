///<reference types="cypress"/>

import registrationPage from '../support/pages/RegistrationPage.js';
import contactPage from '../support/pages/ContactPage.js';



it('Authorization', () => {
  
  
  contactPage.visit();

  registrationPage.getWelcomeBanner();
  registrationPage.closeWelcomeBanner();
  
  contactPage.submitFeedbackForm();
  contactPage.feedbackCheck();


})