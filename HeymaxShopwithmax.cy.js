describe('HeyMax',() =>{
    before(()=>{
        cy.heymaxlogin();
    })

    it('Validating URL', () => {
        cy.wait(8000)
        cy.get("svg[width='100']").should('be.visible');
        cy.wait(8000)
        cy.get('#home-page-hub-carousel > :nth-child(3) > .relative > .flex').should('be.visible').click();
        cy.wait(10000)
        //Filter for High Reward
        cy.get('.mx-auto > .w-full.gap-3 > .relative').click({force:true});
        cy.wait(8000)
        cy.get('#best_mpd > .flex > .h-full').click({force:true});
        cy.wait(8000)
        cy.xpath("//p[normalize-space()='15000 Max Miles']").should('contain', "15000 Max Miles");
        cy.wait(8000)

        //Validating all tabs
        cy.xpath("//p[normalize-space()='Business & Professional Services']").click()
        cy.wait(8000);
        cy.xpath("//p[normalize-space()='Travel & Transportation']").click()
        cy.wait(8000)
        cy.xpath("//p[normalize-space()='Retail & Shopping']").click()
        cy.wait(8000)
        cy.xpath("//p[normalize-space()='Health, Beauty & Wellness']").click()
        cy.wait(8000)
        cy.xpath("//p[normalize-space()='Technology & Electronics']").click()
        cy.wait(8000)
        cy.xpath("//p[normalize-space()='Entertainment & Education']").click()
        cy.wait(8000)

        //Validating shopee screen
        cy.xpath("//p[normalize-space()='Retail & Shopping']").click()
        cy.wait(8000)
        cy.xpath("//span[normalize-space()='Shopee']").click()
        cy.wait(5000)
        cy.xpath("//h1[normalize-space()='Shopee']").should('have.text', "Shopee")
        cy.wait(3000)
        //Validating Bookmark
        cy.xpath("//p[normalize-space()='Bookmark']").should('have.text', "Bookmark");
        cy.wait(5000);
        
        //Share validation
        cy.xpath("//p[normalize-space()='Share']").should('have.text', "Share");
        cy.wait(5000);

        //Validate More
        cy.xpath("//p[normalize-space()='More']").should('have.text', "More");
        cy.wait(5000);
        
        //double your miles
        cy.xpath("(//p[@class='text-lg font-semibold text-[#1A1A1A]'])[1]").should('be.visible')
        cy.wait(5000);

        //Hot Maximiser
        cy.xpath("(//div[@class='font-inter text-lg font-semibold'][contains(text(),'Hot amongst Maxers 🔥')])[2]").should('be.visible')
        cy.wait(5000);
        cy.xpath("(//p[@class='text-sm false'][normalize-space()='Women Clothes'])[3]").click()
        cy.wait(5000);
        cy.xpath("(//p[@class='text-sm false'][normalize-space()='Men Clothes'])[3]").click()
        cy.wait(5000);
        cy.xpath("(//p[@class='text-sm false'][normalize-space()='Beauty'])[3]").click()
        cy.wait(5000);
        cy.xpath("(//p[@class='text-sm false'][normalize-space()='Health'])[3]").click()
        cy.wait(5000);
        cy.xpath("(//p[@class='text-sm false'][normalize-space()='Fashion Accessories'])[3]").click()
        cy.wait(5000);
        cy.xpath("(//span[@class='font-inter text-xs font-semibold'][normalize-space()='See All'])[3]").click()
        cy.wait(5000);
        cy.go('back');

        //Best miles per $ deals ⭐
        cy.xpath("(//div[@class='font-inter text-lg font-semibold'][contains(text(),'Best miles per $ deals ⭐')])[2]").should('be.visible')
        cy.wait(5000);
        cy.xpath("(//p[@class='text-sm false'][normalize-space()='Women Clothes'])[4]").click()
        cy.wait(5000);
        cy.xpath("(//p[@class='text-sm false'][normalize-space()='Men Clothes'])[4]").click()
        cy.wait(5000);
        cy.xpath("(//p[@class='text-sm false'][normalize-space()='Beauty'])[4]").click()
        cy.wait(5000);
        cy.xpath("(//p[@class='text-sm false'][normalize-space()='Health'])[4]").click()
        cy.wait(5000);
        cy.xpath("(//p[@class='text-sm false'][normalize-space()='Fashion Accessories'])[4]").click()
        cy.wait(5000);
        cy.xpath("(//span[@class='font-inter text-xs font-semibold'][normalize-space()='See All'])[4]").click()
        cy.wait(5000);
        cy.go('back');

        //You might also like
        cy.xpath("(//p[@class='flex w-3/4 pt-4 text-lg font-semibold text-[#1A1A1A]'])[1]").should('be.visible')
        cy.wait(5000);
        //Earn MAx Miles
        cy.xpath("(//button[normalize-space()='Earn Max Miles'])[1]").should('be.visible')
        cy.wait(5000);
        //Card Reward
        cy.xpath("(//button[normalize-space()='Card Rewards'])[1]").should('be.visible')
        cy.wait(5000);
        cy.xpath("(//button[normalize-space()='Card Rewards'])[1]").click()
        cy.wait(5000);
        cy.xpath("(//*[name()='svg'][@class='false'])[1]").click()
        cy.wait(5000);
        cy.xpath("(//button[contains(@class,'flex w-full items-center justify-center rounded-full bg-[#5046C5]')])[1]").should('be.visible')
        cy.wait(5000);
        cy.xpath("(//p[contains(@class,'px-6 py-2 font-inter text-sm font-semibold md:py-3 text-[#5046C5]')])[1]").should('be.visible')
        cy.wait(5000);
        cy.xpath("(//div[contains(@class,'flex w-full cursor-pointer justify-center rounded-full bg-[#F3F5FB] px-4 py-2 text-base font-semibold text-[#5046C5]')])[1]").click()
        cy.wait(5000);
        cy.scrollTo('bottom');
        cy.xpath("(//div[@class='flex w-full cursor-pointer justify-center rounded-full bg-[#F3F5FB] px-4 py-2 text-base font-semibold text-[#5046C5]'])[1]").click()
        cy.wait(5000);

        //back to home
        cy.xpath("(//*[name()='svg'][contains(@class,'h-5 w-5 rotate-180')])[1]").click();
        cy.wait(5000);
        cy.xpath("(//*[name()='svg'][@class='h-5 w-5 rotate-180'])[1]").click();
        cy.wait(5000);
    })

}) 