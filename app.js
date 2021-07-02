
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
        buttonStyle.style="text-align: center; padding-top:15%;";
        mail.style="font-size:15px;color: red; font-family: 'Gill Sans', 'Gill Sans MT'; width:100%; height:50%; paddind:2%; text-align:center"
        emailInput.style="width: 100%"

      }
      else
      {

      }
}
let mail = document.getElementById("check")

function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
  
  mail.innerHTML = "Your email was valid"
  event.preventDefault()

}
else
{
  mail.innerHTML ="Please provide a valid email address"
  event.preventDefault()
}
}
