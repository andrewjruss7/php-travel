import Textbox from "./textbox";
describe('Test Textbox', () => { 
    beforeEach(()=> {
      
        cy.visit(Cypress.env("baseUrlDemoQA"));
        cy.url().should('include', Cypress.env("baseUrlDemoQA"));

        cy.get('h5').contains('Elements').click()
        cy.get('.main-header').should('have.text', 'Elements')

        cy.get('#item-0').click()

        


    })

    


    it('Textbox test', () => {

       Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.fixture('textBoxData.json').as('userData')
        console.log('userData')

     const inputText = new Textbox() ; // Debes cambiar el nombre de la variable, para tener buenas practicas en la semantica. 
            inputText.inputFullName(this.userData.name)      // Agrega estos valores desde el fixture
            inputText.inputEmail(this.userData.email)          
            inputText.inputCurrentAddress(this.userData.address)          
            inputText.inputPermanentAddress(this.userData.padress)           
            inputText.submitBtn()
            
            cy.get('#name').should('be.visible')
            cy.get('#email').should('be.visible')
            cy.get('#currentAddress').should('be.visible')
            cy.get('#permanentAddress').should('be.visible')
    
    })
})

// Me voy a ir a vivir a Canadá
