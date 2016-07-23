import { CencuentraFrontendPage } from './app.po';

describe('cencuentra-frontend App', function() {
  let page: CencuentraFrontendPage;

  beforeEach(() => {
    page = new CencuentraFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
