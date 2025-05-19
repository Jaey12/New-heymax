import HeyMaxLifetimeMilesPage from '../Jayasurya/PageObject/lifetimemilesPOM.cy';
const milesPage = new HeyMaxLifetimeMilesPage();

describe('HeyMax', () => {
    before(() => {
        cy.heymaxlogin();
        cy.wait(15000);
    });

    it('Lifetime miles section', () => {
        milesPage.verifyNowModal().click();
        milesPage.lifetimeMilesButton().click();
        cy.wait(6000);
        milesPage.yourMaxMilesText().should('be.visible');
        /*milesPage.maxMilesCount().should('have.text', "210");
        milesPage.availableMiles().should('be.visible');
        milesPage.pendingMiles().should('be.visible');
        milesPage.redeemedMiles().should('be.visible');
        milesPage.redeemMaxMilesButton().should('be.visible').click();
        cy.wait(8000);
        cy.go('back');

        //Miles History
        milesPage.milesHistorytext().should('have.text', "Miles History");
        cy.wait(5000);
        milesPage.missingMilespage().should('be.visible');
        cy.wait(5000);

        //status filters
        milesPage.status().click();
        cy.wait(5000);
        milesPage.statuspending().click();
        cy.wait(5000);
        milesPage.statuscloser().click();
        milesPage.status().click();
        milesPage.statusrejected().click();
        cy.wait(5000);
        milesPage.statuscloser().click();
        milesPage.status().click();
        milesPage.statusconfirmed().click();
        cy.wait(5000);
        milesPage.statuscloser().click();
        milesPage.status().click();
        milesPage.statusAll().click();
        cy.wait(5000);*/

        //Type filter
        milesPage.tyfilter().click();
        cy.wait(5000);
        milesPage.tyEarning().click();
        cy.wait(5000);
        milesPage.tycloser().click();
        milesPage.tyfilter().click();
        milesPage.tyRedemption().click();
        cy.wait(5000);
        milesPage.tycloser().click();
        milesPage.tyfilter().click();
        milesPage.tyAll().click();
        cy.wait(5000);
        milesPage.tycloser().click();

        //merchant
        milesPage.merchant().click();
        milesPage.welcomebonus().click({force:true});
        cy.wait(5000);
        
        //Date
        milesPage.datefilter().click();
        milesPage.dataname().click();
        milesPage.datecloser().click();

        //Click History
        milesPage.clckHistory().click();
        milesPage.clckHistoryText.should('be.visible');

        //Redemptions
        milesPage.redemptionTab().click();
        milesPage.redeemNowButton().should('be.visible').click();
        cy.go('back');
        milesPage.verifyNowModal().click()
    });
});
