import { Assignment1.2Page } from './app.po';

describe('assignment1.2 App', () => {
  let page: Assignment1.2Page;

  beforeEach(() => {
    page = new Assignment1.2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
