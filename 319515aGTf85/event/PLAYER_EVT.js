var myPlayer = Spark.getPlayer();
var myPlayerID = myPlayer.getPlayerId();

// make the entered value uppercase
// reduce the value to 2 characters.
var myCountry = Spark.getData().COUNTRY_ATTRIB.toUpperCase().substring(0, 2);
var myLanguage = Spark.getData().LANG_ATTRIB;

// if the entered value is more than 2 characters
if (myCountry.length < 2) {
// give them the default Country Segment.
    myPlayer.setSegmentValue("COUNTRY_SEG", "UK_COUNTRY_SEGVAL");
}
else {
    // Otherwise, append it to the the Segment Value Short Code.
    myPlayer.setSegmentValue("COUNTRY_SEG", myCountry + "_COUNTRY_SEGVAL");
    test;
}

switch (myLanguage) {
    case "FR":
        myPlayer.setSegmentValue("LANG_SEG", "FR_LANG_SEGVAL");
        break;
    case "NL":
        myPlayer.setSegmentValue("LANG_SEG", "NL_LANG_SEGVAL");
        break;
    case "DE":
        myPlayer.setSegmentValue("LANG_SEG", "DE_LANG_SEGVAL");
        break;        
    case "DK":
        myPlayer.setSegmentValue("LANG_SEG", "DK_LANG_SEGVAL");
        break;
    case "CZ":
        myPlayer.setSegmentValue("LANG_SEG", "CZ_LANG_SEGVAL");
        break;
    case "PL":
        myPlayer.setSegmentValue("LANG_SEG", "PL_LANG_SEGVAL");
        break;
    case "RU":
        myPlayer.setSegmentValue("LANG_SEG", "RU_LANG_SEGVAL");
        break;        
    case "JP":
        myPlayer.setSegmentValue("LANG_SEG", "JP_LANG_SEGVAL");
        break;
    case "CN":
        myPlayer.setSegmentValue("LANG_SEG", "CN_LANG_SEGVAL");
        break;        
    case "PH":
        myPlayer.setSegmentValue("LANG_SEG", "PH_LANG_SEGVAL");
        break; 
    case "NZ":
        myPlayer.setSegmentValue("LANG_SEG", "NZ_LANG_SEGVAL");
        break;   
    case "US":
        myPlayer.setSegmentValue("LANG_SEG", "US_LANG_SEGVAL");
        break;    
    default:
        myPlayer.setSegmentValue("LANG_SEG", "EN_LANG_SEGVAL");
        break;
}