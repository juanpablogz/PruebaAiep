
//Visualizar ubicacion del mapa

function iniciarMap() {
    var coord = {lat:-33.437797 ,lng: -70.650445};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

//Funcion que permite selecionar ficheros de pagina galeria

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

// Remueve clase activa 

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Agregar clase activa al botón actual

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

function enviar_nota() {
    
    var nota1 = $("#nota1").val();
    var nota2 = $("#nota2").val();
                
    messages = "Juan Pablo Gomez Nota : " + nota1;
    messages = messages + " / Juan Pablo Galaz Nota : " + nota2

    alert(messages);
        
    //Email.send({
    //    Host : "-",
    //    Username : "-",
    //    Password : "-",
    //    To : "jgalazvidal@gmail.com",
    //    From : "juanpablogomezzapata@gmail.com",
    //    Subject : "NOTAS PAGINA",
    //    Body : messages
    //}).then(message => alert(message)
    //);

    $("#nota1").val('');
    $("#nota2").val('');
}

function enviar() {

    var email = $("#email").val();
    var messages = $("#message").val();

    var nombre = $("#nombre").val() + ' ' +  $("#apellido").val()+ ' ' +  $("#fono").val(); 

    alert(nombre + ' ' + messages);
        
    //Email.send({
    //            Host : "-",
    //            Username : "-",
    //            Password : "-",
    //            To : email,
    //            From : "juanpablogomezzapata@gmail.com",
    //            Subject : "TEST",
    //            Body : nombre + ' ' + messages
    //        }).then(
    //    message => alert(message)
    //    );

    $("#nombre").val('');
    $("#apellido").val('');
    $("#fono").val('');
    $("#email").val('');
    $("#message").val('');
}

