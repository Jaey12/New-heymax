import HeyMaxPage from '../../e2e/Jayasurya/PageObject/ShopwithmaxPOM.cy';

const heyMax = new HeyMaxPage();

describe('HeyMax Homepage Validation', () => {
  before(() => {
    cy.heymaxlogin();
  });

  it('Validates Homepage Elements', () => {
    cy.wait(10000);
    heyMax.clickXpath(heyMax.btnDoItLater);
    cy.wait(8000);
    cy.get(heyMax.svgLogo).should('be.visible');
    cy.wait(8000);
    cy.get(heyMax.Shopwithmaxbtn).click();
    cy.wait(10000);

    cy.get(heyMax.filterModal).click({ force: true });
    cy.wait(8000);
    cy.get(heyMax.bestMPDOption).click({ force: true });
    cy.wait(8000);
    heyMax.checkVisible(heyMax.milesText);
    cy.wait(8000);

    const tabs = [
      heyMax.tabBusiness,
      heyMax.tabTravel,
      heyMax.tabRetail,
      heyMax.tabHealth,
      heyMax.tabTech,
      heyMax.tabEntertainment
    ];
    tabs.forEach(tab => {
      heyMax.clickXpath(tab);
      cy.wait(8000);
    });

    heyMax.clickXpath(heyMax.tabRetail);
    cy.wait(8000);
    heyMax.clickXpath(heyMax.shopeeText);
    cy.wait(5000);
    heyMax.checkText(heyMax.shopeeTitle, "Shopee");

    heyMax.checkText(heyMax.bookmarkText, "Bookmark");
    heyMax.checkText(heyMax.shareText, "Share");
    heyMax.checkText(heyMax.moreText, "More");

    heyMax.checkVisible(heyMax.doubleMilesText);
    heyMax.checkVisible(heyMax.hotMaximiser);

    const hotCategories = [
      heyMax.hotWomen,
      heyMax.hotMen,
      heyMax.hotBeauty,
      heyMax.hotHealth,
      heyMax.hotFashion
    ];
    hotCategories.forEach(cat => {
      heyMax.clickXpath(cat);
      cy.wait(5000);
    });

    heyMax.clickXpath(heyMax.hotSeeAll);
    cy.wait(5000);
    cy.go('back');
    cy.wait(10000);

    heyMax.checkVisible(heyMax.bestDealsTitle);
    const bestCategories = [
      heyMax.bestWomen,
      heyMax.bestMen,
      heyMax.bestBeauty,
      heyMax.bestHealth,
      heyMax.bestFashion
    ];
    bestCategories.forEach(cat => {
      heyMax.clickXpath(cat);
      cy.wait(6000);
    });

    heyMax.clickXpath(heyMax.bestSeeAll);
    cy.wait(5000);
    cy.go('back');
    cy.wait(5000);
    heyMax.checkVisible(heyMax.alsoLikeText);
    cy.wait(5000);
    heyMax.checkVisible(heyMax.earnMilesBtn);
    cy.wait(5000);
    heyMax.checkVisible(heyMax.cardRewardBtn);
    cy.wait(5000);

    heyMax.clickXpath(heyMax.cardRewardBtn);
    cy.wait(5000);
    heyMax.clickXpath(heyMax.closeIcon);
    cy.wait(5000);

    heyMax.checkVisible(heyMax.rewardButton);
    cy.wait(6000);
    heyMax.checkVisible(heyMax.pxText);
    cy.wait(6000);
    heyMax.clickXpath(heyMax.roundedButton);
    cy.wait(5000);
    cy.scrollTo('bottom');
    heyMax.clickXpath(heyMax.roundedButton);
    cy.wait(5000);

    heyMax.clickXpath(heyMax.backArrow1);
    cy.wait(8000);
    heyMax.clickXpath(heyMax.backArrow2);
    cy.wait(8000);
    heyMax.clickXpath(heyMax.btnDoItLater);
  });
});
