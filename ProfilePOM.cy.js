class HeyMaxProfilePage {
    heymaxLogo = () => cy.get("svg[width='100']");
    modalcloser = () => cy.xpath("//button[normalize-space()='Do it later']");
    profiledownarrow = () => cy.xpath("(//div[@class='hidden cursor-pointer items-center justify-center gap-[6px] rounded-sm p-2 hover:bg-[#F3F5FB] md:flex'])[1]");
    profileModule = () => cy.xpath("(//p[@class='text-sm'][normalize-space()='Profile'])[1]");
    profileName = () => cy.xpath("(//p[@class='flex flex-col font-semibold text-[#5046C5]'])[1]");
    maxMiles = () => cy.xpath("(//div[@class='flex items-center gap-2'])[9]");
    maxMilesPage = () => cy.xpath("(//div[@class='flex w-full items-center justify-between'])[2]");
    yourMaxMiles = () => cy.xpath("//h1[normalize-space()='Your Max Miles']");

    yourReferrals = () => cy.xpath("//a[@data-sentry-component='ProfileReferralCard']");
    referText = () => cy.xpath("(//p[@class='font-semibold text-[#1A1A1A]'])[1]");

    yourVoucher = () => cy.xpath("(//a[@data-sentry-component='ProfileVoucherCard'])[1]");
    voucherText = () => cy.xpath("(//h1[normalize-space()='Your Vouchers & Gift Cards'])[1]");

    referralRewardText = () => cy.xpath("(//button[@title='Verify to unlock Referral Reward'])[1]");
    telegramLink = () => cy.xpath("(//a[@class='flex w-full flex-col gap-3'])[1]");

    dineOut = () => cy.xpath("//p[@class='ml-xlarge']");
    savedMerchants = () => cy.xpath("(//p[@class='flex text-xs text-[#1A1A1A]'])[1]");

    country = () => cy.xpath("//div[normalize-space()='Singapore']");

    redeem = () => cy.xpath("//p[normalize-space()='Redeem a code']");
    redeemText = () => cy.xpath("//h2[normalize-space()='Redeem your Max Miles']");
    enterField = () => cy.xpath("//input[@id='compare-search-bar-input']");
    redeemButton = () => cy.xpath("//input[@id='compare-search-bar-input']");
    contactSupport = () => cy.xpath("//span[normalize-space()='Contact us for support.']");
    changePassword = () => cy.xpath("//p[normalize-space()='Change password']");

    deleteAccount = () => cy.xpath("(//p[normalize-space()='Delete account'])[1]");

    faq = () => cy.xpath("//p[normalize-space()='FAQs']");
    contactSupportOption = () => cy.xpath("(//p[normalize-space()='Contact support'])[1]");
    feedback = () => cy.xpath("(//p[normalize-space()='Give feedback'])[1]");

    heyMaxExtension = () => cy.xpath("//p[normalize-space()='HeyMax Browser Extension']");
    company = () => cy.xpath("//p[normalize-space()='Company']");
    businessPartner = () => cy.xpath("(//a[@data-sentry-source-file='BecomeAPartnerButton.tsx'])[1]");
    blog = () => cy.xpath("//a[@data-sentry-source-file='CommunityButton.tsx']");

    logout = () => cy.xpath("(//p[normalize-space()='Log out'])[1]");
}

export const heyMaxProfilePage = new HeyMaxProfilePage();
