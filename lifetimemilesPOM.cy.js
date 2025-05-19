class HeyMaxLifetimeMilesPage {
    verifyNowModal = () => cy.xpath("//button[normalize-space()='Do it later']");
    lifetimeMilesButton = () => cy.xpath("(//p[@class='hidden text-nowrap font-inter text-sm font-medium text-[#3A3294] md:block'])[1]");
    yourMaxMilesText = () => cy.xpath("//h1[normalize-space()='Your Max Miles']");
    maxMilesCount = () => cy.xpath("(//div[@class='flex items-center gap-1'])[1]");
    availableMiles = () => cy.xpath("(//p[normalize-space()='AVAILABLE'])[1]");
    pendingMiles = () => cy.xpath("(//p[normalize-space()='PENDING'])[1]");
    redeemedMiles = () => cy.xpath("(//p[normalize-space()='REDEEMED'])[1]");
    redeemMaxMilesButton = () => cy.xpath("(//a[normalize-space()='Redeem Max Miles'])[1]");
    //Miles History
    milesHistorytext =() => cy.xpath("(//p[@class='text-b2 text-neutral-100'])[1]");
    missingMilespage =() => cy.xpath("(//button[normalize-space()='Missing Miles?'])[1]");
    //status
    status =() => cy.xpath("//button[normalize-space()='Status']");
    statusAll =() => cy.xpath("(//div[contains(text(),'All')])[1]");
    statuspending =() => cy.xpath("(//div[normalize-space()='Pending'])[1]");
    statusconfirmed  =() => cy.xpath("(//div[normalize-space()='Confirmed'])[1]");
    statusrejected =() => cy.xpath("(//div[normalize-space()='Rejected'])[1]");
    statuscloser =() => cy.xpath("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeSmall text-brand-100 css-1vaborj'])[3]");
    //Type
    tyfilter =() => cy.xpath("//button[normalize-space()='Type']");
    tyAll =() => cy.xpath("(//div[contains(text(),'All')])[1]");
    tyEarning =() =>cy.xpath("(//div[normalize-space()='Earning'])[1]");
    tyRedemption =() =>cy.xpath("//div[normalize-space()='Redemption']");
    tycloser =() =>cy.xpath("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeSmall text-brand-100 css-1vaborj'])[4]");
    //Merchant
    merchant =() => cy.xpath("//button[.='Merchant']");
    welcomebonus =() =>cy.xpath("//div[@id='radix-:rf:']");
    merchantCloser =() =>cy.xpath("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeSmall text-brand-100 css-1vaborj'])[5]");
    //Date
    datefilter =()=>cy.xpath("//button[.='Date']");
    dataname =()=>cy.xpath("//div[.='May 2025']");
    datecloser =() => cy.xpath("//*[name()='svg'][@data-testid='CloseRoundedIcon']");
    //Click History
    clckHistory =()=> cy.xpath("//button[normalize-space()='Click History']");
    clckHistoryText =()=> cy.xpath("(//p[@class='font-inter text-sm font-normal text-[#1A1A1A]'])[1]");
    //redemption
    redemptionTab =()=> cy.xpath("//button[normalize-space()='Redemptions']");
    redeemNowButton =()=> cy.xpath("//button[normalize-space()='Redeem Now']");

}

export default HeyMaxLifetimeMilesPage;
