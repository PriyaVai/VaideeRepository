var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j <= 0 ;j-- )
     str_all +=inner_array[j]
 console.log(str_all);
}
console.log(str_all);