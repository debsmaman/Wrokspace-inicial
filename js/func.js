const productos_url = "https://faba14.github.io/json/listado.jsons";

function cargarDatos(url) {
    document.getElementById("productos").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {
            datos.listado.forEach(element => {
                
            
            let row="" ;
            row =`
            <h3> ` + element.nombre + `</h3>
            <p> `+element.descripcion+`</p>
            <p> `+element.preciodesde+` </p>
            <img src="`+element.img+`" height="200px">
									`;
                  document.getElementById("productos").innerHTML += row;
                });
        })
        .catch(error => alert("Hubo un error: " + error));
}