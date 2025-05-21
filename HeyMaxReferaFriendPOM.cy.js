import ReferFriendPage from '../../e2e/Jayasurya/PageObject/POMReferaFriend.cy';

const referPage = new ReferFriendPage();

describe('HeyMax - Refer a Friend', () => {
    before(() => {
        cy.heymaxlogin();
        cy.wait(5000);
    });

    it('Complete Refer a Friend Flow', () => {
        cy.get("svg[width='100']").should('be.visible');
        cy.wait(8000);
        cy.xpath("(//button[normalize-space()='Do it later'])[1]").click();
        cy.wait(8000);

        referPage.openReferAFriendPage();
        cy.wait(10000);

        referPage.verifyReferFriendScreen();
        referPage.copyLinkToShare();
        cy.wait(4000);

        referPage.verifySocialMediaIcons();
        cy.wait(4000);

        referPage.openAndCloseTipsOnSharing();
        cy.wait(4000);

        referPage.openMyReferralsTab();
        referPage.validateMyReferrals();
        cy.wait(4000);

        referPage.verifyHowItWorksSection();
        cy.wait(4000);

        referPage.openFAQs();
        cy.wait(4000);

        referPage.clickBackButton();
    });
});
