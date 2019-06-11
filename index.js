
a = 6;
b="5";
c=7;
d="D";

document.write("a is " + a);
document.write("<br>");
document.write("b is " + '"' + b + '"');
document.write("<br>");
document.write("c is " + c);
document.write("<br>");
document.write("d is " + d);
document.write("<br>========================================================<br>");


//Number(value=6) concat string (value=5)
ans1 = a + b;
document.write("a+b is " + ans1);
document.write("<br>");
document.write("Number(value=6) concat string (value=5)")
document.write("<br>");
document.write("<br>");


//Number(value=6) multiply to a string(value=5)
ans2 = a * b;
document.write("a*b is " + ans2);
document.write("<br>");
document.write("Number(value=6) multiply to a string(value=5)")
document.write("<br>");
document.write("<br>========================================================<br>");


//Number(value=6) add Number(value=7) then concat to the string(value=5)
ans3 = a + c + b;
document.write("a + c + b is " + ans3);
document.write("<br>");
document.write("Number(value=6) add Number(value=7) then concat to the string(value=5)");
document.write("<br>");
document.write("<br>");



//String(value=5) concat to the Number(value=6) then concat the number(value=7) *The statement starts with string, everything is read as string for addition*
ans4 = b + a + c;
document.write("b + a + c is " + ans4);
document.write("<br>");
document.write("<p>String(value=5) concat to the Number(value=6) then concat the number(value=7) <br>***The statement starts with string, everything is read as string for addition</p>");
document.write("<br>");

//Number(value=6 concat to the Number(value=5) then concat the number(value=7) *The statement has a string in the middle, everything is read as string for addition*
ans5 = a + b + c;
document.write("b + a + c is " + ans5);
document.write("<p>Number(value=6 concat to the Number(value=5) then concat the number(value=7) <br> ***The statement has a string in the middle, everything is read as string for addition*</p>");
document.write("<br>");
document.write("<br>");

//String(value=5) contact to the Number(value=6) then minus to the Number(value=7) ***Addition of String and Number will be concat value; Value will be minus to the Number;
//5 + 6 - 7
//56(concat) -7 = 49
ans6 = b + a - c;
document.write("b + a - c is " + ans6);
document.write("<br>");
document.write(" 5 + 6 - 7 (5 and 6 are concatinated)");
document.write("<br> 56 -7 = 49");
document.write("<p>String(value=5) contact to the Number(value=6) then minus to the Number(value=7) <br>***Addition of String and Number will be concat value; Value will be minus to the Number;</p>");
document.write("<br>========================================================<br>");

//Number(value=6) concat with the String(value='D')
ans7 = a + d;
document.write("a + d is " + ans7);
document.write("<br>");
document.write("Number(value=6) concat with the String(value='D')");
document.write("<br>");
document.write("<br>");


//Number(value=6) cannot be computed/minus to a String(value='D'). Answer will "NaN" (Not A Number)
ans8 = a - d;
document.write("a - d is " + ans8);
document.write("<br>");
document.write("Number(value=6) cannot be computed/minus to a String(value='D'). Answer will NaN (Not A Number)")
document.write("<br>");
document.write("<br>");
document.write("<br>========================================================<br>");

//String(value=5) is converted to Number and then Added to the Number(value=6)
ans9 = parseInt(b) + a;
document.write("parseInt(b) + a is " + ans9);
document.write("<br>");
document.write("String(value=5) is converted to Number and then Added to the Number(value=6)");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
 


