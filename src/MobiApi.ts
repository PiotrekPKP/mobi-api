import { MobiAPIResponse } from "./MobiApiResponse";
import MobiApiError from "./MobiApiError";
import axios from "axios";

export default class MobiApi {
  private readonly apiUrl: string = "";
  private response?: MobiAPIResponse;
  private email?: string;
  private password?: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  sync = async () => {
    if (!this.email || !this.password)
      throw new MobiApiError("You cannot use the API without signing in!");

    const data = {
      api2: true,
      hash: true,
      device: JSON.stringify({
        available: true,
        platform: "Android",
        version: "12",
        uuid: "1f563335f9b8f2b9",
        cordova: "7.1.2",
        model: "sdk_gphone64_x86_64",
        manufacturer: "Google",
        isVirtual: false,
        serial: "123",
        appVersion: "11.2, 2020.05.07-12.16.46",
      }),
      email: this.email,
      haslo: this.password,
    };

    let formBody: string[] = [];
    for (let property in data) {
      const encodedKey = encodeURIComponent(property);
      // @ts-ignore
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    const body = formBody.join("&");

    const response = await axios.post<MobiAPIResponse>(this.apiUrl, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    this.response = response.data;
  };

  signIn = async (email: string, password: string) => {
    this.email = email;
    this.password = password;
    await this.sync();
  };
}
