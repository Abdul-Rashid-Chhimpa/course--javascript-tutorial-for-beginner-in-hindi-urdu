<!DOCTYPE html>
<html>
  <head>
  <script>
    var ages = [20];
document.write(ages + "<br><br>");
 var b = ages.filter(checkadult);

 function checkadult(age)
 {
   if(age>=18)
   {
     alert("you are adult");
   }
   else {
      alert("you are not adult");
   }
 }
 document.write(b + "<br><br>");


  </script>
  </head>
  <body>

  </body>
</html>
