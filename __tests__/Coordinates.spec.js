import Coordinates from '../src/Coordinates';

describe('Coordinates Objects', () => {
  test('Library exists', () => {
    expect(Coordinates).toBeTruthy();
  });
  test('Create Coordinates', () => {
    const coords = new Coordinates(0, 0);
    expect(coords.toString()).toEqual('0,0');
  });
});
