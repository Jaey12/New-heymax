class ReferFriendPage {
    
    openReferAFriendPage() {
        cy.xpath("//span[normalize-space()='Refer a friend']").click();
    }

    verifyReferFriendScreen() {
        cy.get("p[class='font-semibold text-[#1A1A1A]']").should('be.visible');
    }

    copyLinkToShare() {
        cy.xpath("//button[normalize-space()='Copy link to share']")
            .should('be.visible')
            .click();
    }

    verifySocialMediaIcons() {
        cy.xpath("//img[@alt='WhatsApp']").should('be.visible');
        cy.xpath("//img[@alt='Telegram']").should('be.visible');
        cy.xpath("//img[@alt='Facebook']").should('be.visible');
        cy.xpath("//img[@alt='LinkedIn']").should('be.visible');
        cy.xpath("//img[@alt='Gmail']").should('be.visible');
        cy.xpath("//img[@alt='Reddit']").should('be.visible');
    }

    openAndCloseTipsOnSharing() {
        cy.xpath("(//p[@class='font-inter text-sm font-semibold leading-5 text-brand-100'])[1]").click();
        cy.xpath("(//*[name()='svg'][@class='shrink-0 grow-0 cursor-pointer h-6 w-6'])[1]").click();
    }

    openMyReferralsTab() {
        cy.xpath("(//div[@class='relative w-fit text-s2 text-neutral-100'])[1]").click();
    }

    validateMyReferrals() {
        cy.xpath("(//div[@class='relative w-fit whitespace-nowrap text-l2 text-neutral-100'][normalize-space()='Miles Earned'])[2]").should('be.visible');
        cy.xpath("(//div[@class='relative w-fit whitespace-nowrap text-l2 text-neutral-100'][normalize-space()='In Progress'])[2]").should('be.visible');
        cy.xpath("(//div[@class='relative w-fit whitespace-nowrap text-l2 text-neutral-100'][normalize-space()='Completed'])[2]").should('be.visible');
        cy.xpath("(//p[normalize-space()='In Progress'])[1]").dblclick();
        cy.xpath("//p[normalize-space()='Completed']").dblclick();
        cy.xpath("(//*[name()='svg'][@class='shrink-0 grow-0 cursor-pointer h-5 w-5'])[1]").click();
    }

    verifyHowItWorksSection() {
        cy.xpath("(//div[@class='self-stretch text-s2 text-neutral-100'])[1]").should('be.visible');
        cy.xpath("(//div[@class='text-center text-l2 text-neutral-100'])[1]").should('be.visible');
        cy.xpath("(//div[@class='text-l2 text-neutral-100'])[1]").should('be.visible');
        cy.xpath("(//p[@class='text-center text-l2 text-neutral-100'])[1]").should('be.visible');
    }

    openFAQs() {
        cy.xpath("//p[normalize-space()='Referral Programme FAQ']").dblclick();
        cy.xpath("//p[normalize-space()='General HeyMax FAQ']").dblclick();
    }

    clickBackButton() {
        cy.xpath("(//*[name()='svg'][@class='h-3xlarge w-3xlarge rotate-180'])[1]").click();
    }
}

export default ReferFriendPage;
