import { heyMaxProfilePage } from '../Jayasurya/PageObject/ProfilePOM.cy';

describe('HeyMax', () => {
    before(() => {
        cy.heymaxlogin();
        cy.wait(10000);
    });

    it('Profile page', () => {
        heyMaxProfilePage.modalcloser().click();
        cy.wait(10000);
        heyMaxProfilePage.heymaxLogo().should('be.visible');
        cy.wait(8000);
        heyMaxProfilePage.profiledownarrow().click();
        cy.wait(5000);
        heyMaxProfilePage.profileModule().click();
        cy.wait(5000);
        heyMaxProfilePage.profileName().should('be.visible');
        cy.wait(5000);
        heyMaxProfilePage.maxMiles().click();
        cy.wait(5000);
        heyMaxProfilePage.yourMaxMiles().should('have.text', "Your Max Miles");
        cy.go('back');
        cy.wait(5000);

        heyMaxProfilePage.yourReferrals().click();
        cy.wait(5000);
        heyMaxProfilePage.referText().should('be.visible');
        cy.go('back');
        cy.wait(5000);

        heyMaxProfilePage.yourVoucher().click();
        cy.wait(5000);
        heyMaxProfilePage.voucherText().should('be.visible');
        cy.go('back');
        cy.wait(5000);

        heyMaxProfilePage.referralRewardText().should('be.visible');
        cy.wait(5000);
        heyMaxProfilePage.telegramLink().should('exist');
        cy.wait(5000);

        heyMaxProfilePage.dineOut().click();
        cy.wait(5000);
        cy.url().should('include', 'airtable.com');
        cy.go('back');
        cy.wait(5000);

        heyMaxProfilePage.savedMerchants().should('have.text', "YOUR SAVED MERCHANTS");
        cy.wait(5000);
        heyMaxProfilePage.country().should('have.text', "Singapore");
        cy.wait(5000);

        heyMaxProfilePage.redeem().click();
        cy.wait(5000);
        heyMaxProfilePage.redeemText().should('be.visible');
        cy.wait(5000);
        heyMaxProfilePage.enterField().should('be.visible');
        cy.wait(5000);
        heyMaxProfilePage.redeemButton().should('be.visible');
        cy.wait(5000);
        heyMaxProfilePage.contactSupport().click();
        cy.go('back');
        cy.wait(5000);
        heyMaxProfilePage.changePassword().should('be.visible');
        cy.wait(5000);

        heyMaxProfilePage.deleteAccount().should('be.visible');
        cy.wait(5000);
        heyMaxProfilePage.faq().click();
        cy.wait(5000);
        cy.url().should('contain', 'help');
        cy.go('back');
        cy.wait(5000);

        heyMaxProfilePage.contactSupportOption().click();
        cy.wait(5000);
        heyMaxProfilePage.feedback().click();
        cy.wait(15000);
        cy.url().should('contain', 'community');
        cy.go('back');
        cy.wait(10000);

        heyMaxProfilePage.heyMaxExtension().should('be.visible');
        cy.wait(5000);
        heyMaxProfilePage.company().should('be.visible');
        cy.wait(5000);

        heyMaxProfilePage.businessPartner().invoke('removeAttr', 'target').click();
        cy.wait(5000);
        cy.url().should('include', '/business');
        cy.go('back');
        cy.wait(5000);

        heyMaxProfilePage.blog().invoke('removeAttr', 'target').click();
        cy.wait(5000);
        cy.url().should('include', '/blog');
        cy.go('back');
        cy.wait(5000);

        heyMaxProfilePage.logout().click();
    });
});
