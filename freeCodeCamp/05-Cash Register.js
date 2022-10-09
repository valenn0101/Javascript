function checkCashRegister(price, cash, cid) {
var denomination = {
  PENNY: .01,
  NICKEL: .05,
  DIME: .10,
  QUARTER: .25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100
}

var total = cid.reduce((acc, val)=>{
return acc + val[1];
},0);
total = total.toFixed(2);
var change = cash - price;
var changeResult = [];
if(change > total){
  return {status: "INSUFFICIENT_FUNDS", change: changeResult};
}else if(change.toFixed(2) == total){
  return {status: "CLOSED", change: cid};
}else{
  cid = cid.reverse();
 for(var b of cid){
   var temp =[b[0], 0];
   while(change >= denomination[b[0]] && b[1] >0){
     temp[1] += denomination[b[0]];
     b[1] -= denomination[b[0]];
     change -= denomination[b[0]];
     change = change.toFixed(2);
   }
    if(temp[1] > 0){
      changeResult.push(temp);
    }
 }
}
 if(change > 0){
   return {status: "INSUFFICIENT_FUNDS", change: []};
 }
  return {status: "OPEN", change: changeResult};

}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));