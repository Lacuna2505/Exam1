///<reference types="cypress"/>
import authorizationPage from '../support/pages/AuthorizationPage.js';
import user from '../fixtures/user.json';
import searchPage from '../support/Pages/SearchPage.js';
import registrationPage from '../support/pages/RegistrationPage.js';
import addNewAddressPage from '../support/pages/AddNewAddressPage.js';
import selectAddressPage from '../support/pages/SelectAddressPage';
import paymentPage from '../support/pages/PaymentPage'

it('Authorization', () => {
    authorizationPage.visit();
    registrationPage.getWelcomeBanner();
    registrationPage.closeWelcomeBanner();

    authorizationPage.submitLoginForm(user.email, user.password);
    
    searchPage.visit();
    searchPage.orderProduct();
    searchPage.checkoutCheck();

    selectAddressPage.selectAddressAndDelivery();
    selectAddressPage.addressCheck();

    paymentPage.chooseExistingCard();
    paymentPage.paymentCheck1();
    paymentPage.paymentCheck2();
    paymentPage.finishTheOrder();

    

  
  })