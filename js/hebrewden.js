var hebrewden = new Date ( );

var jom = new Array ( );
jom[jom.length] = "Jom Rišon";
jom[jom.length] = "Jom Šeni";
jom[jom.length] = "Jom Šliši";
jom[jom.length] = "Jom Revii";
jom[jom.length] = "Jom Chamiši";
jom[jom.length] = "Jom Šiši";
jom[jom.length] = "Jom Šabat - Šábes";

var chodes = new Array ( );
chodes[chodes.length] = "ינואר";
chodes[chodes.length] = "פברואר";
chodes[chodes.length] = "מרץ";
chodes[chodes.length] = "אפריל";
chodes[chodes.length] = "מאי";
chodes[chodes.length] = "יוני";
chodes[chodes.length] = "יולי";
chodes[chodes.length] = "אוגוסט";
chodes[chodes.length] = "ספטמבר";
chodes[chodes.length] = "אוקטובר";
chodes[chodes.length] = "נובמבר";
chodes[chodes.length] = "דצמבר";

document.write ( jom[hebrewden.getDay()] );