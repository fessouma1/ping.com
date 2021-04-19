let width = window.innerWidth;

const emailStyle = document.querySelector("#emailStyle");
const emailInput = document.querySelector("#emailInput");
const buttonStyle = document.querySelector("#buttonStyle");
const buttonInput = document.querySelector("#buttonInput");


function myFunction() {
    if (width < 780)
    {
        emailStyle.className="col-sm-12";
        emailStyle.style="text-align: center";
        buttonStyle.className="col-sm-12";
        buttonStyle.style="text-align: center; padding-top:2%;";

      }
      else
      {

      }
}

