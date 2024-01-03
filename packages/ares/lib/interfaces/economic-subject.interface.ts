/**
 * Registration state
 * @description Enum for Registration state
 */
export enum RegistrationState {
    ACTIVE = "AKTIVNI",
    HISTORICAL = "HISTORICKY",
    NONEXISTING = "NEEXISTUJICI"
}

/**
 * Registration list
 * @description Interface for Registration list
 */
interface IRegistrationList {
    stavZdrojeVr: RegistrationState;
    stavZdrojeRes: RegistrationState;
    stavZdrojeRzp: RegistrationState;
    stavZdrojeNrpzs: RegistrationState;
    stavZdrojeRpsh: RegistrationState;
    stavZdrojeRcns: RegistrationState;
    stavZdrojeSzr: RegistrationState;
    stavZdrojeDph: RegistrationState;
    stavZdrojeSd: RegistrationState;
    stavZdrojeIr: RegistrationState;
    stavZdrojeCeu: RegistrationState;
    stavZdrojeRs: RegistrationState;
    stavZdrojeRed: RegistrationState;
}

/**
 * Address
 * @description Interface for Address
 */
interface IAddress {
    kodStatu?: string;
    nazevStatu?: string;
    kodObce?: number;
    nazevObce?: string;
    kodSpravnihoObvodu?: number;
    nazevSpravnihoObvodu?: string;
    kodMestskehoObvodu?: number;
    nazevMestskehoObvodu?: string;
    kodMestskeCastiObvodu?: number;
    kodUlice?: number;
    nazevMestskeCastiObvodu?: string;
    nazevUlice?: string;
    cisloDomovni?: number;
    kodCastiObce?: number;
    cisloOrientacni?: number;
    nazevCastiObce?: string;
    kodAdresnihoMista?: number;
    psc?: number;
    textovaAdresa?: string;
}

/**
 * Economic subject
 * @description Interface for Economic subject
 */
export interface IEconomicSubject {
    ico?: string;
    obchodniJmeno?: string;
    pravniForma?: string;
    financniUrad?: string;
    datumVzniku?: string;
    datumAktualizace?: string;
    dic?: string;
    icoId?: string;
    primarniZdroj?: string;
    czNace?: string[];
    subRegistrSzr?: string;
    dicSkDph?: string;
    seznamRegistraci?: IRegistrationList;
    sidlo?: IAddress;
    adresaDorucovaci?: IAddress;
}