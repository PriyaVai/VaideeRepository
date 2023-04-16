var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
 }
})();