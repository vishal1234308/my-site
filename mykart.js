function validate1(){ 
var fname = document.getElementById("field_1").value;
        var rel = /^[a-zA-Z\s\'\-]{2,15}$/;
        if (rel.test(fname)) {
          document.getElementById("name_field1").style.color = "white";
          document.getElementById("name_field1").innerHTML = "Hi  "+ fname +"!!";
        } else {
          document.getElementById("name_field1").style.color = "white";
          document.getElementById("name_field1").innerHTML = "Please enter 2-15 characters";

        }
}
function mark() {
var first=document.getElementById("field_1").value; 
var last=document.getElementById("field_2").value;
var name=first+" " +last;
 if (first==""||last=="") {
          document.getElementById("MARK").style.color = "red";
document.getElementById("MARK").style.fontSize = "30px";
          document.getElementById("MARK").innerHTML = "please enter the required info";
        } else {
          document.getElementById("MARK").style.color = "white";
document.getElementById("MARK").style.fontSize = "30px";
          document.getElementById("MARK").innerHTML = "Account created successfully!!!";

        }


 
      }


function intro(){
document.getElementById("name_field5").style.color = "white";
          document.getElementById("name_field5").innerHTML = "Account created!!";
}

function validate2(){ 
var fname = document.getElementById("field_2").value;
        var rel = /^[a-zA-Z\s\'\-]{2,15}$/;
        if (rel.test(fname)) {
          document.getElementById("name_field2").style.color = "green";
          document.getElementById("name_field2").innerHTML = " ";
        }
 else {
          document.getElementById("name_field2").style.color = "Red";
          document.getElementById("name_field2").innerHTML ="!!!"

        }
}