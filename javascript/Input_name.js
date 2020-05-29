function input_name() {
    var txt;
    var name=prompt("Input your name");
    if(name == null || name == ""){
      txt="Cancelled";
    }
    else {
      txt="My name is "+name;
    }
    document.getElementById("name").innerHTML = txt;
}
