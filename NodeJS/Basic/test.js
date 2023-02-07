
        const btns = document.querySelectorAll('button');

        var a = {
           b: function() {
               console.log(this); //指向a
               var func = function() {
                   console.log(this.c);  //指向window
               };
           func();
           },
           c: 'hello'
        }

    