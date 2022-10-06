const ZERO_NOT_STARTED = "Not-Started";//0%
const ONE_PREPARATION = "Planing-And-Prepearing";//5%;
const TWO_INITIATED = "Initiated";//7%;
const THREE_SMALL_PROGRESS = "Small-Progress";//%15;
const FOUR_SOME_MORE_PROGRESS = "More-Small-Progresss";//%20;
const FIVE_QUARTER = "Quarter-Way-There";
const SIX_PICKING_UP_PACE = "Picking-Up-Pace";
const SEVEN_HALFWAY = "Halfway";//%%ADD special animation, like a party
const EIGHT_ADVANCED = "Advanced";
const NINE_ALMOST_THERE = "Final-Approach";
const NINE_HALF = "Hiccup";
const TEN_DONE = "DONE";//Add party animation again


const completionStatuses = {
    ZERO_NOT_STARTED: {percentage:0,str:ZERO_NOT_STARTED},
    ONE_PREPARATION:{percentage:5,str:ONE_PREPARATION},
    TWO_INITIATED:{percentage:7,str:TWO_INITIATED},
    THREE_SMALL_PROGRESS:{percentage:15,str: THREE_SMALL_PROGRESS},
    FOUR_SOME_MORE_PROGRESS:{percentage:20,str:FOUR_SOME_MORE_PROGRESS},
    FIVE_QUARTER:{percentage:25,str:FIVE_QUARTER},
    SIX_PICKING_UP_PACE:{percentage:37.5,str:SIX_PICKING_UP_PACE},
    SEVEN_HALFWAY:{percentage:50,str:SEVEN_HALFWAY},
    EIGHT_ADVANCED:{percentage:75,str:EIGHT_ADVANCED},
    NINE_ALMOST_THERE:{percentage:87.5,str:NINE_ALMOST_THERE},
    NINE_HALF:{percentage:95,str:NINE_HALF},
    TEN_DONE:{percentage:100,str:TEN_DONE}
};

export default completionStatuses;