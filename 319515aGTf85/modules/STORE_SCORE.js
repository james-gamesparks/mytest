var myScore = Spark.getData().myScore;
var myCountry = Spark.getData().myCountry;
var myLevel = Spark.getData().myLevel;

var d = new date;

var myPlayerId = Spark.getPlayer().getPlayerId();
var storeScoreCollection = Spark.runtimeCollection('storeScore');
storeScoreCollection.insert({"item":"score", "player" : myPlayerId, "Score" : myScore, "From" : myCountry, "Level" : myLevel});