function saludar(mensaje, color) {
  if (color == "rojo") {
  } else {
  }
  document.write();
}

function mostraFecha() {
  var tiempo = document.getElementById("tiempo");
  tiempo.innerHTML = date();
}
function borrarFecha() {
  var tiempo = document.getElementById("tiempo");
  tiempo.innerHTML = date();
}

$("#tabla_calificacion").on("click", " tr .ver", function () {
  let row = $(this).closest("tr");
  let nombre = row.find("td:eq(1)").text();
  let calificacion = row.find(".calificacion").val();
  alert("La calificacion de " + nombre + " - " + calificacion + " estrellas");
});

$("#tabla_calificacion").on("click", " tr .fa-star", function (e) {
  let count;
  count = e.currentTarget.id[0];
  let nombre = e.currentTarget.id.substring(1);
  let row = $(this).closest("tr");
  row.find(".calificacion").val(count);
  for (let i = 0; i < 5; i++) {
    //i=0 , i=1, i=2, i=3, i=4
    if (i < count) {
      document.getElementById(i + 1 + nombre).style.color = "orange";
    } else {
      document.getElementById(i + 1 + nombre).style.color = "black";
    }
  }
});

function mensaje() {
  alert("Gracias por calificar con" + count + " estrellas");
}

function Mostrar() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  $("#carouselExampleDark").empty();
  $("#intro").empty();
  $("#portafolio").empty();
  $("#estrella").empty();
  $("#MapAud").empty();
}


//jquery funcion 
function da() {
  $("#pSinop").text("Hello world!");
}


$(document).ready(function () {
  $("button").click(function () {
    let src = $(this).attr("id");
    switch (src) {
      case "Thor.jpg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/VsK4iSX4BYI");
        Mostrar();
        break;
      case "antman.jpg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/42h1BHPf0ag");
        $("#imgSinop").attr("src", "./img/antman.jpg");
        $("#hSinop").text("AntMan");
        //$("#pSinop").text("");
        Mostrar();
        break;
      case "vengadores.jpg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/HQIiYqOVTWo");
        $("#imgSinop").attr("src", "./img/vengadores.jpg");
        $("#hSinop").text("Vengadores");
        //$("#pSinop").text("");
        Mostrar();
        break;
      case "capitan.jpg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/B96CZzcM1CA");
        $("#imgSinop").attr("src", "./img/capitan.jpg");
        $("#hSinop").text("Capitan America");
        //$("#pSinop").text("");
        Mostrar();
        break;
      case "civilwar.jpg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/LuOLcuKVFwY");
        $("#imgSinop").attr("src", "./img/capitan.jpg");
        $("#hSinop").text("Capitan America CivilWar");
        //$("#pSinop").text("");
        Mostrar();
        break;
      case "cruela.jpg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/oK13SZYZqmA");
        $("#imgSinop").attr("src", "./img/cruela.jpg");
        $("#hSinop").text("Capitan America CivilWar");
        //$("#pSinop").text("");
        Mostrar();
        break;
      case "gg.jpeg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/fCPEpGpem3I");
        $("#imgSinop").attr("src", "./img/gg.jpeg");
        $("#hSinop").text("Guardianes de la Galaxia Vol.2");
        //$("#pSinop").text("");
        Mostrar();
        break;
      case "gg.jpg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/qdIuXCfUKM8");
        $("#imgSinop").attr("src", "./img/gg.jpg");
        $("#hSinop").text("Guardianes de la Galaxia Vol.1");
        //$("#pSinop").text("");
        Mostrar();
        break;
      case "ironman.jpg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/Ga817lEqAoI");
        $("#imgSinop").attr("src", "./img/ironman.jpg");
        $("#hSinop").text("IRON MAN 3");
        //$("#pSinop").text("");
        Mostrar();
        break;
      case "moonfall.jpeg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/5ZvH_pIq1Oc");
        $("#imgSinop").attr("src", "./img/moonfall.jpeg");
        $("#hSinop").text("MoonFall");
        //$("#pSinop").text("");
        Mostrar();
        break;
      case "panter.jpg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/JK-wAfAvJ0g");
        $("#imgSinop").attr("src", "./img/panter.jpg");
        $("#hSinop").text("Pantera Negra");
        //$("#pSinop").text("");
        Mostrar();
        break;
      case "ragnarock":
        $("#hSinop").text("Thor Ragnarock");
        //$("#pSinop").text("");
        Mostrar();
        break;
      case "spiderman.jpg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/3fX1O-xKsFg");
        $("#imgSinop").attr("src", "./img/spiderman.jpg");
        $("#hSinop").text("SpiderMan Homecoming");
        //$("#pSinop").text("");
        Mostrar();
        break;
      case "strange.jpg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/zJINUsjyFf8");
        $("#imgSinop").attr("src", "./img/strange.jpg");
        $("#hSinop").text("Dr. Strange");
        //$("#pSinop").text("");
        Mostrar();
        break;
      case "UNcharted.jpeg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/Sn5sRX6jaxk");
        $("#imgSinop").attr("src", "./img/UNcharted.jpeg");
        $("#hSinop").text("Uncharted");
        //$("#pSinop").text("");
        Mostrar();
        break;
      case "Batman.jpg":
        $("#ifSinop").attr("src", "https://www.youtube.com/embed/FUP3P9_mqvA");
        $("#imgSinop").attr("src", "./img/Batman.jpg");
        $("#hSinop").text("The Batman");
        //$("#pSinop").text("");
        Mostrar();
        break;
      default:
        alert("Error al cargar");
        break;
    }
  });
});
