export class SliderPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('slider-app h1')).getText();
  }
}
