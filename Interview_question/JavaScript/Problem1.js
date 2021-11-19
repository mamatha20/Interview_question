function birdayCakeCandles (s){
    var i=1;
    var l= [];
    while (i<=s){
        var num=require("readline-sync");
        let num1=num.question("enter your number");
        l.push(num1)
        i++ ;
    }
    console.log(l);
    var j=0 ;
    var max = 0;
    while (j<l.length){
        if (max <l[j]){
            max=l[j];
        }
        j++;
    }
    console.log(max)
    var k=0;
    var c=0;
    while (k<l.length){
        if (max.includes(l[k])){
            c++;
        }
        k++;
    }
    console.log(c)
}
var a=require("readline-sync")
var s=a.question("enter any number")
birdayCakeCandles(s)