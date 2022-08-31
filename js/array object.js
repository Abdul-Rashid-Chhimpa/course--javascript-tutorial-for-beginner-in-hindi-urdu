
    var a = {
      firstname: 'abdul',
      lastname : 'rashid',
       country : 'india',
              //in Array object as array called.
       array : ["abdul","rashid"],
             //in Array object as function called.
        salary : function()
       {
         var a = 10;
         var b = 10;
             return a+b;
       }

    }
    document.write(a.salary());
      console.log(a.salary());

      /* diff in array and array object .in array as use index number[0,1,2,......]) but in array object as use properties.
          for example:-firstname,lastname,age,country....so on.
            in array object use inside a multiple function.*/
