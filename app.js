let arr = [1,2,3 ,4,5,6,7,8,9,10,345,6536,234,543];
console.log(arr);
let arrMapping = arr.map(function(x){
    return x+2;
});
console.log(arrMapping);



let arrFilters = arr.filter(function(x){
    return x<5;
})
console.log(arrFilters)
let maxValue = arr.reduce(function(max,current){
    if(current>max){
        max = current;
    }
    return max;
},0);
console.log(maxValue)

