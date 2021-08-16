setTimeout(function timer10() {
  document.getElementById("demo").innerHTML = "10";
  setTimeout(function timer9() {
    document.getElementById("demo").innerHTML = "9";
    setTimeout(function timer8() {
      document.getElementById("demo").innerHTML = "8";
      setTimeout(function timer7() {
        document.getElementById("demo").innerHTML = "7";
        setTimeout(function timer6() {
          document.getElementById("demo").innerHTML = "6";
          setTimeout(function timer5() {
            document.getElementById("demo").innerHTML = "5";
            setTimeout(function timer4() {
              document.getElementById("demo").innerHTML = "4";
              setTimeout(function timer3() {
                document.getElementById("demo").innerHTML = "3";
                setTimeout(function timer2() {
                  document.getElementById("demo").innerHTML = "2";
                  setTimeout(function timer1() {
                    document.getElementById("demo").innerHTML = "1";
                    setTimeout(function timer1() {
                      document.getElementById("demo").innerHTML =
                        "Happy Independence Day";
                      document.getElementById("imgcontainer").style.visibility =
                        "visible";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
