import { ApplyCardPage } from '../../e2e/Jayasurya/PageObject/CardModulePOM.cy';

const cardPage = new ApplyCardPage();

describe('HeyMax - Apply for a Card', () => {
    before(() => {
        cy.heymaxlogin();
        cy.wait(5000);
    });

    it('Apply for a credit card and validate card screens', () => {
        cy.get("svg[width='100']").should('be.visible');
        cy.wait(8000);
        cy.xpath("(//button[normalize-space()='Do it later'])[1]").click();
        cy.wait(8000);

        cardPage.clickApplyForCard();
        cy.wait(3000);
        cardPage.verifyApplyCardHeader();
        cy.wait(4000);

        cardPage.validateAllCardTiles();
        cy.wait(4000);

        cardPage.openCitiCardDetails();
        cy.wait(4000);
        cardPage.validateCitiCardDetails();
        cy.wait(4000);

        cardPage.openChocolateCardDetails();
        cy.wait(4000);
        cardPage.validateChocolateCardDetails();
        cy.wait(4000);
        cardPage.clickApplyOnChocolateFinance();
    });
});
