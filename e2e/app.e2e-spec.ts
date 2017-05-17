import { LoginGridsPage } from './app.po';

describe('login-grids App', () => {
  let page: LoginGridsPage;

  beforeEach(() => {
    page = new LoginGridsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
