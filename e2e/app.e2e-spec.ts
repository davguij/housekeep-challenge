import { HousekeepChallengePage } from './app.po';

describe('housekeep-challenge App', function() {
  let page: HousekeepChallengePage;

  beforeEach(() => {
    page = new HousekeepChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
