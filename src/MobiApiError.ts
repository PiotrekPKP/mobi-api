export default class MobiApiError extends Error {
  constructor(msg: string) {
    super(`An error with MobiAPI occurred: ${msg}`);
    Object.setPrototypeOf(this, MobiApiError.prototype);
  }
}
