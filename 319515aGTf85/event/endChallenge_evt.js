var myChallenge = Spark.getData().CHAL_ATTRIB
var myPlayer = Spark.getData().PLAYER_ATTRIB;

var chal = Spark.getChallenge(myChallenge);
var aplayer = Spark.loadPlayer(myPlayer);

// chal.drawChallenge();

chal.winChallenge(aplayer);