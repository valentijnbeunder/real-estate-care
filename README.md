
# **Real Estate Care**

### **Overzicht**

Real Estate Care is een applicatie ontworpen om vastgoedbeheer te stroomlijnen. De applicatie biedt functionaliteiten zoals:

-   Beheren van inspecties.
-   Genereren van rapporten.
-   Toegang tot een uitgebreide kennisbank.

Het project gebruikt **Vue.js** voor de frontend en **Node.js** voor backendservices.

----------

### **Deploy-status**

De applicatie is live te bekijken op:

-   **Netlify**.
- https://vue-real-estate-care.netlify.app/

----------

### **Broncode**

De broncode is beschikbaar op GitHub: **[GitHub Repository](https://github.com/valentijnbeunder/real-estate-care.git)**.

----------


## Functionaliteiten

- **Authenticatie**: Beveiligde login/logout via Auth0.
- **Toegankelijkheid**: Ondersteuning voor toetsenbordnavigatie en kleurcontrastcontrole.
- **Rapportages**: Rapportagepagina's.
- **Instellingenpagina**: Gebruikers kunnen hun voorkeuren aanpassen.

----------

### **Toegankelijkheid (Accessibility)**

De applicatie is getest op basis van **WCAG 2.1 Niveau A** richtlijnen met de volgende resultaten:

#### **Sterke punten**

-   **Alt-teksten**: Alle niet-tekstuele inhoud heeft beschrijvende alternatieven.
-   **Kleurcontrast**: Alle elementen voldoen aan AA-normen.
-   **Toetsenbordnavigatie**: Interactieve elementen zijn volledig toegankelijk via toetsenbord.
-   **ARIA-labels**: Toegevoegd voor ondersteuning met schermlezers.

#### **Te verbeteren**

-   **Video- en audiocontent**: Nog geen transcripties of ondertiteling toegevoegd.
-   **Focusbeheer**: Focus wordt niet altijd correct ingesteld na navigatie.

----------

### **Beveiliging (Security)**

-   **Authenticatie**: Beveiligd via Auth0.
-   **Gegevensvalidatie**: Client-side validatie om invoerfouten te voorkomen.
-   **Veilige verbindingen**: HTTPS wordt gebruikt voor alle API-aanroepen.

----------

### **Stijlgids en Best Practices**

De applicatie volgt:

-   **Vue.js Style Guide**:
    -   Consistente naamgeving van componenten en props.
    -   Gebruik van scoped styles om CSS-lekkages te voorkomen.
-   **Vuetify Guidelines**:
    -   Correcte themainstellingen en componentgebruik.
    -   Aangepaste kleurenschema's via `createVuetify`.

----------

### **Gebruiksvriendelijkheid (Usability)**

De applicatie is ontworpen volgens de **10 heuristieken van Jakob Nielsen**:

1.  **Zichtbaarheid van systeemstatus**: Realtime feedback op interacties.
2.  **Overeenstemming tussen systeem en echte wereld**: Gebruik van begrijpelijke terminologie.
3.  **Gebruikerscontrole en vrijheid**: Opties om acties te annuleren.
4.  **Consistentie en standaarden**: Uniform gebruik van stijlen en interactiepatronen.
5.  **Foutpreventie**: Invoer wordt gevalideerd om fouten te voorkomen.
6.  **Herkenning boven herinnering**: Intuïtieve interface met herkenbare iconen.
7.  **Flexibiliteit en efficiëntie**: Aanpasbaar thema en eenvoudige navigatie.
8.  **Esthetisch en minimalistisch ontwerp**: Eenvoudige lay-out zonder afleiding.
9.  **Hulp bij fouten**: Heldere foutmeldingen en suggesties.
10.  **Documentatie**: Eenvoudige, toegankelijke uitleg voor gebruikers.

----------

### **Proces en Verantwoording**

De ontwikkeling van **Real Estate Care** werd geleid door de volgende principes:

-   **Toegankelijkheid**: Tools zoals WAVE en Contrast Checker hielpen bij het implementeren van WCAG-richtlijnen.
-   **Veiligheid**: Auth0 werd geïntegreerd voor veilige gebruikersauthenticatie.
-   **Gebruiksvriendelijkheid**: Gebruikerstests en iteratieve verbeteringen zorgden voor een intuïtieve ervaring.

Hoewel de applicatie grotendeels voldoet aan WCAG 2.1 Niveau A, blijven onderdelen zoals ondertiteling en focusbeheer prioriteit voor toekomstige updates.

----------

### **Toekomstige Plannen**

-   Implementeren van audiobeschrijvingen en transcripties.
-   Optimaliseren van mobiele ondersteuning.
-   Uitbreiden van functies zoals geavanceerde gebruikersinstellingen.

Valentijn Beunder
