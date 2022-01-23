export interface MobiApiResponseMessageAttachment {
  id_pliku: number;
  tytul: string;
  ikona: string;
}

interface MobiApiResponseMessage {
  id_wiadomosci: number;
  nazwa: string;
  tresc: string;
  nadawca: number;
  nadawca_nazwisko: string;
  nadawca_imie: string;
  nadawca_rodzaj: string;
  przeczytane: boolean;
  kosz: boolean;
  czas_wpisania: number;
  widok_odbiorcow: boolean;
  zalaczniki: MobiApiResponseMessageAttachment[];
  odbiorcy: any[];
  uczniowie?: any;
}

export default MobiApiResponseMessage;
