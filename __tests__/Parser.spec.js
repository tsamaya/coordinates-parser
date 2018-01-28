import * as Parser from '../src/Parser';

describe('Parser Library', () => {
  test('Library exists', () => {
    expect(Parser).toBeTruthy();
  });

  describe('isValid functino', () => {
    test('50°4\'17.698" north, 14°24\'2.826" east', () => {
      expect(
        Parser.isValid('50°4\'17.698" north, 14°24\'2.826" east')
      ).toBeTruthy();
    });

    test('50d4m17.698N 14d24m2.826E', () => {
      expect(Parser.isValid('50d4m17.698N 14d24m2.826E')).toBeTruthy();
    });

    test('40:26:46.302N 79:56:55.903W', () => {
      expect(Parser.isValid('40:26:46.302N 79:56:55.903W')).toBeTruthy();
    });

    test('49°59\'56.948"N, 15°48\'22.989"E', () => {
      expect(Parser.isValid('49°59\'56.948"N, 15°48\'22.989"E')).toBeTruthy();
    });

    test('49.9991522N, 15.8063858E', () => {
      expect(Parser.isValid('49.9991522N, 15.8063858E')).toBeTruthy();
    });

    test("N 49° 59.94913', E 15° 48.38315'", () => {
      expect(Parser.isValid("N 49° 59.94913', E 15° 48.38315'")).toBeTruthy();
    });

    test('40°26′47″N 79°58′36″W', () => {
      expect(Parser.isValid('40°26′47″N 79°58′36″W')).toBeTruthy();
    });

    test('40°26\'47"N 79°58\'36"W', () => {
      expect(Parser.isValid('40°26\'47"N 79°58\'36"W')).toBeTruthy();
    });

    test('40d 26′ 47″ N 79d 58′ 36″ W', () => {
      expect(Parser.isValid('40d 26′ 47″ N 79d 58′ 36″ W')).toBeTruthy();
    });

    test('40.446195N 79.948862W', () => {
      expect(Parser.isValid('40.446195N 79.948862W')).toBeTruthy();
    });

    test('40,446195° 79,948862°', () => {
      expect(Parser.isValid('40,446195° 79,948862°')).toBeTruthy();
    });

    test('40° 26.7717, -79° 56.93172', () => {
      expect(Parser.isValid('40° 26.7717, -79° 56.93172')).toBeTruthy();
    });

    test('40.446195, -79.948862', () => {
      expect(Parser.isValid('40.446195, -79.948862')).toBeTruthy();
    });

    test('37° 45\' 16.3502" N 122° 26\' 33.1594" W', () => {
      expect(
        Parser.isValid('37° 45\' 16.3502" N 122° 26\' 33.1594" W')
      ).toBeTruthy();
    });

    test('N 37° 45′ 16.3502″ W 122° 26′ 33.1594″', () => {
      expect(
        Parser.isValid('N 37° 45′ 16.3502″ W 122° 26′ 33.1594″')
      ).toBeTruthy();
    });

    test('N 14° 45.6543′ W 122° 26.8591′', () => {
      expect(Parser.isValid('N 14° 45.6543′ W 122° 26.8591′')).toBeTruthy();
    });

    test('+37° 45′ 16.3502″ +122° 26′ 33.1594″', () => {
      expect(
        Parser.isValid('+37° 45′ 16.3502″ +122° 26′ 33.1594″')
      ).toBeTruthy();
    });

    test('-37° 45′ 16.3502″ -122° 26′ 33.1594″', () => {
      expect(
        Parser.isValid('-37° 45′ 16.3502″ -122° 26′ 33.1594″')
      ).toBeTruthy();
    });

    test('e 114° 45.6543′ S 22° 26.8591′', () => {
      expect(Parser.isValid('e 114° 45.6543′ S 22° 26.8591′')).toBeTruthy();
    });

    test('W 122° 26.8591′ N 14° 45.6543′', () => {
      expect(Parser.isValid('W 122° 26.8591′ N 14° 45.6543′')).toBeTruthy();
    });

    test('45.188529,5.724524', () => {
      expect(Parser.isValid('45.188529,5.724524')).toBeTruthy();
    });

    test('45.188529, 5.724524', () => {
      expect(Parser.isValid('45.188529,5.724524')).toBeTruthy();
    });

    test('-45.188529,-5.724524', () => {
      expect(Parser.isValid('-45.188529,-5.724524')).toBeTruthy();
    });

    test('-45.188529, -5.724524', () => {
      expect(Parser.isValid('-45.188529,-5.724524')).toBeTruthy();
    });

    test('N45.188529, E5.724524', () => {
      expect(Parser.isValid('N45.188529, E5.724524')).toBeTruthy();
    });

    test('N 45.188529, E 5.724524', () => {
      expect(Parser.isValid('N 45.188529, E 5.724524')).toBeTruthy();
    });

    test('45.188529N, 5.724524E', () => {
      expect(Parser.isValid('45.188529N, 5.724524E')).toBeTruthy();
    });

    test('45.188529 N, 5.724524 E', () => {
      expect(Parser.isValid('45.188529 N, 5.724524 E')).toBeTruthy();
    });

    test("45° 11.31174' N, 5° 43.47144' E", () => {
      expect(Parser.isValid("45° 11.31174' N, 5° 43.47144' E")).toBeTruthy();
    });

    test("45° 11.31174'N 5° 43.47144'E", () => {
      expect(Parser.isValid("45° 11.31174'N 5° 43.47144'E")).toBeTruthy();
    });

    test("N 45° 11.31174' E 5° 43.47144'", () => {
      expect(Parser.isValid("N 45° 11.31174' E 5° 43.47144'")).toBeTruthy();
    });
    test('N 45° 11\' 18.7044", E 5° 43\' 28.2864"', () => {
      expect(
        Parser.isValid('N 45° 11\' 18.7044", E 5° 43\' 28.2864"')
      ).toBeTruthy();
    });
  });
  /*
  "50°4'17.698\" north, 14°24'2.826\" east",
  "40:26:46N,79:56:55W",
  "40:26:46.302N 79:56:55.903W",
  "49°59'56.948\"N, 15°48'22.989\"E",
  "50d4m17.698N 14d24m2.826E",
  "49.9991522N, 15.8063858E",
  "N 49° 59.94913', E 15° 48.38315'",
  "40°26′47″N 79°58′36″W",
  "40°26'47\"N 79°58'36\"W",
  "40d 26′ 47″ N 79d 58′ 36″ W",
  "40.446195N 79.948862W",
  "40,446195° 79,948862°",
  "40° 26.7717, -79° 56.93172",
  "40.446195, -79.948862",
  "37° 45' 16.3502\" N 122° 26' 33.1594\" W",
  "37° 45’ 16.3502” N 122° 26’ 33.1594” W",
  "N 37° 45′ 16.3502″ W 122° 26′ 33.1594″",
  "N 14° 45.6543′ W 122° 26.8591′",
  "+37° 45′ 16.3502″ +122° 26′ 33.1594″",
  "-37° 45′ 16.3502″ -122° 26′ 33.1594″",
  "e 114° 45.6543′ S 22° 26.8591′",
  "W 122° 26.8591′ N 14° 45.6543′",
  '45.188529,5.724524',
  'N45.188529, E5.724524',
  'N 45.188529, E 5.724524',
  '45.188529N, 5.724524E',
  '45.188529 N, 5.724524 E',
  '45° 11.31174\' N, 5° 43.47144\' E',
  '45° 11.31174\'N 5° 43.47144\'E',
  'N 45° 11.31174\' E 5° 43.47144\'',
  'N 45° 11\' 18.7044", E 5° 43\' 28.2864"',
  'N 45° 11\' 18,7044", E 5° 43\' 28,2864"',
  'N 45° 11\' 18.7044", E 5° 43\' 28.2864"',
*/
});
