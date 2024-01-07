import { HomePage } from "../pages/homePage"

const homePage = new HomePage()

describe("example to-do app", () => {
  before(() => {
    cy.clearLocalStorage()
  })
  beforeEach(() => {
    cy.visit("/")
  })

  it("adds two items", () => {
    homePage.addTwoItems()
    homePage.verifyTwoItems()
  })

  it("completes one of the items", () => {
    homePage.completeOneItem()
    homePage.verifyOneItem()
    homePage.verifyRadioButton()
    homePage.clearCompletedItems()
    homePage.verifyActiveItem()
    homePage.verifyAllFilter()
    homePage.deleteOneTodoItem()
    homePage.verifyEmptyList()
  })
})
