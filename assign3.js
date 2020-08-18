function validate1(){ 
var fname = document.getElementById("field_1").value;
        var rel = /^[a-zA-Z\s\'\-]{2,15}$/;
        if (rel.test(fname)) {
          document.getElementById("name_field1").style.color = "green";
          document.getElementById("name_field1").innerHTML = "Hi  "+ fname +"!!";
        } else {
          document.getElementById("name_field1").style.color = "Red";
          document.getElementById("name_field1").innerHTML =
            "Please enter 2-15 characters";

        }
}
