/**
 * WGS84 Coordinates
 */
class Coordinates {
  /**
   * Coordinate constructor
   * @param {Number} latitude  [description]
   * @param {Number} longitude [description]
   */
  constructor(latitude, longitude) {
    if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
      throw new Error(
        `Invalid Coordinates object: (${latitude}, ${longitude})`
      );
    }
    this.lat = latitude;
    this.lng = longitude;
  }
  /**
   * returns a string representation with lat,lng
   * @return {String} [description]
   */
  toString() {
    return `(${this.lat},${this.lng})`;
  }
}

export default Coordinates;
