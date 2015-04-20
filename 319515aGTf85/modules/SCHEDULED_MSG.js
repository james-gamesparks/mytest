var myScore = Spark.getData().myScore;
var myCountry = Spark.getData().myCountry;
var myLevel = Spark.getData().myLevel;
var myPlayerID = Spark.getData().myPlayerID;
Spark.getLog().debug("msg");
Spark.sendMessageById({"MESSAGE": "You recently posted a score of " + myScore + "for " + myCountry + "on Level " + myLevel}, myPlayerID);