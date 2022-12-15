/* Array With Two Data Sets: 
   1) Months 
   2) Profits/Losses
*/
var Finances = [
    ['Jan-2010', 867884],    // Data Group [00] Month [0] P/L [1]
    ['Feb-2010', 984655],    // Data Group [01] Month [0] P/L [1]
    ['Mar-2010', 322013],    // Data Group [02] Month [0] P/L [1]
    ['Apr-2010', -69417],    // Data Group [03] Month [0] P/L [1]
    ['May-2010', 310503],    // Data Group [04] Month [0] P/L [1]
    ['Jun-2010', 522857],    // Data Group [05] Month [0] P/L [1]
    ['Jul-2010', 1033096],   // Data Group [06] Month [0] P/L [1]
    ['Aug-2010', 604885],    // Data Group [07] Month [0] P/L [1]
    ['Sep-2010', -216386],   // Data Group [08] Month [0] P/L [1]
    ['Oct-2010', 477532],    // Data Group [09] Month [0] P/L [1]
    ['Nov-2010', 893810],    // Data Group [10] Month [0] P/L [1]
    ['Dec-2010', -80353],    // Data Group [11] Month [0] P/L [1]
    ['Jan-2011', 779806],    // Data Group [12] Month [0] P/L [1]
    ['Feb-2011', -335203],   // Data Group [13] Month [0] P/L [1]
    ['Mar-2011', 697845],    // Data Group [14] Month [0] P/L [1]
    ['Apr-2011', 793163],    // Data Group [15] Month [0] P/L [1]
    ['May-2011', 485070],    // Data Group [16] Month [0] P/L [1]
    ['Jun-2011', 584122],    // Data Group [17] Month [0] P/L [1]
    ['Jul-2011', 62729],     // Data Group [18] Month [0] P/L [1]
    ['Aug-2011', 668179],    // Data Group [19] Month [0] P/L [1]
    ['Sep-2011', 899906],    // Data Group [20] Month [0] P/L [1]
    ['Oct-2011', 834719],    // Data Group [21] Month [0] P/L [1]
    ['Nov-2011', 132003],    // Data Group [22] Month [0] P/L [1]
    ['Dec-2011', 309978],    // Data Group [23] Month [0] P/L [1]
    ['Jan-2012', -755566],   // Data Group [24] Month [0] P/L [1]
    ['Feb-2012', 1170593],   // Data Group [25] Month [0] P/L [1]
    ['Mar-2012', 252788],    // Data Group [26] Month [0] P/L [1]
    ['Apr-2012', 1151518],   // Data Group [27] Month [0] P/L [1]
    ['May-2012', 817256],    // Data Group [28] Month [0] P/L [1]
    ['Jun-2012', 570757],    // Data Group [29] Month [0] P/L [1]
    ['Jul-2012', 506702],    // Data Group [30] Month [0] P/L [1]
    ['Aug-2012', -1022534],  // Data Group [31] Month [0] P/L [1]
    ['Sep-2012', 475062],    // Data Group [32] Month [0] P/L [1]
    ['Oct-2012', 779976],    // Data Group [33] Month [0] P/L [1]
    ['Nov-2012', 144175],    // Data Group [34] Month [0] P/L [1]
    ['Dec-2012', 542494],    // Data Group [35] Month [0] P/L [1]
    ['Jan-2013', 359333],    // Data Group [36] Month [0] P/L [1]
    ['Feb-2013', 321469],    // Data Group [37] Month [0] P/L [1]
    ['Mar-2013', 67780],     // Data Group [38] Month [0] P/L [1]
    ['Apr-2013', 471435],    // Data Group [39] Month [0] P/L [1]
    ['May-2013', 565603],    // Data Group [40] Month [0] P/L [1]
    ['Jun-2013', 872480],    // Data Group [41] Month [0] P/L [1]
    ['Jul-2013', 789480],    // Data Group [42] Month [0] P/L [1]
    ['Aug-2013', 999942],    // Data Group [43] Month [0] P/L [1]
    ['Sep-2013', -1196225],  // Data Group [44] Month [0] P/L [1]
    ['Oct-2013', 268997],    // Data Group [45] Month [0] P/L [1]
    ['Nov-2013', -687986],   // Data Group [46] Month [0] P/L [1]
    ['Dec-2013', 1150461],   // Data Group [47] Month [0] P/L [1]
    ['Jan-2014', 682458],    // Data Group [48] Month [0] P/L [1]
    ['Feb-2014', 617856],    // Data Group [49] Month [0] P/L [1]
    ['Mar-2014', 824098],    // Data Group [50] Month [0] P/L [1]
    ['Apr-2014', 581943],    // Data Group [51] Month [0] P/L [1]
    ['May-2014', 132864],    // Data Group [52] Month [0] P/L [1]
    ['Jun-2014', 448062],    // Data Group [53] Month [0] P/L [1]
    ['Jul-2014', 689161],    // Data Group [54] Month [0] P/L [1]
    ['Aug-2014', 800701],    // Data Group [55] Month [0] P/L [1]
    ['Sep-2014', 1166643],   // Data Group [56] Month [0] P/L [1]
    ['Oct-2014', 947333],    // Data Group [57] Month [0] P/L [1]
    ['Nov-2014', 578668],    // Data Group [58] Month [0] P/L [1]
    ['Dec-2014', 988505],    // Data Group [59] Month [0] P/L [1]
    ['Jan-2015', 1139715],   // Data Group [60] Month [0] P/L [1]
    ['Feb-2015', 1029471],   // Data Group [61] Month [0] P/L [1]
    ['Mar-2015', 687533],    // Data Group [62] Month [0] P/L [1]
    ['Apr-2015', -524626],   // Data Group [63] Month [0] P/L [1]
    ['May-2015', 158620],    // Data Group [64] Month [0] P/L [1]
    ['Jun-2015', 87795],     // Data Group [65] Month [0] P/L [1]
    ['Jul-2015', 423389],    // Data Group [66] Month [0] P/L [1]
    ['Aug-2015', 840723],    // Data Group [67] Month [0] P/L [1]
    ['Sep-2015', 568529],    // Data Group [68] Month [0] P/L [1]
    ['Oct-2015', 332067],    // Data Group [69] Month [0] P/L [1]
    ['Nov-2015', 989499],    // Data Group [70] Month [0] P/L [1]
    ['Dec-2015', 778237],    // Data Group [71] Month [0] P/L [1]
    ['Jan-2016', 650000],    // Data Group [72] Month [0] P/L [1]
    ['Feb-2016', -1100387],  // Data Group [73] Month [0] P/L [1]
    ['Mar-2016', -174946],   // Data Group [74] Month [0] P/L [1]
    ['Apr-2016', 757143],    // Data Group [75] Month [0] P/L [1]
    ['May-2016', 445709],    // Data Group [76] Month [0] P/L [1]
    ['Jun-2016', 712961],    // Data Group [77] Month [0] P/L [1]
    ['Jul-2016', -1163797],  // Data Group [78] Month [0] P/L [1]
    ['Aug-2016', 569899],    // Data Group [79] Month [0] P/L [1]
    ['Sep-2016', 768450],    // Data Group [80] Month [0] P/L [1]
    ['Oct-2016', 102685],    // Data Group [81] Month [0] P/L [1]
    ['Nov-2016', 795914],    // Data Group [82] Month [0] P/L [1]
    ['Dec-2016', 60988],     // Data Group [83] Month [0] P/L [1]
    ['Jan-2017', 138230],    // Data Group [84] Month [0] P/L [1]
    ['Feb-2017', 671099]     // Data Group [85] Month [0] P/L [1]
];

// STEP ONE PART ONE - Create An Empty Array For The Months Within The Finances Array To Go Into
var FinancesMonths = []
// STEP ONE PART TWO - Create A For Loop To Identify The Month In Each Group Of Data
for (var GroupNumber = 0; GroupNumber < Finances.length; GroupNumber ++) {
    // STEP ONE PART THREE - Push Finances Array Months Into New Array
    FinancesMonths.push(Finances[GroupNumber][0]);
}
// STEP ONE PART FOUR - Create An Empty Array For The Profits/Losses Within The Finances Array To Go Into
var FinancesProfits = []
// STEP ONE PART FIVE - Create A For Loop To Identify The Profit/Loss In Each Group Of Data
for (var GroupNumber = 0; GroupNumber < Finances.length; GroupNumber ++) {
    // STEP ONE PART SIX - Push Finances Array Profits/Losses Into New Array
    FinancesProfits.push(Finances[GroupNumber][1]);
}

// STEP TWO PART ONE - Create A New Variable To Store The Number Of Months In The Data Set "Months"
var TotalMonths = FinancesMonths.length;

/* STEP THREE - Figure Out A Way To Calculate The Net Total Amount Of Profit/Losses 
   Manual Way Of Working It Out:
   ** ADD Up Each Record Of The Profit/Losses Field **
*/

/* STEP FOUR - Figure Out A Way To Calculate The Average Change In Profit/Losses 
   Manual Way Of Working It Out:
   1) Calculate The Difference Between Each Field
   2) Store This Information Somewhere
   3) Add Up All The Differences In Profit/Losses
   4) Divide By The Total Amount Of Losses
*/

/* STEP FIVE - Figure Out A Way To Calculate The Greatest Increase In Profit 
   Identify By Both:
   1) Date (Month/Year)
   2) Amount
*/

/* STEP SIX - Figure Out A Way To Calculate The Greatest Decrease In Losses
   Identify By Both:
   1) Date (Month/Year)
   2) Amount
*/

/* STEP SEVEN - Print Results Of Above Calculations To The Console */

/* STEP EIGHT - Confirm Results Are Correct */