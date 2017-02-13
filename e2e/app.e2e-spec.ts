import { AngularTask3Page } from './app.po';

describe('angular-task3 App', function() {
  let page: AngularTask3Page;

  beforeEach(() => {
    page = new AngularTask3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
