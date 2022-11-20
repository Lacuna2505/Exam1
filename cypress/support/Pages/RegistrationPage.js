import basePage from "./BasePage";
import {faker} from '@faker-js/faker';

let user = {
  email: faker.internet.email(),
  password: faker.internet.password(9),
  animalName: faker.name.firstName()

}


class RegistrationPage extends basePage{
    visit(){
        cy.log('**Open registration page**');
        cy.visit('/#/register');
    }

    getWelcomeBanner(){
      return cy.get('[aria-label="Close Welcome Banner"]');
    }

    closeWelcomeBanner(){
     this.getWelcomeBanner().click();
    }
    
    emailField(){
        return cy.get('#emailControl');
        
    }

    typeTextInEmailField(){
        this.emailField().type(user.email);
    } 

    accPass(){
        return cy.get('#passwordControl');
     }

     typeAccPass(){
        this.accPass().type(user.password);
     }

     repeatPass(){
        return cy.get('#repeatPasswordControl');
     }

     typeConfirmPass(){
        this.repeatPass().type(user.password);
     }

     securityQuestion(){
        return cy.get('[name="securityQuestion"]')
     }

     clickOnSecurityQuestion(){
      this.securityQuestion().click();
     }

     selectTheQuestion(){
      return cy.get('#mat-option-9');
      }

      clickOntheQuestion(){
         this.selectTheQuestion().click();
      }


     answerField(){
        return cy.get('#securityAnswerControl');
     }

     typeAnswerControl(){
        this.answerField().type(user.animalName);
     }

     registerButton(){
        return cy.get('#registerButton');
      }

      clickOnRegisterButton(){
        this.registerButton().click();
      }
      
      registrationCheck(){
         cy.url().should('include', '/#/login');
      }

      fillRegistrationForm(userEmail, password, answerControl){
         cy.log(`Fill Registration form`);
         
         this.emailField().type(userEmail);
  
         this.accPass().type(password);
  
         this.repeatPass().type(password);
  
         this.securityQuestion().click();
  
         this.selectTheQuestion().click();
  
         this.answerField().type(answerControl);

      }

      
     SubmitRegistrationForm(){
      cy.log(`Submit Registration form`);
      
      this.emailField().type(user.email);

      this.accPass().type(user.password);

      this.repeatPass().type(user.password);

      this.securityQuestion().click();

      this.selectTheQuestion().click();

      this.answerField().type(user.animalName);

      cy.log('Click Register button')
         this.registerButton().click();
      
      }

      getAlertText(){
         return cy.get('.ng-trigger-transitionMessages');
      }


}

      export default new RegistrationPage();
