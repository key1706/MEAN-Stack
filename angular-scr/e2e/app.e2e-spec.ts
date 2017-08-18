import { AngularScrPage } from './app.po';

describe('angular-scr App', function() {
  let page: AngularScrPage;

  beforeEach(() => {
    page = new AngularScrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
