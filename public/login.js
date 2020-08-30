function login(){
  console.log(document.getElementById("user").value);
  console.log(document.getElementById("password").value);
    var name = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    var dbusers = ["LukKa", "SteWa", "LeoYu", "TimAk"];
    var dbpw = ["123", "321", "213", "231"];
    var count = 0;

    if(name == "" | password == "")
      window.alert("get some Inputs (Username / Password)")

    dbusers.forEach(element => {
      if(element == name && dbpw[count] == password){
        location = ("home.html");
      }
      else
        count++;
    });
}

var currentDate = new Date();
var month = currentDate.getMonth();
var day = currentDate.getDate();
var year = currentDate.getUTCFullYear();
var fullDate = day + "." + month + "." + year;