import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('Start to type your Given step here', function () {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
  expect(2 > 3).should('be.true');

});