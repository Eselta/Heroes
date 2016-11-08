import { HeroTourPage } from './app.po';

describe('hero-tour App', function() {
  let page: HeroTourPage;

  beforeEach(() => {
    page = new HeroTourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
