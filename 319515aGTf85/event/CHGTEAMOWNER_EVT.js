var myOwner = Spark.getData().OWNER_ATTRIB;
var myNewOwner =  Spark.getData().NEW_OWNER_ATTRIB;
var myTeam = Spark.getData().TEAM_ATTRIB;

var theTeam = Spark.getTeams().getTeam(myTeam);

//var result = theTeam.setOwnerId(myNewOwner);

var result = theTeam.removeMembers(myNewOwner);

Spark.setScriptData("results", result);