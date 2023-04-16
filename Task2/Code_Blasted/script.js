var a = "2" < "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//in String comparinsion 1 is less than the 2.
//That is why it returned true and code is blasted part got executed
//in order to run else part we need to change the expression as "2"<"12" or we have to convert the values to number and perform comparition