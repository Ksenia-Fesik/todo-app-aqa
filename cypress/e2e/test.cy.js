/// <reference types="cypress" />
import { CONSTANTS, LOCATORS } from "../testHelpers"

describe("example to-do app", () => {
  before(() => {
    cy.clearLocalStorage()
  })
  beforeEach(() => {
    cy.visit("/")
  })

  // find input field and add two items
  // verify that two items were added
  // verify that the items have the correct text
  it("adds two items", () => {
    cy.get(LOCATORS.addTodoInput)
      .type(CONSTANTS.todoItemOne)
      .type("{enter}")
      .type(CONSTANTS.todoItemTwo)
      .type("{enter}")

    cy.get(LOCATORS.todoItem)
      .should("have.length", 2)
      .first()
      .should("have.text", CONSTANTS.todoItemTwo)
      .next()
      .should("have.text", CONSTANTS.todoItemOne)
  })

  //click on the first item and verify that it is completed
  //click on the filter for completed items and verify that the first item is the only one in the list
  // verify Radio button is checked
  //click Clear Completed button and verify that the list is empty
  //click on the filter for active items and verify that the second item is the only one in the list
  // click All filter and verify that one item - Thing One is in the list
  //  click Delete to do Item and verify that the list is empty
  it("completes one of the items", () => {
    cy.get(LOCATORS.todoItem).first().click()

    cy.get(LOCATORS.filterCompleted).click()

    cy.get(LOCATORS.todoItem)
      .should("have.length", 1)
      .first()
      .should("have.text", CONSTANTS.todoItemTwo)

    cy.get(LOCATORS.completedRadioButton)

    cy.get(LOCATORS.clearCompleted).click()
    cy.get(LOCATORS.todoItem).should("not.exist")

    cy.get(LOCATORS.filterActive).click()

    cy.get(LOCATORS.todoItem)
      .should("have.length", 1)
      .first()
      .should("have.text", CONSTANTS.todoItemOne)

    cy.get(LOCATORS.filterAll).click()

    cy.get(LOCATORS.todoItem)
      .should("have.length", 1)
      .should("have.text", CONSTANTS.todoItemOne)

    cy.get(LOCATORS.deleteTodoItem).click().should("not.exist")
  })
})
