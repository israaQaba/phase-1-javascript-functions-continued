// code your solution here
const saturdayFun = (activity =`roller-skate`) => {
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun(`bathe my dog`);

console.log(saturdayFun());
console.log(saturdayFun(`bathe my dog`));



const mondayWork = (plans = `go to the office`) => {
    return(`This Monday, I will ${plans}.`);
}
mondayWork(`work from home`);

console.log(mondayWork());
console.log(mondayWork(`work from home`));







let wrapAdjective = function(star="*") {
    return function(sp="special") {
      return `You are ${star}${sp}${star}!`
    }
  }

