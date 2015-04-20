// var thePlayer = Spark.loadPlayer("54d0ab27e4b0f076824c2c4f");
// var logEvtReq = new SparkRequests.LogEventRequest();
// logEvtReq.eventKey = "SCORE_EVT";
// logEvtReq.SCORE_ATTRIB = "100";
// logEvtReq.COUNTRY_ATTRIB = "JP";
// logEvtReq.LEVEL_ATTRIB = "4";
// logEvtReq.SendAs(thePlayer);


// Currently, this method doesn't work in the way I think it should.
// Call LogEventRequest type and set it to a new variable.
var logEvtReq = new SparkRequests.LogEventRequest();

// Currently, only the eventKey can be called from the event using intelliSense.
logEvtReq.eventKey = "SCORE_EVT";

// Create a new variable that stores the response to the request, sent as someone else - Dee Coder.
//var evtResponse = evtReq.SendAs("54d0ab27e4b0f076824c2c4f");

// Another way of doing the above.  This one won't call the variables within the helloWorld_evt.
var sendLogEvtReq = Spark.sendRequestAs({
    "@class": ".LogEventRequest",
    "eventKey": "SCORE_EVT",
    "SCORE_ATTRIB": "100",
    "COUNTRY_ATTRIB": "JP",
    "LEVEL_ATTRIB": "4"
    },
    "54d0ab27e4b0f076824c2c4f");