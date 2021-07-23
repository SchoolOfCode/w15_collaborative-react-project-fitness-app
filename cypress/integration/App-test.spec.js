import 'cypress-iframe'

const squatAmount = 101;
const testName = "cypress"
const baseURL = 'http://localhost:3000/'

describe ('Complete end to end test for Flexercise v2.0', () => {
    it('End to End test', () => {

    //Homepage
    cy.visit(baseURL)

    //Homepage logo
    cy.get(".logo-div")
        .find(".logo-img")
        .should('have.attr','alt', 'logo')
        .and('be.visible')

    //Homepage button --> Explanation page
    cy.contains(/TRY A 2 MINUTE/i)
    .click()

    //Explanation
    cy.contains("You are about to complete a short")
    cy.contains("Continue").click()

    //Exercise Choice Page
    cy.contains("Select Exercise")

    //Testing the name input changes the avatar
    //And that the select avatar options change the avatar
    cy.get(".choose-avatar")
        .should('have.attr','src', 'https://avatars.dicebear.com/api/micah/.svg')
    cy.get(".input-text")
        .type(testName)
        .blur()
    cy.get(".choose-avatar")
        .should('have.attr','src', 'https://avatars.dicebear.com/api/micah/cypress.svg')
    cy.get(".select-seed")
        .select("Gridy")
    cy.get(".choose-avatar")
        .should('have.attr','src', 'https://avatars.dicebear.com/api/gridy/cypress.svg')
    
    //Select Exercise --> Timer page
    
    cy.get(".Squats")
        .should("be.visible")
        .and('have.attr','alt', 'Squats')
    cy.get(".exerciseChoiceSquats")
        .click()
    
    //Timer page
    //iframe - start the video then mute it
    cy.frameLoaded('[data-cy="youtube-frame"]')
    cy.iframe().find(".ytp-large-play-button")
        .click()
    cy.iframe().find(".ytp-mute-button")
        .click()

    //not working
    // cy.wait(1000) 
    // //it should be playing - the label will become pause
    // cy.iframe().find(".ytp-large-play-button")
    //     .contains('[aria-label="Pause (k)"]')

    //Start the timer
    cy.get("#start")
    .click()
    //Fast forward time
    cy.clock(new Date().getTime())
    cy.tick(121000) //not sure why there is an extra second
    cy.contains("00:01")
    cy.tick(2000)

    //Input amount page
    cy.contains("How many reps")
    cy.get(".input-text")
    .type(`${squatAmount}`)
    .blur()
    cy.get(".input-text")
    .should("have.value", `${squatAmount}`)

    cy.get("#submit-button")
        .click()

    //Motivation page
    cy.get(".motivation-picture")
        .should('have.attr','alt', 'sunrise')   
    cy.contains("The pain you feel")
    cy.get(".my-button")
        .click()
    
    //Leaderboard page
    cy.contains("Leaderboard")
    cy.contains(testName)
    cy.contains(`${squatAmount}`)

    cy.get(".my-button")
        .click()
    
    cy.contains("Select Exercise")
    
    //Error page

    cy.visit(baseURL + "/howdyDoody")
    cy.contains("Howdy Partner!")
    cy.get(".my-button")
        .click()
    cy.contains(/TRY A 2 MINUTE/i)
    //Back to the beginning
    });

});