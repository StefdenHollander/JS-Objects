console.log('js is running...')

//opdracht 1
const person = {
    firstName: "Stef",
    age: 16,
    lastName: "Den hollander",
    opleiding: "Software developer",
    Score: "de beste",
};

console.log("Voornaam is:", person.firstName);
console.log("Achternaam is:", person.lastName);
console.log("je leeftijd is:", person.age);
console.log("je opleiding is:", person.opleiding);
console.log("Je score is:", person.Score);
console.log("...................");
// opdracht 2

const Facebook = {
    Gebruikersnaam: "Cxrsed",
    Titel: "De piano player",
    Verhaal: "Music",
    Datum: "12-11-2023",
    Views: 30,
};
console.log("Gebruikersnaam:", Facebook.Gebruikersnaam);
console.log("Titel:", Facebook.Titel);
console.log("Verhaal:", Facebook.Verhaal);
console.log("Datum:", Facebook.Datum);
console.log("Views:", Facebook.Views);
console.log("...................");

//opdracht 3


const ReceptAppeltaart = {
    Titel: "Appeltaart",
    Beschrijving: "Een heerlijke taart met appel er in",
    Gezond: "Deze appel taart is hartstikke gezond",
}

const ReceptSlagroomtaart = {
    Titel: "Slagroomtaart",
    Beschrijving: "Een heerlijke taart slagroom er op",
    Gezond: "deze is niet zo gezond maar wel beren lekker",
}

const ReceptKersentaart = {
    Titel: "Kersentaart",
    Beschrijving: "Een heerlijke taart met kersen er in en op",
    Gezond: "Deze kersentaart is hartstikke gezond",
}

let myArray = [ReceptAppeltaart, ReceptSlagroomtaart, ReceptKersentaart]
for (let i = 0; i < 3 ; i++) {
    console.log(myArray);
    
}

//opdracht 4

const audi = {
Title:"Audi RS6 Avant 4.0 V8T QUATTRO MTM 810 PK OR NL AUTO PANO/KE",
description: "Beschrijving KERAMIEK V+A | SPORT CHASSIS RS-PLUS | PANORAMADAK | STOELKOELING | NL-AUTO | NAP LOGISCH | 1E EIG | OEM 22 INCH | 810 PK MTM | DYNAMICA PAKKET | HUD | TOP VIEW CAMERA | VIERWIELBESTURING |  Algemene informatie Aantal deuren: 5 Kleur: Mythosschwarz Metallic (zwart metallic)  Technische informatie Vermogen: 596 kW (810 PK) Aantal cilinders: 8 Transmissie: 8 versnellingen, Automaat Bandenmaat: 285/30 R22 Acceleratie (0-100): 3,1 s Topsnelheid: 347 km/u  Maten Afmetingen (LxBxH): 494 x 189 x 146 cm Wielbasis: 293 cm  Gewichten Ledig gewicht: 2.050 kg Laadvermogen: 690 kg GVW: 2.740 kg Max. trekgewicht: 2.100 kg (ongeremd 750 kg)  Interieur Interieurkleur: Zwart Aantal zitplaatsen: 5  Milieu CO₂-uitstoot: 268 kg Energielabel: G Emissieklasse: Euro 6  Verbruik Brandstofverbruik in de stad: 16,3 l/100km (1 op 6,1) Brandstofverbruik op de snelweg: 9,1 l/100km (1 op 11,0)  Onderhoud, historie en staat Onderhoudsboekjes: Aanwezig (dealer onderhouden) 100% Onderhouden: Ja (kwaliteitslabel aanwezig) Schade: schadevrij Aantal sleutels: 2 (2 handzenders)  Financiële informatie BTW/Marge: incl. BTW (de BTW, ca. € 21.805, is verrekenbaar voor ondernemers) Motorrijtuigenbelasting: € 332 - € 377 per kwartaal  Afleverpakketten Optioneel afleverpakket (€ 1.495): BOVAG Garantie Dit afleverpakket bevat: BOVAG garantie (12 maanden)",
price: 149.950,
kilometer: 46.167,
buildDate: 2020,
}

console.log(audi);

const Mercedes= {
    Title:"Mercedes C-Klasse C300 Diesel - Hybrid - Automaat + Beurt",
    description: "Veel tweedehands autos op marktplaats zijn afgetrapt omdat je de gemaakte kosten vaak niet terug krijgt. Ik vind het niet fijn om een auto te kopen en dan meteen duizend euro aan onderhoud uit te moeten geven. Dus ik heb hem van binnen en buiten schoongemaakt, 4 nieuwe banden erop laten zetten, en een onderhoudsbeurt gegeven.",
    price: 17.000,
    kilometer: 187.000,
    buildDate: 2016,
    }
    
    console.log(Mercedes);

    const Porsche= {
        Title:"Porsche 911 3.8 Carrera S Cabriolet AUT 2005 Zwart",
        description: "Schitterende 997 bij 161000 km is de motor gereviseerd met de nieuwe motor is nu 50000 km gereden. Er is vorig jaar voor € 3800,00  aan woofers ,speakers en dab stereo apple en windows ingegaan met super geluids resultaat . er zitten net 5000 km geleden nieuwe schuiven en remmen rondom op incl grote beurt Auto is in top staat ik heb de auto al 9 jaar in bezit en deze gaat weg omdat ik een 991 heb gekocht.",
        price: 43.000,
        kilometer: 50.000,
        buildDate: 2005,
        }
        
        console.log(Porsche);


















