import { AngularLsIssuePage } from './app.po';

describe('angular-ls-issue App', () => {
  let page: AngularLsIssuePage;

  beforeEach(() => {
    page = new AngularLsIssuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
