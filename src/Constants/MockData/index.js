import completionStatuses from "../CompletionStatuses";

const fakeTask1 = {'id':"J8HF9KA65G",'taskNum':1,'title':"Prepare backup of DB before migration",'description':"Extract the data from MongoDB as a JSON file and save it on the files server",'showDescription':true};
const fakeTask2 = {'id':"R1B741KL99",'taskNum':2,'title':"Perform DB migration",'description':"Move Database from MongoDB server to Redis, according to the protocol",'showDescription':true};
const fakeTask3 = {'id':"KJH9FH765B",'taskNum':3,'title':"Validate data retrieval",'description':"Make sure you know how to fetch the data from the new DB",'showDescription':true};
const fakeTask4 = {'id':"8MNB57G54V",'taskNum':4,'title':"Validate data insertion",'description':"Make sure you know how to write into the new DB",'showDescription':true};
const fakeTask5 = {'id':"VCJ854D23F",'taskNum':5,'title':"Complete CSS of Tasks component",'description':"According to the design provided in the link",'showDescription':true};
const fakeTask6 = {'id':"5P3MY2JA5T",'taskNum':6,'title':"Finish Task component functionality",'description':"Fix the onClick function of expand DB",'showDescription':true};

fakeTask1.completionStatus = completionStatuses.NINE_ALMOST_THERE;
fakeTask2.completionStatus = completionStatuses.EIGHT_ADVANCED;
fakeTask3.completionStatus = completionStatuses.SEVEN_HALFWAY;
fakeTask4.completionStatus = completionStatuses.SIX_PICKING_UP_PACE;;
fakeTask5.completionStatus = completionStatuses.FIVE_QUARTER;;
fakeTask6.completionStatus = completionStatuses.FOUR_SOME_MORE_PROGRESS;

const fakeTasks = {
    fakeTask1,
    fakeTask2,
    fakeTask3,
    fakeTask4,
    fakeTask5,
    fakeTask6
};

export default fakeTasks;
