///<reference types="cypress"/>
import registrationPage from '../support/pages/RegistrationPage.js';
import {faker} from '@faker-js/faker';

let user = {
  email: faker.internet.email(),
  password: faker.internet.password(9),
  animalName: faker.name.firstName()

}

it('Registration with wrong email', () => {
    registrationPage.visit();
    registrationPage.getWelcomeBanner();
    registrationPage.closeWelcomeBanner();
  
    registrationPage.fillRegistrationForm('user.email', user.password, user.animalName);
    registrationPage.getAlertText().should('contain', 'Email address is not valid.');
    
  })
  
it('Registration without password', () => {
 registrationPage.visit();
    registrationPage.getWelcomeBanner();
    registrationPage.closeWelcomeBanner();
  
    registrationPage.typeTextInEmailField();
    registrationPage.accPass().click();
    registrationPage.securityQuestion().click();
    registrationPage.selectTheQuestion().click();
    registrationPage.answerField().type(user.animalName);

    registrationPage.getAlertText().should('contain', 'Please provide a password. ');
    
})
  
it('Registration without security Answer', () => {
    registrationPage.visit();
    registrationPage.getWelcomeBanner();
    registrationPage.closeWelcomeBanner();
  
    registrationPage.typeTextInEmailField();
    registrationPage.typeAccPass();
    registrationPage.typeConfirmPass();
    registrationPage.answerField().click();
    registrationPage.securityQuestion().click();
    registrationPage.selectTheQuestion().click();
    
   
       registrationPage.getAlertText().should('contain', ' Please provide an answer to your security question. ');
       
   })