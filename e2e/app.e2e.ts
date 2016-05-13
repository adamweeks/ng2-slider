import { SliderPage } from './app.po';

describe('slider App', function() {
  let page: SliderPage;

  beforeEach(() => {
    page = new SliderPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('slider works!');
  });
});
