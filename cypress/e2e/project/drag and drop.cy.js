
import "@4tw/cypress-drag-drop"

describe("drag and drop",()=>{
    it("drag'n'drop",()=>{
        cy.visit("https://demoqa.com/droppable/")

        cy.get('#draggable').drag("#simpleDropContainer > #droppable > p")

        







    })







})