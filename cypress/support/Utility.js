//utility.js
let language = Cypress.config().language

export class utility {
    getLanguageMobileScreen() {
        if (language == "French") {
            cy.get('abbr').click({force: true})
        }
        else {
            return language
        }
    }

    getLanguageTabletOrMonitorScreen() {
        if (language == "French") {
            cy.get('[data-cy="toggle-language-link"]').click()
        }
        else {
            return language
        }
    }
}