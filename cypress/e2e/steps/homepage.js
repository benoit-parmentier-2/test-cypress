const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given(/^the user is on the home page$/, () => {
	cy.visit("/vuejs-helloworld/");
});

When(/^the page is loaded$/, () => {
	cy.get("div#app").should("be.visible");
});

Then(/^the contents of the page are well displayed$/, () => {
    cy.get("div [src='/vuejs-helloworld/static/']").should("be.visible");
});
