function nonDivisibleSubset (){
    const number = [1,7,2,4];
    let S= " ";
    let arr = [];
    for (let i= 0; i< number.length; i++){
        for (let j =0; j<number.length; ++j){
            if (number[i]!=number[j]){
                S=number[i]+number[j];
                if (S%3!=0){
                    arr.push(number[i])
                }
            }
        }
        arr = arr.filter((v,i,a) => a.indexOf (v) === i);
    }
    console.log(arr)
}
nonDivisibleSubset ();
