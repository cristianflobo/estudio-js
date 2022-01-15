$("#boton").click(function () {
  let listaamigos = document.getElementById("lista");
  listaamigos.replaceChildren();
  $.get("http://localhost:5000/amigos", function (data) {
    for (let i = 0; i < data.length; i++) {
      let liamigos = document.createElement("li");
      liamigos.append(`${data[i].name}`);
      listaamigos.appendChild(liamigos);
    }
  });
});

$("#search").click(function () {
  let valor = document.getElementById("input").value;
  //let valor2 = input.value;
  // console.log(valor2)
  //  let nombre = document.getElementById('amigo').innerText;
  // console.log(nombre)
  // let nombre = amigo.innerText
  $.get(`http://localhost:5000/amigos/${valor}`, function (data) {
    document.getElementById("amigo").innerText = data.name;
    console.log(data);
  });
});
$("#delete").click(function () {
  let valor = document.getElementById("inputDelete").value;

  $.ajax({
    url: `http://localhost:5000/amigos/${valor}`,
    type: "DELETE",
    success: function (result) {
      document.getElementById("sucess").innerText = `amigo eliminado `;
    },
  });
});
