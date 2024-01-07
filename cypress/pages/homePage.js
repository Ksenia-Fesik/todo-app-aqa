import { CONSTANTS, LOCATORS } from "../testHelpers"

export class HomePage {
  constructor() {
    this.addTodoInput = LOCATORS.addTodoInput
    this.todoItem = LOCATORS.todoItem
    this.completedRadioButton = LOCATORS.completedRadioButton
    this.deleteTodoItem = LOCATORS.deleteTodoItem
    this.filterAll = LOCATORS.filterAll
    this.filterActive = LOCATORS.filterActive
    this.filterCompleted = LOCATORS.filterCompleted
    this.clearCompleted = LOCATORS.clearCompleted
    this.itemsLeft = LOCATORS.itemsLeft
  }

  addTwoItems() {
    cy.get(this.addTodoInput)
      .type(CONSTANTS.todoItemOne)
      .type("{enter}")
      .type(CONSTANTS.todoItemTwo)
      .type("{enter}")
  }

  verifyTwoItems() {
    cy.get(this.todoItem)
      .should("have.length", 2)
      .first()
      .should("have.text", CONSTANTS.todoItemTwo)
      .next()
      .should("have.text", CONSTANTS.todoItemOne)
  }

  completeOneItem() {
    cy.get(this.todoItem).first().click()
  }

  verifyOneItem() {
    cy.get(this.filterCompleted).click()

    cy.get(this.todoItem)
      .should("have.length", 1)
      .first()
      .should("have.text", CONSTANTS.todoItemTwo)
  }

  verifyRadioButton() {
    cy.get(this.completedRadioButton)
  }

  clearCompletedItems() {
    cy.get(this.clearCompleted).click()
    cy.get(this.todoItem).should("not.exist")
  }

  verifyActiveItem() {
    cy.get(this.filterActive).click()
    cy.get(this.todoItem).should("have.length", 1)
  }

  verifyAllFilter() {
    cy.get(this.filterAll).click()
    cy.get(this.todoItem).should("have.length", 1)
  }

  deleteOneTodoItem() {
    cy.get(this.deleteTodoItem).click()
  }

  verifyEmptyList() {
    cy.get(this.todoItem).should("not.exist")
  }
}
