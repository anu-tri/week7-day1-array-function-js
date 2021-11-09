//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" 

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]*/

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEvens(inputarr){
    for(let i=0; i<inputarr.length; i+=2){
        inputarr.splice(i, 1, "even index");
    }
    return inputarr;
}
console.log(replaceEvens(arr))