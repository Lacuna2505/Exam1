import basePage from "./BasePage";

const comment = "Super";

class ContactPage extends basePage {
  visit() {
    cy.log("**Open contact page**");
    cy.visit("/#/contact");
  }

  getCommentField() {
    return cy.get("#comment");
  }

  getRatingField() {
    return cy.get("#rating").as("range");
  }

  getCaptchaCode() {
    return cy.get("#captcha");
  }

  getCaptchaInput() {
    return cy.get("#captchaControl");
  }

  getSubmitButton() {
    return cy.get("#submitButton");
  }

  typeTextInCommentField() {
    cy.log(`Type comment ${comment} in comment field`);
    this.getCommentField().type(comment);
  }

  scrollRateFieldToFive() {
    this.getRatingField().type("'{rightarrow}{rightarrow}{rightarrow}{rightarrow}'");
  }

  processCaptcha() {
    const code = this.getCaptchaCode();
    const input = this.getCaptchaInput();
    code.then(function ($elem) {
      const txt = $elem.text().toString();
      const captchaAnswer = new Function("return " + txt)();
      input.type(captchaAnswer);
    });
  }

  async submitFeedbackForm() {
    cy.log(`Submit Feedback form`);
    
    this.getCommentField().type(comment);
    
    this.scrollRateFieldToFive();

    
    this.processCaptcha();

    
    cy.log(`Click login button`);
    this.getSubmitButton().click();

  }

  feedbackCheck() {
    return cy.get('.mat-simple-snack-bar-content').should('contain', 'Thank you so much for your amazing 5-star feedback!');
     }

  
  }

export default new ContactPage();
