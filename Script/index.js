// STARTER CODE - Array With Month And Profit/Loss Data
var Finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
]

// STEP ONE PART ONE - Create An Empty Array For The Months Within The Finances Array To Go Into
var FinancesMonths = []
// STEP ONE PART TWO - Create A For Loop To Identify The Month In Each Group Of Data
for (var GroupNumber = 0; GroupNumber < Finances.length; GroupNumber++) {
    // STEP ONE PART THREE - Push Finances Array Months Into New Array
    FinancesMonths.push(Finances[GroupNumber][0]);
}
// STEP ONE PART FOUR - Create An Empty Array For The Profits/Losses Within The Finances Array To Go Into
var FinancesProfits = []
// STEP ONE PART FIVE - Create A For Loop To Identify The Profit/Loss In Each Group Of Data
for (var GroupNumber = 0; GroupNumber < Finances.length; GroupNumber++) {
    // STEP ONE PART SIX - Push Finances Array Profits/Losses Into New Array
    FinancesProfits.push(Finances[GroupNumber][1]);
}

// STEP TWO PART ONE - Create A New Variable To Store The Number Of Months In The Data Set "Months"
var TotalMonths = FinancesMonths.length;

// STEP THREE PART ONE - Create A Variable For The Sum Of Profit/Losses
var ProfitSum = 0;
// STEP THREE PART TWO - Create A For Loop To Add Up The Profits/Losses
for (var ArrayNumber = 0; ArrayNumber < FinancesProfits.length; ArrayNumber++) {
    ProfitSum += FinancesProfits[ArrayNumber];
}

// STEP FOUR PART ONE - Create An Empty Array For The Changes In Profit/Loss To Go Into
var ProfitChange = [];
// STEP FOUR PART TWO - Create A For Loop To Identify The Profit/Loss In The Array
for (var ArrayNumber = 1; ArrayNumber < FinancesProfits.length; ArrayNumber++) {
    // STEP FOUR PART THREE - Calculate And Push The Difference Of Profit/Losses Into New Array
    ProfitChange.push(FinancesProfits[ArrayNumber] - FinancesProfits[ArrayNumber - 1]);
}
// STEP FOUR PART FOUR - Create A Variable For The Sum Of Profit/Loss Changes
var ProfitChangeSum = 0;
// STEP FOUR PART FIVE - Create A For Loop To Add Up The Differences In Profit/Losses
for (var DataNumber = 0; DataNumber < ProfitChange.length; DataNumber++) {
    ProfitChangeSum += ProfitChange[DataNumber];
}
// STEP FOUR PART SIX - Divide The Sum Of Differences By The Number Of Changes
var AverageDifference = (ProfitChangeSum / ProfitChange.length);
// STEP FOUR PART SEVEN - Round The Average Difference To Two Decimal Places
AverageDifference = AverageDifference.toFixed(2);

// STEP FIVE PART ONE - Find The Biggest Value In The ProfitChange Array
var MaxChange = Math.max.apply(Math, ProfitChange);
// STEP FIVE PART TWO - Find The Index Of The Biggest Value In The ProfitChange Array
var MaxChangeIndex = ProfitChange.indexOf(MaxChange);
// STEP FIVE PART THREE - Calculate What The Previous Index Equates To In The Finances Array
var FinancesMaxChangeIndex = MaxChangeIndex + 1;
// STEP FIVE PART FOUR - Allocate The Biggest Change In Profits To A New Variable
var Biggest_Profit_Change = (Finances[FinancesMaxChangeIndex][0] + " (+$" + MaxChange + ")");

// STEP SIX PART ONE - Find The Smallest Value In The ProfitChange Array
var MinChange = Math.min.apply(Math, ProfitChange);
// STEP SIX PART TWO - Find The Index Of The Smallest Value On The ProfitChange Array
var MinChangeIndex = ProfitChange.indexOf(MinChange);
// STEP SIX PART THREE - Calculate What The Previous Index Equates To In The Finances Array
var FinancesMinChangeIndex = MinChangeIndex + 1;
// STEP SIX PART FOUR - Allocate The Smallest Change In Profits To A New Variable
var Smallest_Profit_Change = (Finances[FinancesMinChangeIndex][0] + " ($" + MinChange + ")");

// STEP SEVEN PART ONE - Print Results Of Above Calculations To The Console
console.log("Financial Analysis");
console.log("---------------------------------------------------------------------")
console.log("Total Months In Period: " + TotalMonths);
console.log("Net Total Amount Of Profit/Loss: $" + ProfitSum);
console.log("Average Change In Profit/Loss: $" + AverageDifference);
console.log("Month That Saw The Biggest Increase In Profits: " + Biggest_Profit_Change);
console.log("Month That Saw The Biggest Decrease In Profits: " + Smallest_Profit_Change);

// Alert The User To Open The Console
alert("Open The Console To See The Results!!");