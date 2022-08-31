
<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
  p{
    color:red;
  }
  body{
    background:lightgreen;
  }
      </style>
  <script>
    document.write("1.) without continue and break statement.....");
    document.write("<hr><br><br></hr>");
    for(var a=1; a<=10; a++)
    {
      if(a == 5)
      {
          document.write("Hello : " + a + "<br>");
             // without continue and break statement.
      }
      document.write("World : " + a + "<br>");
    }
  </script>
  </head>
  <body>

  </body>
</html>

<!DOCTYPE html>
<html>
  <head>

  <script>
      document.write("<hr><br><br></hr>");
    document.write(" 2.) continue statement.....");
      document.write("<hr><br><br></hr>");

    for(var a=1; a<=10; a++)
    {
      if(a == 5)
      {
          document.write("Hello : " + a + "<br>");
          continue;     // continue statement.
      }
      document.write("World : " + a + "<br>");
    }
  </script>
  </head>
  <body>

      </body>
</html>

<!DOCTYPE html>
<html>
  <head>

  <script>
    document.write("<hr><br><br></hr>");
  document.write(" 3.) break statement.....");
    document.write("<hr><br><br></hr>");
    for(var a=1; a<=10; a++)
    {
      if(a == 5)
      {
          document.write("Hello : " + a + "<br>");
           break;                 // break statement.
      }
      document.write("World : " + a + "<br>");
    }
  </script>
  </head>
  <body>

  </body>
</html>
