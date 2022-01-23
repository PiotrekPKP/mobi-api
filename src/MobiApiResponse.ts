export interface MobiAPIResponse {
  user: MobiAPIResponseUser;
  templates?: MobiAPIResponseTemplates;
  error?: null;
}

export interface MobiAPIResponseTemplates {
  js: string;
  css: string;
  nav: string;
  powiadomienia: string;
  edycjaprofilu: string;
  polaczonekonta: string;
  zmianahasla: string;
  mojeurzadzenia: string;
  glowna: string;
  "glowna?typ=przyszle": string;
  wiadomosci: string;
  zastepstwa: string;
  zadaniadomowe: string;
  zadaniadomowearchiwalne: string;
  sprawdziany: string;
  sprawdzianyarchiwalne: string;
  oceny: string;
  "oceny?semestr=1": string;
  "oceny?semestr=1&koncowe": string;
  "oceny?semestr=2&koncowe": string;
  zachowanie: string;
  frekwencja: string;
  kalendarz: string;
  komunikaty: string;
  "planlekcji?typ=podstawowy": string;
  "planlekcji?typ=podstawowy&kolejny_tydzien=1": string;
  "planlekcji?typ=pozalekcyjny": string;
  "planlekcji?typ=pozalekcyjny&kolejny_tydzien=1": string;
  "planlekcji?typ=swietlicowy": string;
  "planlekcji?typ=swietlicowy&kolejny_tydzien=1": string;
  "frekwencja?typ=statystyka": string;
}

export interface MobiAPIResponseUser {
  email: string | null;
  school_year?: string;
  id_global?: string;
  login?: string;
  sync_url?: string;
  type?: string;
  main?: string;
  auth_key: string | null;
  change_password?: boolean;
  password_hash?: string;
  password?: string;
}

export interface MobiAPIResponseError {
  type: string;
  unauthorized: boolean;
  logout: boolean;
  message: string;
}
