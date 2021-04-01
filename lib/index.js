class URLBuilder {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.search = new Params();
  }
  get URL() {
    const search = this.search.format();
    return `${this.baseURL}${search}`;
  }
}
export default URLBuilder;
class Params {
  constructor() {
    this.params = {};
  }
  format() {
    const keys = Object.keys(this.params);
    if (keys.length === 0) {
      return "";
    }
    const params = keys.map((key, i) => {
      const value = encodeURIComponent(this.params[key]);
      return `${key}=${value}`;
    });
    return "?" + params.join("&");
  }
  set(key, value) {
    this.params[key] = value;
  }
  del(key) {
    delete this.params[key];
  }
}