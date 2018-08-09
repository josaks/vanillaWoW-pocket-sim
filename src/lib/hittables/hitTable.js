export default class HitTable {
  constructor(){
    if (this.getCoefficient === undefined) {
      // or maybe test typeof this.method === "function"
      throw new TypeError("Must override method");
    }
  }
};
