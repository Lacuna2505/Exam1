///<reference types="cypress"/>
import registrationPage from '../support/pages/RegistrationPage.js';
import {faker} from '@faker-js/faker';

let user = {
  email: faker.internet.email(),
  password: faker.internet.password(9),
  animalName: faker.name.firstName()

}

it('Registration', () => {
  registrationPage.visit();
  registrationPage.getWelcomeBanner();
  registrationPage.closeWelcomeBanner();
  registrationPage.SubmitRegistrationForm();
  registrationPage.registrationCheck();


})