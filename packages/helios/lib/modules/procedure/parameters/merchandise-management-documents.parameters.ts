// Classes
import { HeliosProcedureParameter } from "../classes/parameter.class";
import { HeliosProcedureParameters } from "../classes/parameters.class";

// Enums
import { HeliosProcedureParameterType } from "../enums/parameter-type.enum";
import { MerchandiseManagementDocumentType } from "../../../enums/merchandise-management-document-type.enum";

/**
 * Helios merchandise management documents procedure parameters
 * @description Parameters for merchandise management documents procedure
 */
export class HeliosMerchandiseManagementDocumentsProcedureParameters extends HeliosProcedureParameters {

    protected druhPohybuZbo: HeliosProcedureParameter<MerchandiseManagementDocumentType> = new HeliosProcedureParameter<MerchandiseManagementDocumentType>("DruhPohybuZbo", HeliosProcedureParameterType.TINYINT);
    public get DruhPohybuZbo(): MerchandiseManagementDocumentType | undefined | null { return this.druhPohybuZbo.Value; };
    public set DruhPohybuZbo(value: MerchandiseManagementDocumentType | undefined | null) { this.druhPohybuZbo.Value = value; };

    protected iDSklad: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("IDSklad", HeliosProcedureParameterType.NVARCHAR);
    public get IDSklad(): string | undefined | null { return this.iDSklad.Value; };
    public set IDSklad(value: string | undefined | null) { this.iDSklad.Value = value; };

    protected radaDokladu: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("RadaDokladu", HeliosProcedureParameterType.NVARCHAR);
    public get RadaDokladu(): string | undefined | null { return this.radaDokladu.Value; };
    public set RadaDokladu(value: string | undefined | null) { this.radaDokladu.Value = value; };

    protected druhPohybuPrevod: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("DruhPohybuPrevod", HeliosProcedureParameterType.TINYINT);
    public get DruhPohybuPrevod(): number | undefined | null { return this.druhPohybuPrevod.Value; };
    public set DruhPohybuPrevod(value: number | undefined | null) { this.druhPohybuPrevod.Value = value; };

    protected poradoveCislo: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("PoradoveCislo", HeliosProcedureParameterType.INT);
    public get PoradoveCislo(): number | undefined | null { return this.poradoveCislo.Value; };
    public set PoradoveCislo(value: number | undefined | null) { this.poradoveCislo.Value = value; };

    protected iDPosta: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDPosta", HeliosProcedureParameterType.INT);
    public get IDPosta(): number | undefined | null { return this.iDPosta.Value; };
    public set IDPosta(value: number | undefined | null) { this.iDPosta.Value = value; };

    protected cisloOrg: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CisloOrg", HeliosProcedureParameterType.INT);
    public get CisloOrg(): number | undefined | null { return this.cisloOrg.Value; };
    public set CisloOrg(value: number | undefined | null) { this.cisloOrg.Value = value; };

    protected datPorizeni: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatPorizeni", HeliosProcedureParameterType.DATETIME);
    public get DatPorizeni(): Date | undefined | null { return this.datPorizeni.Value; };
    public set DatPorizeni(value: Date | undefined | null) { this.datPorizeni.Value = value; };

    protected stredNaklad: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("StredNaklad", HeliosProcedureParameterType.NVARCHAR);
    public get StredNaklad(): string | undefined | null { return this.stredNaklad.Value; };
    public set StredNaklad(value: string | undefined | null) { this.stredNaklad.Value = value; };

    protected stredVynos: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("StredVynos", HeliosProcedureParameterType.NVARCHAR);
    public get StredVynos(): string | undefined | null { return this.stredVynos.Value; };
    public set StredVynos(value: string | undefined | null) { this.stredVynos.Value = value; };

    protected idSkladPrevodu: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("IdSkladPrevodu", HeliosProcedureParameterType.NVARCHAR);
    public get IdSkladPrevodu(): string | undefined | null { return this.idSkladPrevodu.Value; };
    public set IdSkladPrevodu(value: string | undefined | null) { this.idSkladPrevodu.Value = value; };

    protected typPrevodky: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("TypPrevodky", HeliosProcedureParameterType.NVARCHAR);
    public get TypPrevodky(): string | undefined | null { return this.typPrevodky.Value; };
    public set TypPrevodky(value: string | undefined | null) { this.typPrevodky.Value = value; };

    protected dic: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("DIC", HeliosProcedureParameterType.NVARCHAR);
    public get DIC(): string | undefined | null { return this.dic.Value; };
    public set DIC(value: string | undefined | null) { this.dic.Value = value; };

    protected prijemce: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Prijemce", HeliosProcedureParameterType.INT);
    public get Prijemce(): number | undefined | null { return this.prijemce.Value; };
    public set Prijemce(value: number | undefined | null) { this.prijemce.Value = value; };

    protected mistoUrceni: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("MistoUrceni", HeliosProcedureParameterType.INT);
    public get MistoUrceni(): number | undefined | null { return this.mistoUrceni.Value; };
    public set MistoUrceni(value: number | undefined | null) { this.mistoUrceni.Value = value; };

    protected datPovinnostiFa: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatPovinnostiFa", HeliosProcedureParameterType.DATETIME);
    public get DatPovinnostiFa(): Date | undefined | null { return this.datPovinnostiFa.Value; };
    public set DatPovinnostiFa(value: Date | undefined | null) { this.datPovinnostiFa.Value = value; };

    protected duzp: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DUZP", HeliosProcedureParameterType.DATETIME);
    public get DUZP(): Date | undefined | null { return this.duzp.Value; };
    public set DUZP(value: Date | undefined | null) { this.duzp.Value = value; };

    protected splatnost: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("Splatnost", HeliosProcedureParameterType.DATETIME);
    public get Splatnost(): Date | undefined | null { return this.splatnost.Value; };
    public set Splatnost(value: Date | undefined | null) { this.splatnost.Value = value; };

    protected uKod: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("UKod", HeliosProcedureParameterType.INT);
    public get UKod(): number | undefined | null { return this.uKod.Value; };
    public set UKod(value: number | undefined | null) { this.uKod.Value = value; };

    protected sazbaDPH: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SazbaDPH", HeliosProcedureParameterType.NUMERIC);
    public get SazbaDPH(): number | undefined | null { return this.sazbaDPH.Value; };
    public set SazbaDPH(value: number | undefined | null) { this.sazbaDPH.Value = value; };

    protected sazbaSD: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SazbaSD", HeliosProcedureParameterType.NUMERIC);
    public get SazbaSD(): number | undefined | null { return this.sazbaSD.Value; };
    public set SazbaSD(value: number | undefined | null) { this.sazbaSD.Value = value; };

    protected formaUhrady: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("FormaUhrady", HeliosProcedureParameterType.NVARCHAR);
    public get FormaUhrady(): string | undefined | null { return this.formaUhrady.Value; };
    public set FormaUhrady(value: string | undefined | null) { this.formaUhrady.Value = value; };

    protected formaDopravy: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("FormaDopravy", HeliosProcedureParameterType.NVARCHAR);
    public get FormaDopravy(): string | undefined | null { return this.formaDopravy.Value; };
    public set FormaDopravy(value: string | undefined | null) { this.formaDopravy.Value = value; };

    protected konstSymbol: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("KonstSymbol", HeliosProcedureParameterType.NVARCHAR);
    public get KonstSymbol(): string | undefined | null { return this.konstSymbol.Value; };
    public set KonstSymbol(value: string | undefined | null) { this.konstSymbol.Value = value; };

    protected poznamka: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Poznamka", HeliosProcedureParameterType.NVARCHAR);
    public get Poznamka(): string | undefined | null { return this.poznamka.Value; };
    public set Poznamka(value: string | undefined | null) { this.poznamka.Value = value; };

    protected nOkruhCislo: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("NOkruhCislo", HeliosProcedureParameterType.NVARCHAR);
    public get NOkruhCislo(): string | undefined | null { return this.nOkruhCislo.Value; };
    public set NOkruhCislo(value: string | undefined | null) { this.nOkruhCislo.Value = value; };

    protected cisloZakazky: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("CisloZakazky", HeliosProcedureParameterType.NVARCHAR);
    public get CisloZakazky(): string | undefined | null { return this.cisloZakazky.Value; };
    public set CisloZakazky(value: string | undefined | null) { this.cisloZakazky.Value = value; };

    protected mena: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Mena", HeliosProcedureParameterType.NVARCHAR);
    public get Mena(): string | undefined | null { return this.mena.Value; };
    public set Mena(value: string | undefined | null) { this.mena.Value = value; };

    protected kurz: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Kurz", HeliosProcedureParameterType.NUMERIC);
    public get Kurz(): number | undefined | null { return this.kurz.Value; };
    public set Kurz(value: number | undefined | null) { this.kurz.Value = value; };

    protected jednotkaMeny: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("JednotkaMeny", HeliosProcedureParameterType.INT);
    public get JednotkaMeny(): number | undefined | null { return this.jednotkaMeny.Value; };
    public set JednotkaMeny(value: number | undefined | null) { this.jednotkaMeny.Value = value; };

    protected kurzEuro: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("KurzEuro", HeliosProcedureParameterType.NUMERIC);
    public get KurzEuro(): number | undefined | null { return this.kurzEuro.Value; };
    public set KurzEuro(value: number | undefined | null) { this.kurzEuro.Value = value; };

    protected vstupniCena: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("VstupniCena", HeliosProcedureParameterType.TINYINT);
    public get VstupniCena(): number | undefined | null { return this.vstupniCena.Value; };
    public set VstupniCena(value: number | undefined | null) { this.vstupniCena.Value = value; };

    protected sleva: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Sleva", HeliosProcedureParameterType.NUMERIC);
    public get Sleva(): number | undefined | null { return this.sleva.Value; };
    public set Sleva(value: number | undefined | null) { this.sleva.Value = value; };

    protected stav: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Stav", HeliosProcedureParameterType.TINYINT);
    public get Stav(): number | undefined | null { return this.stav.Value; };
    public set Stav(value: number | undefined | null) { this.stav.Value = value; };

    protected nazev: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Nazev", HeliosProcedureParameterType.NVARCHAR);
    public get Nazev(): string | undefined | null { return this.nazev.Value; };
    public set Nazev(value: string | undefined | null) { this.nazev.Value = value; };

    protected code: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Code", HeliosProcedureParameterType.NVARCHAR);
    public get Code(): string | undefined | null { return this.code.Value; };
    public set Code(value: string | undefined | null) { this.code.Value = value; };

    protected doprDispo: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("DoprDispo", HeliosProcedureParameterType.NVARCHAR);
    public get DoprDispo(): string | undefined | null { return this.doprDispo.Value; };
    public set DoprDispo(value: string | undefined | null) { this.doprDispo.Value = value; };

    protected popisDodavky: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("PopisDodavky", HeliosProcedureParameterType.NVARCHAR);
    public get PopisDodavky(): string | undefined | null { return this.popisDodavky.Value; };
    public set PopisDodavky(value: string | undefined | null) { this.popisDodavky.Value = value; };

    protected terminDodavky: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("TerminDodavky", HeliosProcedureParameterType.NVARCHAR);
    public get TerminDodavky(): string | undefined | null { return this.terminDodavky.Value; };
    public set TerminDodavky(value: string | undefined | null) { this.terminDodavky.Value = value; };

    protected puvod: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Puvod", HeliosProcedureParameterType.NVARCHAR);
    public get Puvod(): string | undefined | null { return this.puvod.Value; };
    public set Puvod(value: string | undefined | null) { this.puvod.Value = value; };

    protected cisReferatu: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("CisReferatu", HeliosProcedureParameterType.NVARCHAR);
    public get CisReferatu(): string | undefined | null { return this.cisReferatu.Value; };
    public set CisReferatu(value: string | undefined | null) { this.cisReferatu.Value = value; };

    protected referat: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Referat", HeliosProcedureParameterType.NVARCHAR);
    public get Referat(): string | undefined | null { return this.referat.Value; };
    public set Referat(value: string | undefined | null) { this.referat.Value = value; };

    protected text1: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Text1", HeliosProcedureParameterType.NVARCHAR);
    public get Text1(): string | undefined | null { return this.text1.Value; };
    public set Text1(value: string | undefined | null) { this.text1.Value = value; };

    protected text2: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Text2", HeliosProcedureParameterType.NVARCHAR);
    public get Text2(): string | undefined | null { return this.text2.Value; };
    public set Text2(value: string | undefined | null) { this.text2.Value = value; };

    protected text3: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Text3", HeliosProcedureParameterType.NVARCHAR);
    public get Text3(): string | undefined | null { return this.text3.Value; };
    public set Text3(value: string | undefined | null) { this.text3.Value = value; };

    protected zaokrouhleniFak: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ZaokrouhleniFak", HeliosProcedureParameterType.SMALLINT);
    public get ZaokrouhleniFak(): number | undefined | null { return this.zaokrouhleniFak.Value; };
    public set ZaokrouhleniFak(value: number | undefined | null) { this.zaokrouhleniFak.Value = value; };

    protected zaokrouhleniFakVal: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ZaokrouhleniFakVal", HeliosProcedureParameterType.SMALLINT);
    public get ZaokrouhleniFakVal(): number | undefined | null { return this.zaokrouhleniFakVal.Value; };
    public set ZaokrouhleniFakVal(value: number | undefined | null) { this.zaokrouhleniFakVal.Value = value; };

    protected pomCislo: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("PomCislo", HeliosProcedureParameterType.NVARCHAR);
    public get PomCislo(): string | undefined | null { return this.pomCislo.Value; };
    public set PomCislo(value: string | undefined | null) { this.pomCislo.Value = value; };

    protected navaznyDoklad: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("NavaznyDoklad", HeliosProcedureParameterType.INT);
    public get NavaznyDoklad(): number | undefined | null { return this.navaznyDoklad.Value; };
    public set NavaznyDoklad(value: number | undefined | null) { this.navaznyDoklad.Value = value; };

    protected navaznyDobropis: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("NavaznyDobropis", HeliosProcedureParameterType.INT);
    public get NavaznyDobropis(): number | undefined | null { return this.navaznyDobropis.Value; };
    public set NavaznyDobropis(value: number | undefined | null) { this.navaznyDobropis.Value = value; };

    protected datUhrady: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatUhrady", HeliosProcedureParameterType.DATETIME);
    public get DatUhrady(): Date | undefined | null { return this.datUhrady.Value; };
    public set DatUhrady(value: Date | undefined | null) { this.datUhrady.Value = value; };

    protected iDPrikaz: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDPrikaz", HeliosProcedureParameterType.INT);
    public get IDPrikaz(): number | undefined | null { return this.iDPrikaz.Value; };
    public set IDPrikaz(value: number | undefined | null) { this.iDPrikaz.Value = value; };

    protected iDBankSpoj: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDBankSpoj", HeliosProcedureParameterType.INT);
    public get IDBankSpoj(): number | undefined | null { return this.iDBankSpoj.Value; };
    public set IDBankSpoj(value: number | undefined | null) { this.iDBankSpoj.Value = value; };

    protected iDStazka: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDStazka", HeliosProcedureParameterType.INT);
    public get IDStazka(): number | undefined | null { return this.iDStazka.Value; };
    public set IDStazka(value: number | undefined | null) { this.iDStazka.Value = value; };

    protected iDVozidlo: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDVozidlo", HeliosProcedureParameterType.INT);
    public get IDVozidlo(): number | undefined | null { return this.iDVozidlo.Value; };
    public set IDVozidlo(value: number | undefined | null) { this.iDVozidlo.Value = value; };

    protected cisloZam: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("CisloZam", HeliosProcedureParameterType.INT);
    public get CisloZam(): number | undefined | null { return this.cisloZam.Value; };
    public set CisloZam(value: number | undefined | null) { this.cisloZam.Value = value; };

    protected dodFak: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("DodFak", HeliosProcedureParameterType.NVARCHAR);
    public get DodFak(): string | undefined | null { return this.dodFak.Value; };
    public set DodFak(value: string | undefined | null) { this.dodFak.Value = value; };

    protected navaznaObjednavka: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("NavaznaObjednavka", HeliosProcedureParameterType.NVARCHAR);
    public get NavaznaObjednavka(): string | undefined | null { return this.navaznaObjednavka.Value; };
    public set NavaznaObjednavka(value: string | undefined | null) { this.navaznaObjednavka.Value = value; };

    protected splneno: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("Splneno", HeliosProcedureParameterType.BIT);
    public get Splneno(): boolean | undefined | null { return this.splneno.Value; };
    public set Splneno(value: boolean | undefined | null) { this.splneno.Value = value; };

    protected datumMixu: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatumMixu", HeliosProcedureParameterType.DATETIME);
    public get DatumMixu(): Date | undefined | null { return this.datumMixu.Value; };
    public set DatumMixu(value: Date | undefined | null) { this.datumMixu.Value = value; };

    protected nastaveniSlev: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("NastaveniSlev", HeliosProcedureParameterType.SMALLINT);
    public get NastaveniSlev(): number | undefined | null { return this.nastaveniSlev.Value; };
    public set NastaveniSlev(value: number | undefined | null) { this.nastaveniSlev.Value = value; };

    protected stavRezervace: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("StavRezervace", HeliosProcedureParameterType.NCHAR);
    public get StavRezervace(): string | undefined | null { return this.stavRezervace.Value; };
    public set StavRezervace(value: string | undefined | null) { this.stavRezervace.Value = value; };

    protected modul: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Modul", HeliosProcedureParameterType.TINYINT);
    public get Modul(): number | undefined | null { return this.modul.Value; };
    public set Modul(value: number | undefined | null) { this.modul.Value = value; };

    protected hlidanyDoklad: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("HlidanyDoklad", HeliosProcedureParameterType.NCHAR);
    public get HlidanyDoklad(): string | undefined | null { return this.hlidanyDoklad.Value; };
    public set HlidanyDoklad(value: string | undefined | null) { this.hlidanyDoklad.Value = value; };

    protected tiskovyForm: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("TiskovyForm", HeliosProcedureParameterType.INT);
    public get TiskovyForm(): number | undefined | null { return this.tiskovyForm.Value; };
    public set TiskovyForm(value: number | undefined | null) { this.tiskovyForm.Value = value; };

    protected stornoDoklad: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("StornoDoklad", HeliosProcedureParameterType.INT);
    public get StornoDoklad(): number | undefined | null { return this.stornoDoklad.Value; };
    public set StornoDoklad(value: number | undefined | null) { this.stornoDoklad.Value = value; };

    protected zadanaCastkaZaoKc: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ZadanaCastkaZaoKc", HeliosProcedureParameterType.NUMERIC);
    public get ZadanaCastkaZaoKc(): number | undefined | null { return this.zadanaCastkaZaoKc.Value; };
    public set ZadanaCastkaZaoKc(value: number | undefined | null) { this.zadanaCastkaZaoKc.Value = value; };

    protected zadanaCastkaZaoVal: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ZadanaCastkaZaoVal", HeliosProcedureParameterType.NUMERIC);
    public get ZadanaCastkaZaoVal(): number | undefined | null { return this.zadanaCastkaZaoVal.Value; };
    public set ZadanaCastkaZaoVal(value: number | undefined | null) { this.zadanaCastkaZaoVal.Value = value; };

    protected stavPrevodu: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("StavPrevodu", HeliosProcedureParameterType.SMALLINT);
    public get StavPrevodu(): number | undefined | null { return this.stavPrevodu.Value; };
    public set StavPrevodu(value: number | undefined | null) { this.stavPrevodu.Value = value; };

    protected idjcd: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDJCD", HeliosProcedureParameterType.INT);
    public get IDJCD(): number | undefined | null { return this.idjcd.Value; };
    public set IDJCD(value: number | undefined | null) { this.idjcd.Value = value; };

    protected kontaktZam: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("KontaktZam", HeliosProcedureParameterType.INT);
    public get KontaktZam(): number | undefined | null { return this.kontaktZam.Value; };
    public set KontaktZam(value: number | undefined | null) { this.kontaktZam.Value = value; };

    protected idObdobiStavu: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IdObdobiStavu", HeliosProcedureParameterType.INT);
    public get IdObdobiStavu(): number | undefined | null { return this.idObdobiStavu.Value; };
    public set IdObdobiStavu(value: number | undefined | null) { this.idObdobiStavu.Value = value; };

    protected kontaktOsoba: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("KontaktOsoba", HeliosProcedureParameterType.INT);
    public get KontaktOsoba(): number | undefined | null { return this.kontaktOsoba.Value; };
    public set KontaktOsoba(value: number | undefined | null) { this.kontaktOsoba.Value = value; };

    protected nabidka: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Nabidka", HeliosProcedureParameterType.INT);
    public get Nabidka(): number | undefined | null { return this.nabidka.Value; };
    public set Nabidka(value: number | undefined | null) { this.nabidka.Value = value; };

    protected nabidkaCenik: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("NabidkaCenik", HeliosProcedureParameterType.INT);
    public get NabidkaCenik(): number | undefined | null { return this.nabidkaCenik.Value; };
    public set NabidkaCenik(value: number | undefined | null) { this.nabidkaCenik.Value = value; };

    protected poziceZaokrDPH: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("PoziceZaokrDPH", HeliosProcedureParameterType.TINYINT);
    public get PoziceZaokrDPH(): number | undefined | null { return this.poziceZaokrDPH.Value; };
    public set PoziceZaokrDPH(value: number | undefined | null) { this.poziceZaokrDPH.Value = value; };

    protected hraniceZaokrDPH: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("HraniceZaokrDPH", HeliosProcedureParameterType.TINYINT);
    public get HraniceZaokrDPH(): number | undefined | null { return this.hraniceZaokrDPH.Value; };
    public set HraniceZaokrDPH(value: number | undefined | null) { this.hraniceZaokrDPH.Value = value; };

    protected zaokrDPHvaluty: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ZaokrDPHvaluty", HeliosProcedureParameterType.TINYINT);
    public get ZaokrDPHvaluty(): number | undefined | null { return this.zaokrDPHvaluty.Value; };
    public set ZaokrDPHvaluty(value: number | undefined | null) { this.zaokrDPHvaluty.Value = value; };

    protected iDstin: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("IDstin", HeliosProcedureParameterType.INT);
    public get IDstin(): number | undefined | null { return this.iDstin.Value; };
    public set IDstin(value: number | undefined | null) { this.iDstin.Value = value; };

    protected rezim: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("Rezim", HeliosProcedureParameterType.NVARCHAR);
    public get Rezim(): string | undefined | null { return this.rezim.Value; };
    public set Rezim(value: string | undefined | null) { this.rezim.Value = value; };

    protected cscd: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("CSCD", HeliosProcedureParameterType.BIT);
    public get CSCD(): boolean | undefined | null { return this.cscd.Value; };
    public set CSCD(value: boolean | undefined | null) { this.cscd.Value = value; };

    protected zaokrDPHMalaCisla: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ZaokrDPHMalaCisla", HeliosProcedureParameterType.TINYINT);
    public get ZaokrDPHMalaCisla(): number | undefined | null { return this.zaokrDPHMalaCisla.Value; };
    public set ZaokrDPHMalaCisla(value: number | undefined | null) { this.zaokrDPHMalaCisla.Value = value; };

    protected realizacniFak: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("RealizacniFak", HeliosProcedureParameterType.BIT);
    public get RealizacniFak(): boolean | undefined | null { return this.realizacniFak.Value; };
    public set RealizacniFak(value: boolean | undefined | null) { this.realizacniFak.Value = value; };

    protected datumDoruceni: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatumDoruceni", HeliosProcedureParameterType.DATETIME);
    public get DatumDoruceni(): Date | undefined | null { return this.datumDoruceni.Value; };
    public set DatumDoruceni(value: Date | undefined | null) { this.datumDoruceni.Value = value; };

    protected organizace2: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("Organizace2", HeliosProcedureParameterType.INT);
    public get Organizace2(): number | undefined | null { return this.organizace2.Value; };
    public set Organizace2(value: number | undefined | null) { this.organizace2.Value = value; };

    protected datumSplatnoRPT: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatumSplatnoRPT", HeliosProcedureParameterType.DATETIME);
    public get DatumSplatnoRPT(): Date | undefined | null { return this.datumSplatnoRPT.Value; };
    public set DatumSplatnoRPT(value: Date | undefined | null) { this.datumSplatnoRPT.Value = value; };

    protected datumKurzu: HeliosProcedureParameter<Date> = new HeliosProcedureParameter<Date>("DatumKurzu", HeliosProcedureParameterType.DATETIME);
    public get DatumKurzu(): Date | undefined | null { return this.datumKurzu.Value; };
    public set DatumKurzu(value: Date | undefined | null) { this.datumKurzu.Value = value; };

    protected splatnoPocitatOd: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("SplatnoPocitatOd", HeliosProcedureParameterType.TINYINT);
    public get SplatnoPocitatOd(): number | undefined | null { return this.splatnoPocitatOd.Value; };
    public set SplatnoPocitatOd(value: number | undefined | null) { this.splatnoPocitatOd.Value = value; };

    protected specifickySymbol: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("SpecifickySymbol", HeliosProcedureParameterType.NVARCHAR);
    public get SpecifickySymbol(): string | undefined | null { return this.specifickySymbol.Value; };
    public set SpecifickySymbol(value: string | undefined | null) { this.specifickySymbol.Value = value; };

    protected jeToZaloha: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("JeToZaloha", HeliosProcedureParameterType.BIT);
    public get JeToZaloha(): boolean | undefined | null { return this.jeToZaloha.Value; };
    public set JeToZaloha(value: boolean | undefined | null) { this.jeToZaloha.Value = value; };

    protected dodFakKV: HeliosProcedureParameter<string> = new HeliosProcedureParameter<string>("DodFakKV", HeliosProcedureParameterType.NVARCHAR);
    public get DodFakKV(): string | undefined | null { return this.dodFakKV.Value; };
    public set DodFakKV(value: string | undefined | null) { this.dodFakKV.Value = value; };

    protected opravnyDoklad: HeliosProcedureParameter<boolean> = new HeliosProcedureParameter<boolean>("OpravnyDoklad", HeliosProcedureParameterType.BIT);
    public get OpravnyDoklad(): boolean | undefined | null { return this.opravnyDoklad.Value; };
    public set OpravnyDoklad(value: boolean | undefined | null) { this.opravnyDoklad.Value = value; };

    protected zdrojCisKV: HeliosProcedureParameter<number> = new HeliosProcedureParameter<number>("ZdrojCisKV", HeliosProcedureParameterType.TINYINT);
    public get ZdrojCisKV(): number | undefined | null { return this.zdrojCisKV.Value; };
    public set ZdrojCisKV(value: number | undefined | null) { this.zdrojCisKV.Value = value; };
}