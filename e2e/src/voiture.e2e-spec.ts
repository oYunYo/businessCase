// import {browser, element, logging, by} from 'protractor';
// import {VoiturePage} from './voiture.po'
// describe('test des voitures', () => {
// // Variable contenant notre VoiturePage
// let page: VoiturePage;
// // variable que l’on utilisera pour compter le nombre de planète
//  let nbVoiture: number;
// // Avant de commencer les tests, nous demandons à notre navigateur de se
// // rendre à l’URL suivante
//  beforeEach(() => {
//  page = new VoiturePage();
//  browser.get('/voitures');
//  });

//  it('Je compte le nombre de voiture et je teste la navigation vers mon url d\'ajout', () => {
//     element.all(by.css('.lineVoiture')).then(nbLines => {
//     this.nbVoiture = nbLines.length;
//     element(by.css('#addVoitureLink')).click();
//     expect(browser.driver.getCurrentUrl()).toContain('/add');
//     });
//    });

// // Quand tout est finis, nous fermons le navigateur et nous affichons les logs
// // dans la console
//  afterEach(async () => {
//  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//  expect(logs).not.toContain(jasmine.objectContaining({
//  level: logging.Level.SEVERE,
//  } as logging.Entry));
//  });
// });