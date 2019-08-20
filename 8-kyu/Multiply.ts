/*
The code does not execute properly. Try to figure out why.
*/
export function multiply(...arr:number[]):number{
  return arr.reduce((a,b)=>a*b,1)
}
