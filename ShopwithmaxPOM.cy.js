class HeyMaxPage {
  btnDoItLater = "(//button[normalize-space()='Do it later'])[1]";
  svgLogo = "svg[width='100']";
  Shopwithmaxbtn = '#home-page-hub-carousel > :nth-child(3) > .relative > .flex';
  filterModal = '.mx-auto > .w-full.gap-3 > .relative';
  bestMPDOption = '#best_mpd > .flex > .h-full';
  milesText = "//p[normalize-space()='15000 Max Miles']";
  tabBusiness = "//p[normalize-space()='Business & Professional Services']";
  tabTravel = "//p[normalize-space()='Travel & Transportation']";
  tabRetail = "//p[normalize-space()='Retail & Shopping']";
  tabHealth = "//p[normalize-space()='Health, Beauty & Wellness']";
  tabTech = "//p[normalize-space()='Technology & Electronics']";
  tabEntertainment = "//p[normalize-space()='Entertainment & Education']";
  shopeeText = "//span[normalize-space()='Shopee']";
  shopeeTitle = "//h1[normalize-space()='Shopee']";
  bookmarkText = "//p[normalize-space()='Bookmark']";
  shareText = "//p[normalize-space()='Share']";
  moreText = "//p[normalize-space()='More']";
  doubleMilesText = "(//p[@class='text-lg font-semibold text-[#1A1A1A]'])[1]";
  hotMaximiser = "(//div[@class='font-inter text-lg font-semibold'][contains(text(),'Hot amongst Maxers 🔥')])[2]";
  hotWomen = "(//p[@class='text-sm false'][normalize-space()='Women Clothes'])[3]";
  hotMen = "(//p[@class='text-sm false'][normalize-space()='Men Clothes'])[3]";
  hotBeauty = "(//p[@class='text-sm false'][normalize-space()='Beauty'])[3]";
  hotHealth = "(//p[@class='text-sm false'][normalize-space()='Health'])[3]";
  hotFashion = "(//p[@class='text-sm false'][normalize-space()='Fashion Accessories'])[3]";
  hotSeeAll = "(//span[@class='font-inter text-xs font-semibold'][normalize-space()='See All'])[3]";
  bestDealsTitle = "(//div[@class='font-inter text-lg font-semibold'][contains(text(),'Best miles per $ deals ⭐')])[2]";
  bestWomen = "(//p[@class='text-sm false'][normalize-space()='Women Clothes'])[4]";
  bestMen = "(//p[@class='text-sm false'][normalize-space()='Men Clothes'])[4]";
  bestBeauty = "(//p[@class='text-sm false'][normalize-space()='Beauty'])[4]";
  bestHealth = "(//p[@class='text-sm false'][normalize-space()='Health'])[4]";
  bestFashion = "(//p[@class='text-sm false'][normalize-space()='Fashion Accessories'])[4]";
  bestSeeAll = "(//span[@class='font-inter text-xs font-semibold'][normalize-space()='See All'])[4]";
  alsoLikeText = "(//p[@class='flex w-3/4 pt-4 text-lg font-semibold text-[#1A1A1A]'])[1]";
  earnMilesBtn = "(//button[normalize-space()='Earn Max Miles'])[1]";
  cardRewardBtn = "(//button[normalize-space()='Card Rewards'])[1]";
  closeIcon = "(//*[name()='svg'][@class='false'])[1]";
  rewardButton = "(//button[contains(@class,'flex w-full items-center justify-center rounded-full bg-[#5046C5]')])[1]";
  pxText = "(//p[contains(@class,'px-6 py-2 font-inter text-sm font-semibold md:py-3 text-[#5046C5]')])[1]";
  roundedButton = "(//div[contains(@class,'flex w-full cursor-pointer justify-center rounded-full bg-[#F3F5FB] px-4 py-2 text-base font-semibold text-[#5046C5]')])[1]";
  backArrow1 = "(//*[name()='svg'][contains(@class,'h-5 w-5 rotate-180')])[1]";
  backArrow2 = "(//*[name()='svg'][@class='h-5 w-5 rotate-180'])[1]";

  clickXpath(selector) {
    cy.xpath(selector).click();
  }

  checkText(selector, expectedText) {
    cy.xpath(selector).should('have.text', expectedText);
  }

  checkVisible(selector) {
    cy.xpath(selector).should('be.visible');
  }
}

export default HeyMaxPage;
