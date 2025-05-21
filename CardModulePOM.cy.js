export class ApplyCardPage {
    clickApplyForCard() {
        cy.xpath("//span[normalize-space()='Apply for a card']").click();
    }

    verifyApplyCardHeader() {
        cy.xpath("//h2[normalize-space()='Apply for a credit card']").should('be.visible');
    }

    validateAllCardTiles() {
        cy.xpath("//a[1]").should('be.visible');
        cy.xpath("//a[2]//div[1]//span[1]").should('be.visible');
        cy.xpath("(//div[@class='flex items-center gap-3'])[1]").should('be.visible');
        cy.xpath("(//div[@class='grid grid-cols-3 gap-3 pt-1'])[1]").should('be.visible');
        cy.scrollTo('bottom');
        cy.scrollTo('top');
    }

    openCitiCardDetails() {
        cy.xpath("//a[1]").click();
    }

    validateCitiCardDetails() {
        cy.xpath("//img[@alt='merchant']").should('be.visible');
        cy.xpath("//h1[normalize-space()='Citi Rewards Card']").should('be.visible');
        cy.xpath("//p[normalize-space()='17,000 Max Miles']").should('be.visible');
        cy.xpath("//h2[normalize-space()='Steps to earn']").should('be.visible');
        cy.scrollTo('bottom');
        cy.xpath("(//div[@class='text-zinc-900 mt-4 flex flex-col justify-center self-stretch rounded-lg bg-[#F3F5FB] p-3 text-xs leading-4'])[1]").should('be.visible');
        cy.xpath("//h2[normalize-space()='Promotion criteria']").should('be.visible');
        cy.xpath("//h2[normalize-space()='Key features']").should('be.visible');
        cy.xpath("//h2[normalize-space()='Fees & Charges']").should('be.visible');
        cy.xpath("(//p[@class='mt-2 text-center text-xs text-gray-500'])[1]").should('be.visible');
        cy.xpath("//button[normalize-space()='Apply on Singsaver']").should('be.visible');
        cy.scrollTo('top');
        cy.xpath("(//*[name()='path'][@stroke-linecap='round'])[1]").click();
    }

    openChocolateCardDetails() {
        cy.xpath("//a[2]").click();
    }

    validateChocolateCardDetails() {
        cy.xpath("(//p[@class='mx-auto max-w-md text-center text-h2 text-neutral-000'])[1]").should('be.visible');
        cy.xpath("//p[@class='text-center text-h3']").should('be.visible');
        cy.scrollTo('bottom');
        cy.xpath("//div[@data-sentry-component='KeyFeatures']//div[@class='flex flex-col gap-xlarge']").should('be.visible');
        cy.xpath("//div[@data-sentry-component='HowItWorks']//div[@class='flex flex-col gap-xlarge']").should('be.visible');
        cy.xpath("//a[normalize-space()='Check out FAQs']").should('be.visible');
        cy.xpath("//a[normalize-space()='Apply on Chocolate Finance']").should('be.visible');
    }

    clickApplyOnChocolateFinance() {
        cy.xpath("//a[normalize-space()='Apply on Chocolate Finance']")
          .invoke('removeAttr', 'target')
          .click();
        cy.url().should('include', 'https://apps.apple.com/sg/app/chocolate-finance');
        cy.go('back');
    }
}
