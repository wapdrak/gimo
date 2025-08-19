var intervaldnes = setInterval(acas, 1000);
function acas() {

    var datum = new Date();
    var den = datum.getDay();
    var ddatum = datum.getDate();
    var mesic = datum.getMonth();
    var rok = datum.getFullYear();
    var hodina = datum.getHours();
	
	
    Date.prototype.getWeek = function() {
        var onejan = new Date(this.getFullYear(), 0, 6);
        return Math.ceil(((this - onejan) / 864e5 + onejan.getDay() + 1) / 7);
    };
	
    var ctydnu = (new Date()).getWeek();
	
    var sden = new Array("Sunday", "Monday", "Tuesdey", "Wednesdey", "Thursday", "Friday", "Saturday");
    var smesic = new Array("January", "February", "March", "April", "May", "Juni", "July", "August", "September", "October", "November", "December");
    var jom = new Array("Rishon", "Sheni", "Shlishi", "Reviy", "Hamishi", "Shishi", "Shabat");
	
    if (hodina<4) {
        atext = "Dobrou noc polokouli ponořené právě do tmy";
    }
    if (hodina>=4&&hodina<7) {
        atext = "Dobrou noc a sladké sny";
    }
    if (hodina>=4&&hodina<7) {
        atext = "Dobré ráno všem ranním ptáčkům";
    }
    if (hodina>=7&&hodina<9) {
        atext = "Dobré ráno a příjemný den";
    }
    if (hodina>=9&&hodina<12) {
        atext = "Dobré dopoledne všem návštěvníkům";
    }
    if (hodina>=12&&hodina<13) {
        atext = "Dobré poledne všem a chutný oběd :-)";
    }
    if (hodina>=13&&hodina<17) {
        atext = "Dobré odpoledne všem dobrým lidem";
    }
    if (hodina>=17&&hodina<19) {
        atext = "Příjemný podvečer";
    }
    if (hodina>=19&&hodina<22) {
        atext = "Dobrý večer";
    }
    if (hodina<0) {
        atext = "Dobrý večer všem, kdo ještě nespí";
    }

    var pcas = datum.toLocaleTimeString();

    var dnes = "<b>" + atext + "</b>, ";
    dnes += "today is ";
    dnes += "<b>" + sden[den] + ", ";
    dnes += ddatum + ". ";
    dnes += smesic[mesic] + "(";
    dnes += 1 + mesic + "),</b> ";
    dnes += "week no. <b>" + ctydnu + "</b>, ";
    dnes += "year <b>" + rok + "</b>, ";
    dnes += "exact time: <b>" + pcas + "</b>, ";

    document.getElementById("dnes").innerHTML = dnes;

    var hajom = jom[den] + ", ";

    var svatky = new Array(12);
    svatky[0] = new Array("Nový rok", "Karina", "Radmila", "Diana", "Dalimil", "Tři králové", "Vilma", "Čestmír", "Vladan", "Břetislav", "Bohdana", "Pravoslav", "Edita", "Radovan", "Alice", "Ctirad", "Drahoslav", "Vladislav", "Doubravka", "Ilona", "Běla", "Slavomír", "Zdeněk", "Milena", "Miloš", "Zora", "Ingrid", "Otýlie", "Zdislava", "Robin", "Marika");
    svatky[1] = new Array("Hynek", "Nela", "Blažej", "Jarmila", "Dobromila", "Vanda", "Veronika", "Milada", "Apolena", "Mojmír", "Božena", "Slavěna", "Věnceslav", "Valentýn", "Jiřina", "Ljuba", "Miloslava", "Gizela", "Patrik", "Oldřich", "Lenka", "Petr", "Svatopluk", "Matěj", "Liliana", "Dorota", "Alexandr", "Lumír", "");
    svatky[2] = new Array("Bedřich", "Anežka", "Kamil", "Stela", "Kazimir", "Miroslav", "Tomáš", "Gabriela", "Františka", "Viktorie", "Anděla", "Řehoř", "Růžena", "Růt a matylda", "Ida", "Elena a herbert", "Vlastimil", "Eduard", "Josef", "Světlana", "Radek", "Leona", "Ivona", "Gabriel", "Marian", "Emanuel", "Dita", "Soňa", "Taťána", "Arnošt", "Kvido");
    svatky[3] = new Array("Hugo", "Erika", "Richard", "Ivana", "Miroslava", "Vendula", "Heřman a Hermína", "Ema", "Dušan", "Darja", "Izabela", "Julius", "Aleš", "Vincenc", "Anastázie", "Irena", "Rudolf", "Valérie", "Rostislav", "Marcela", "Alexandra", "Evženie", "Vojtěch", "Jiří", "Marek", "Oto", "Jaroslav", "Vlastislav", "Robert", "Blahoslav");
    svatky[4] = new Array(" ", "Zikmund", "Alexej", "Květoslav", "Klaudie", "Radoslav", "Stanislav", " ", "Ctibor", "Blažena", "Svatava", "Pankrác", "Servác", "Bonifác", "Žofie", "Přemysl", "Aneta", "Nataša", "Ivo", "Zbyšek", "Monika", "Emil", "Vladimír", "Jana", "Viola", "Filip", "Valdemar", "Vilém", "Maxmilián", "Ferdinand", "Kamila");
    svatky[5] = new Array("Laura", "Jarmil", "Tamara", "Dalibor", "Dobroslav", "Norbert", "Iveta a Slavoj", "Medard", "Stanislava", "Gita", "Bruno", "Antonie", "Antonín", "Roland", "Vít", "Zbyněk", "Adolf", "Milan", "Leoš", "Květa", "Alois", "Pavla", "Zdeňka", "Jan", "Ivan", "Adriana", "Ladislav", "Lubomír", "Petr a Pavel", "Šárka");
    svatky[6] = new Array("Jaroslava", "Patricie", "Radomír", "Prokop", " ", " ", "Bohuslava", "Nora", "Drahoslava", "Libuše a Amálie", "Olga", "Bořek", "Markéta", "Karolína", "Jindřich", "Luboš", "Martina", "Drahomíra", "Čeněk", "Ilja", "Vítězslav", "Magdaléna", "Libor", "Kristýna", "Jakub", "Anna", "Věroslav", "Viktor", "Marta", "Bořivoj", "Ignác");
    svatky[7] = new Array("Oskar", "Gustav", "Miluše", "Dominik", "Kristian", "Oldřiška", "Lada", "Soběslav", "Roman", "Vavřinec", "Zuzana", "Klára", "Alena", "Alan", "Hana", "Jáchym", "Petra", "Helena", "Ludvík", "Bernard", "Johana", "Bohuslav", "Sandra", "Bartoloměj", "Radim", "Luděk", "Otakar", "Augustýn", "Evelína", "Vladěna", "Pavlína");
    svatky[8] = new Array("Linda a Samuel", "Adéla", "Bronislav", "Jindřiška", "Boris", "Boleslav", "Regína", "Mariana", "Daniela", "Irma", "Denisa", "Marie", "Lubor", "Radka", "Jolana", "Ludmila", "Naděžda", "Kryštof", "Zita", "Oleg", "Matouš", "Darina", "Berta", "Jaromír", "Zlata", "Andrea", "Jonáš", "Václav", "Michal", "Jeroným");
    svatky[9] = new Array("Igor", "Olivie a Oliver", "Bohumil", "František", "Eliška", "Hanuš", "Justýna", "Věra", "Štefan a Sára", "Marina", "Andrej", "Marcel", "Renáta", "Agáta", "Tereza", "Havel", "Hedvika", "Lukáš", "Michaela", "Vendelín", "Brigita", "Sabina", "Teodor", "Nina", "Beáta", "Erik", "Šarlota a Zoe", " ", "Silvie", "Tadeáš", "Štěpánka");
    svatky[10] = new Array("Felix", " ", "Hubert", "Karel", "Miriam", "Liběna", "Saskie", "Bohumír", "Bohdan", "Evžen", "Martin", "Benedikt", "Tibor", "Sáva", "Leopold", "Otmar", "Mahulena", "Romana", "Alžběta", "Nikola", "Albert", "Cecílie", "Klement", "Emílie", "Kateřina", "Artur", "Xenie", "René", "Zina", "Ondřej");
    svatky[11] = new Array("Iva", "Blanka", "Svatoslav", "Barbora", "Jitka", "Mikuláš", "Ambrož a Benjamín", "Květoslava", "Vratislav", "Julie", "Dana", "Simona", "Lucie", "Lýdie", "Radana a Radan", "Albína", "Daniel", "Miloslav", "Ester", "Dagmar", "Natálie", "Šimon", "Vlasta", "Adam a Eva", " ", "Štěpán", "Žaneta", "Bohumila", "Judita", "David", "Silvestr");
	
	
	

    document.getElementById("hajom").innerHTML = "Hebrew date : <b>Jom " + hajom + "</b>";

    if (svatky[mesic][ddatum - 1] != " ") document.getElementById("svdnes").innerHTML = "";

    document.getElementById("hebrewdatum").innerHTML = "<b>" + FormatDateH(GregToHeb(datum)) + "</b> ";
	
	
	
    datum.setHours(0);
    datum.setMinutes(0);
    datum.setSeconds(0);
    datum.setMilliseconds(0);
    function MonSinceFirstMolad(nYearH) {
        var nMonSinceFirstMolad;
        nYearH--;
        nMonSinceFirstMolad = Math.floor(nYearH / 19) * 235;
        nYearH = nYearH % 19;
        nMonSinceFirstMolad += 12 * nYearH;
        if (nYearH >= 17) {
            nMonSinceFirstMolad += 6;
        } else if (nYearH >= 14) {
            nMonSinceFirstMolad += 5;
        } else if (nYearH >= 11) {
            nMonSinceFirstMolad += 4;
        } else if (nYearH >= 8) {
            nMonSinceFirstMolad += 3;
        } else if (nYearH >= 6) {
            nMonSinceFirstMolad += 2;
        } else if (nYearH >= 3) {
            nMonSinceFirstMolad += 1;
        }
        return nMonSinceFirstMolad;
    }
    function IsLeapYear(nYearH) {
        var nYearInCycle;
        nYearInCycle = nYearH % 19;
        return nYearInCycle == 3 || nYearInCycle == 6 || nYearInCycle == 8 || nYearInCycle == 11 || nYearInCycle == 14 || nYearInCycle == 17 || nYearInCycle == 0;
    }
    function Tishrei1(nYearH) {
        var nMonthsSinceFirstMolad;
        var nChalakim;
        var nHours;
        var nDays;
        var nDayOfWeek;
        var dTishrei1;
        nMonthsSinceFirstMolad = MonSinceFirstMolad(nYearH);
        nChalakim = 793 * nMonthsSinceFirstMolad;
        nChalakim += 204;
        nHours = Math.floor(nChalakim / 1080);
        nChalakim = nChalakim % 1080;
        nHours += nMonthsSinceFirstMolad * 12;
        nHours += 5;
        nDays = Math.floor(nHours / 24);
        nHours = nHours % 24;
        nDays += 29 * nMonthsSinceFirstMolad;
        nDays += 2;
        nDayOfWeek = nDays % 7;
        if (!IsLeapYear(nYearH) && nDayOfWeek == 3 && nHours * 1080 + nChalakim >= 9 * 1080 + 204) {
            nDayOfWeek = 5;
            nDays += 2;
        } else if (IsLeapYear(nYearH - 1) && nDayOfWeek == 2 && nHours * 1080 + nChalakim >= 15 * 1080 + 589) {
            nDayOfWeek = 3;
            nDays += 1;
        } else {
            if (nHours >= 18) {
                nDayOfWeek += 1;
                nDayOfWeek = nDayOfWeek % 7;
                nDays += 1;
            }
            if (nDayOfWeek == 1 || nDayOfWeek == 4 || nDayOfWeek == 6) {
                nDayOfWeek += 1;
                nDayOfWeek = nDayOfWeek % 7;
                nDays += 1;
            }
        }
        nDays -= 2067025;
        dTishrei1 = new Date(1900, 0, 1);
        dTishrei1.setDate(dTishrei1.getDate() + nDays);
        return dTishrei1;
    }
    function LengthOfYear(nYearH) {
        var dThisTishrei1;
        var dNextTishrei1;
        var diff;
        dThisTishrei1 = Tishrei1(nYearH);
        dNextTishrei1 = Tishrei1(nYearH + 1);
        diff = (dNextTishrei1 - dThisTishrei1) / (1e3 * 60 * 60 * 24);
        return Math.round(diff);
    }
    function GregToHeb(dGreg) {
        var nYearH;
        var nMonthH;
        var nDateH;
        var nOneMolad;
        var nAvrgYear;
        var nDays;
        var dTishrei1;
        var nLengthOfYear;
        var bLeap;
        var bHaser;
        var bShalem;
        var nMonthLen;
        var bWhile;
        var d1900 = new Date(1900, 0, 1);
        nOneMolad = 29 + 12 / 24 + 793 / (1080 * 24);
        nAvrgYear = nOneMolad * (235 / 19);
        nDays = Math.round((dGreg - d1900) / (24 * 60 * 60 * 1e3));
        nDays += 2067025;
        nYearH = Math.floor(nDays / nAvrgYear) + 1;
        dTishrei1 = Tishrei1(nYearH);
        if (SameDate(dTishrei1, dGreg)) {
            nMonthH = 1;
            nDateH = 1;
        } else {
            if (dTishrei1 < dGreg) {
                while (Tishrei1(nYearH + 1) <= dGreg) {
                    nYearH += 1;
                }
            } else {
                nYearH -= 1;
                while (Tishrei1(nYearH) > dGreg) {
                    nYearH -= 1;
                }
            }
            nDays = (dGreg - Tishrei1(nYearH)) / (24 * 60 * 60 * 1e3);
            nDays = Math.round(nDays);
            nLengthOfYear = LengthOfYear(nYearH);
            bHaser = nLengthOfYear == 353 || nLengthOfYear == 383;
            bShalem = nLengthOfYear == 355 || nLengthOfYear == 385;
            bLeap = IsLeapYear(nYearH);
            nMonthH = 1;
            do {
                switch (nMonthH) {
                  case 1:
                  case 5:
                  case 6:
                  case 8:
                  case 10:
                  case 12:
                    nMonthLen = 30;
                    break;

                  case 4:
                  case 7:
                  case 9:
                  case 11:
                  case 13:
                    nMonthLen = 29;
                    break;

                  case 6:
                    nMonthLen = 30;
                    break;

                  case 2:
                    nMonthLen = bShalem ? 30 : 29;
                    break;

                  case 3:
                    nMonthLen = bHaser ? 29 : 30;
                    break;
                }
                if (nDays >= nMonthLen) {
                    bWhile = true;
                    if (bLeap || nMonthH != 5) {
                        nMonthH++;
                    } else {
                        nMonthH += 2;
                    }
                    nDays -= nMonthLen;
                } else {
                    bWhile = false;
                }
            } while (bWhile);
            nDateH = nDays + 1;
        }
        return nMonthH + "/" + nDateH + "/" + nYearH;
    }
    function SameDate(d1, d2) {
        return d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate();
    }
    function FormatDateH(cDate) {
        var aDate = new Array();
        var cFormatDate;
        aDate = cDate.split("/");
        switch (Number(aDate[0])) {
          case 1:
            cFormatDate = "Tišrei (1)";
            break;

          case 2:
            cFormatDate = "Chešvan (2)";
            break;

          case 3:
            cFormatDate = "Kislev (3)";
            break;

          case 4:
            cFormatDate = "Teves (4)";
            break;

          case 5:
            cFormatDate = "Ševat (5)";
            break;

          case 6:
            cFormatDate = "Adar A (6)";
            break;

          case 7:
            cFormatDate = IsLeapYear(Number(aDate[2])) ? "Adar B (7)" : "Adar (7)";
            break;

          case 8:
            cFormatDate = "Nisan (8)";
            break;

          case 9:
            cFormatDate = "Iar (9)";
            break;

          case 10:
            cFormatDate = "Sivan (10)";
            break;

          case 11:
            cFormatDate = "Tamuz (11)";
            break;

          case 12:
            cFormatDate = "Av (12)";
            break;

          case 13:
            cFormatDate = "Elul (13)";
            break;
        }
        aDate[1] += " " + cFormatDate + ", " + aDate[2];
        return aDate[1];
    }

}