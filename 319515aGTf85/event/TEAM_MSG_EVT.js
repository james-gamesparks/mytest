var myTeam = Spark.getData().TEAM_ATTRIB;
var myMessage = Spark.getData().MSG_ATTRIB;
var varTeam = Spark.getTeams().getTeam(myTeam);

var msgReq = new SparkRequests.SendTeamChatMessageRequest();

msgReq.teamId = varTeam.getTeamId();
msgReq.message = myMessage;
msgReq.Send();

Spark.setScriptData("res", msgReq.Send());
end;