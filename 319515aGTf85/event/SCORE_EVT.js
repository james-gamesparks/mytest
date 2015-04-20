var myPlayer = Spark.getPlayer();
var myPlayerID = myPlayer.getPlayerId();

var myScore = Spark.getData().SCORE_ATTRIB;
var myCountry = Spark.getData().COUNTRY_ATTRIB;
var myLevel = Spark.getData().LEVEL_ATTRIB;
// hello

switch (myCountry) {
    case "FR":
        myPlayer.setSegmentValue("COUNTRY_SEG", "FR_COUNTRY_SEGVAL");
        myPlayer.setSegmentValue("LANG_SEG", "FR_LANG_SEGVAL");
        break;
    case "NL":
        myPlayer.setSegmentValue("COUNTRY_SEG", "NL_COUNTRY_SEGVAL");
        myPlayer.setSegmentValue("LANG_SEG", "NL_LANG_SEGVAL");
        break;
    case "DE":
        myPlayer.setSegmentValue("COUNTRY_SEG", "DE_COUNTRY_SEGVAL");
        myPlayer.setSegmentValue("LANG_SEG", "DE_LANG_SEGVAL");
        break;        
    case "DK":
        myPlayer.setSegmentValue("COUNTRY_SEG", "DK_COUNTRY_SEGVAL");
        myPlayer.setSegmentValue("LANG_SEG", "DK_LANG_SEGVAL");
        break;
    case "CZ":
        myPlayer.setSegmentValue("COUNTRY_SEG", "CZ_COUNTRY_SEGVAL");
        myPlayer.setSegmentValue("LANG_SEG", "CZ_LANG_SEGVAL");
        break;
    case "PL":
        myPlayer.setSegmentValue("COUNTRY_SEG", "PL_COUNTRY_SEGVAL");
        myPlayer.setSegmentValue("LANG_SEG", "PL_LANG_SEGVAL");
        break;
    case "RU":
        myPlayer.setSegmentValue("COUNTRY_SEG", "RU_COUNTRY_SEGVAL");
        myPlayer.setSegmentValue("LANG_SEG", "RU_LANG_SEGVAL");
        break;        
    case "JP":
        myPlayer.setSegmentValue("COUNTRY_SEG", "JP_COUNTRY_SEGVAL");
        myPlayer.setSegmentValue("LANG_SEG", "JP_LANG_SEGVAL");
        break;
    case "CN":
        myPlayer.setSegmentValue("COUNTRY_SEG", "CN_COUNTRY_SEGVAL");
        myPlayer.setSegmentValue("LANG_SEG", "ZH_LANG_SEGVAL");
        break;        
    case "NZ":
        myPlayer.setSegmentValue("COUNTRY_SEG", "NZ_COUNTRY_SEGVAL");
        myPlayer.setSegmentValue("LANG_SEG", "EN_LANG_SEGVAL");
        break;    
    default:
        myPlayer.setSegmentValue("COUNTRY_SEG", "UK_COUNTRY_SEGVAL");
        myPlayer.setSegmentValue("LANG_SEG", "EN_LANG_SEGVAL");
        break;
}

var theScheduler = Spark.getScheduler();
Spark.getLog().debug("msg1");
for(var i = 0; i < 10000; i++){
    theScheduler.inSeconds("STORE_SCORE", 10, {"myPlayerID" : myPlayerID, "myScore" : myScore, "myCountry" : myCountry, "myLevel" : myLevel});
test;
}

try {
var myLeaderboard = Spark.getLeaderboards().getLeaderboard("TOTAL_LB");
var myLeaderboardEntry = myLeaderboard.getEntriesFromPlayer(myPlayerID, 1).next().getAttribute("SUM-SCORE_ATTRIB");

if (myLeaderboardEntry > 500) {
    myPlayer.setSegmentValue("EXPERIENCE_SEG", "ADV_EXPERIENCE_SEGVAL");
}
else myPlayer.setSegmentValue("EXPERIENCE_SEG", "BEG_EXPERIENCE_SEGVAL");
}
catch(e) {
    Spark.sendMessage({"ERROR:": "Player score hasn't been submitted before."}, myPlayer);
}