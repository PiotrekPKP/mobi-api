import { MobiAPIResponse } from "./MobiApiResponse";
import MobiApiError from "./MobiApiError";
import axios from "axios";
import MobiApiResponseMessage from "./models/response/MobiApiResponseMessage";
import MobiApiMessage from "./models/data/MobiApiMessage";

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

    if (response.data.error)
      throw new MobiApiError("Could not sign in! Check your account data!");

    this.response = response.data;
  };

  signIn = async (email: string, password: string) => {
    this.email = email;
    this.password = password;

    await this.sync();
  };

  getRecievedMessages = async (): Promise<MobiApiMessage[]> => {
    if (!this.response) await this.sync();

    const messagesHtml = this.response!.templates!.wiadomosci;
    const messagesData = messagesHtml.substring(
      messagesHtml.indexOf("odebrane: ") + "odebrane: ".length,
      messagesHtml.indexOf("odebraneID: ") - 15
    );
    const messagesArray: MobiApiResponseMessage[] = JSON.parse(messagesData);

    return messagesArray.map((message) => ({
      id: message.id_wiadomosci,
      title: message.nazwa,
      content: message.tresc,
      sender: message.nadawca,
      sender_surname: message.nadawca_nazwisko,
      sender_name: message.nadawca_imie,
      sender_type: message.nadawca_rodzaj,
      read: message.przeczytane,
      trashed: message.kosz,
      date: new Date(messagesArray[0].czas_wpisania * 1000),
      viewers_view: message.widok_odbiorcow,
      attachments: message.zalaczniki.map((attachment) => ({
        title: attachment.tytul,
        file_id: attachment.id_pliku,
        icon: attachment.ikona,
      })),
      recievers: message.odbiorcy,
      students: message.uczniowie,
    }));
  };
}
