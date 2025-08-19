window.onload = function() {
          document.getElementById("prekladac").onpointerover = function()
          {
              this.style.backgroundColor = "black";
			  this.style.color = "white";
          }

          document.getElementById("prekladac").onpointerout = function()
          {
              this.style.backgroundColor = "lightblue";
			  this.style.color = "darkred";
          }
      }