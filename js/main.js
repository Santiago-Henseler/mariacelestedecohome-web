let producto_abierto = false;
let carrito_abierto = false;
let carrito = [];

class creador {
    constructor(nombre,precio,cantidad, tipo) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.tipo = tipo;
    }
}


window.onload = function () {
    cargar_productos("aromas");
    cargar_productos("bath");
    cargar_productos("textiles");
    cargar_productos("deco");
    cargar_productos("gift");
}

function inicio(){

    window.scrollTo(0,0);

    if(producto_abierto){
        document.getElementById("producto_abierto").style.display = "none";
        producto_abierto = false;
    }

    if(carrito_abierto){
        document.getElementById("carrito").style.display = "none";
        carrito_abierto = false;
    }

    document.getElementById("inicio").style.display = "block";
    document.getElementById("Nosotros").style.display = "block";
    document.getElementById("aromas").style.display = "block";
    document.getElementById("bath").style.display = "block";
    document.getElementById("textiles").style.display = "block";
    document.getElementById("deco").style.display = "block";
    document.getElementById("gift").style.display = "block";
    document.getElementById("Asesorias").style.display = "block";
    document.getElementById("mayorista").style.display = "block";

}

function get_products(type){

    if(type == "aromas"){
        return AROMAS;
    }else if (type == "bath"){
        return BATH;
    }else if(type == "textiles"){
        return TEXTILES;
    }else if(type == "gift"){
        return GIFT;
    }else if(type == "deco"){
      return DECO;
    }

}

function cargar_productos(type){

    let product_section = document.getElementById(`${type}`);
    let productos = get_products(type);
    let total = productos[0];

    for(let i = 1; i < total+1; i++){
        product_section.children[0].children[1].children[0].innerHTML += `
        <div class="col-12 col-md-4 col-lg-3 mb-5" style="width: 300px;">
        <a class="product-item" onclick="ver_mas('${type}','${i}')">
          <img 
            src="${productos[i][4][0]}" 
            class="img-fluid product-thumbnail" 
            style="object-fit: cover; width: 100%; height: 300px;">
          <h3 class="product-title">${productos[i][0]}</h3>
          <strong class="product-price">$${productos[i][1]}</strong>
          <span class="icon-cross">
            <img src="images/cross.svg" class="img-fluid">
          </span>
        </a>
      </div>
      `;
    }

    if(type == "gift"){
      product_section.children[0].children[0].innerHTML += `<p>Compra la GIFT CARD, luego nos pasas la información de la persona agasajada. Le enviamos o
      te enviamos como prefieras la GIFT CARD para que canjee.</p>`
    }

}

function ver_mas(type, pos){
    window.scrollTo(0,0);
    producto_abierto = true;
    document.getElementById("inicio").style.display = "none";
    document.getElementById("Nosotros").style.display = "none";
    document.getElementById("aromas").style.display = "none";
    document.getElementById("bath").style.display = "none";
    document.getElementById("textiles").style.display = "none";
    document.getElementById("deco").style.display = "none";
    document.getElementById("gift").style.display = "none";
    document.getElementById("Asesorias").style.display = "none";
    document.getElementById("mayorista").style.display = "none";
    window.scrollTo(0,0);
    let producto = get_products(type)[pos];

    let carrusel = "";

    for (i in producto[4]){

      if(i == 0){
        carrusel +=`     
        <div class="carousel-item active">
          <img src="${producto[4][i]}" style="filter: contrast(100%);"  alt="Imagen 1" class="d-block w-100">
        </div>`
      }else{
        carrusel +=`     
        <div class="carousel-item">
          <img src="${producto[4][i]}" style="filter: contrast(100%);" alt="Imagen 1" class="d-block w-100">
        </div>`
      }
    }

    let opciones = ""

    if(producto[5].length > 0){
      if(type == "aromas"){
        opciones += `      
        <label for="opciones">Selecciona un aroma:</label>
                     <select id="opciones" onchange="cambio_aroma()" name="opciones"> ` 
      }else if(type == "deco"){
        opciones += `<label for="opciones">Selecciona un color:</label>
                     <select id="opciones" name="opciones"> ` 
      }else if(type == "textiles"){
        opciones += `     
        <label for="opciones">Selecciona un aroma:</label>
                     <select id="opciones" onchange="cambio_color()" name="opciones"> ` 
      }
      for(i in producto[5]){
        opciones += `<option value="${producto[5][i]}")">${producto[5][i]}</option> ` 
      }
      opciones += `</select>` 
    }

    let aromas = "";

    if(type == "aromas"){
      aromas += `               
      <div class="border p-3 mb-5" id="aromadesc">
      <h3 class="h6 mb-0"><a class="d-block"  role="button" aria-expanded="true" aria-controls="collapsepaypal">OSLO</a></h3>

      <div  id="collapsepaypal">
        <div class="py-2">
          <p class="mb-0">Blend dulce con tinte frutal. Notas de sandía, sándalo, vainilla y coco. Crea un espacio de concentración y relajación.</p>
        </div>
      </div>
    </div>` 
    }

    document.getElementById("main").insertAdjacentHTML('afterbegin', ` 
    <section class="py-5" id="producto_abierto">
        <div class="container px-4 px-lg-5 my-5">
            <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6">
                  <div id="ProdCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    ${carrusel}
                    <button class="carousel-control-prev" type="button" data-bs-target="#ProdCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Anterior</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#ProdCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Siguiente</span>
                    </button>
                    </div>
                  </div>  
                </div>
                <div class="col-md-6">
                   <div class="small mb-1">${producto[2]}</div>
                    <h1 class="display-5 fw-bolder">${producto[0]}</h1>
                    <div class="fs-5 mb-5">
                    <!--  <span class="text-decoration-line-through">$${producto[1]}</span> -->
                        <span>$${producto[1]}</span>
                    </div>
                    <p class="lead">${producto[3]}</p>
                    <div class="fs-5 mb-5">
                    ${opciones}
                    </div>
                    <div id="color-box" style=" width: 100px; height:50px !important;background-color: transparent;"></div> 
                    <div id="aromas_tipo" class="fs-5 mb-5">
                    ${aromas}
                    </div>
                    <div class="d-flex">
                        <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem">
                        <button class="btn btn-outline-dark flex-shrink-0" onclick="add_cart('${type}','${pos}')" type="button">
                            <i class="bi-cart-fill me-1"></i>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
</section>`);
if(type == "textiles"){
  cambio_color();
}
window.scrollTo(0,0);
window.scrollTo(0,0);
}

function cambio_color(){
  let value = document.getElementById("opciones").value;

  document.getElementById("color-box").setAttribute("style", "border: 2px solid black !important;  width: 100px; height:50px !important;");

  if(value == "crudo" || value == "Crudo con bordado beige" || value == "Crudo con bordado marron"){
    document.getElementById("color-box").style.backgroundColor = "#D9DEE1";
  }else if(value == "khaki" || value == "Khaki con bordado crudo"){
    document.getElementById("color-box").style.backgroundColor = "#999089";
  }else if(value == "Blanco con bordado beige"){
    document.getElementById("color-box").style.backgroundColor = "#ffffff";
  }else if(value == "avellana" || value == "Avellana con bordado crudo"){
    document.getElementById("color-box").style.backgroundColor = "#AB8652";
  }else if(value == "Arena con bordado beige" || value == "arena"){
    document.getElementById("color-box").style.backgroundColor = "#BCB9B2";
  }else if("verde militar"){
    document.getElementById("color-box").style.backgroundColor = "#48584E";
  }
}

function cambio_aroma(){

  let value = document.getElementById("opciones").value;

  let html = document.getElementById("aromadesc");

  html.innerHTML = `               
  <h3 class="h6 mb-0"><a class="d-block"  role="button" aria-expanded="true" aria-controls="collapsepaypal">${value}</a></h3>

  <div  id="collapsepaypal">
    <div class="py-2">
      <p class="mb-0">${aroma_type(value)}</p>
    </div>
  </div>
` ;

}

function aroma_type(type){
  if(type == "Oslo"){
    return "Blend dulce con tinte frutal. Notas de sandía, sándalo, vainilla y coco. Crea un espacio de concentración y relajación.";
  }else if(type == "Verbena"){
    return "Blend herbal y cítrico. Notas de lima, limón y verbena. Transmite una sensación de energía y optimismo.";
  }else if(type == "White Flowers"){
    return "blend floral envolvente. Notas de flores blancas, nardos, jazmines, junquillos y tuberosas. Evocan un ambiente mágico y tranquilo";
  }else if(type == "Orange Pepper"){
    return "blend cítrico y picante. Notas de naranja y cítricos que contrastan con notas especiadas y picantes. Genera una sensación de bienestar y alegría.";
  }else{
    return "Blend cítrico con tinte floral. Notas de bergamota, lino y flores cítricas. Otorgan un momento de calma y frescura."
  }

}

function abrir_carrito(){
    
    if(carrito.length < 1){
        
        if(!carrito_abierto){
            swal("No hay productos en el carrito", "", "error");
        }
        
        inicio()
        return;
    }
    
    inicio()

    window.scrollTo(0,0);
    carrito_abierto = true;
    document.getElementById("inicio").style.display = "none";
    document.getElementById("Nosotros").style.display = "none";
    document.getElementById("aromas").style.display = "none";
    document.getElementById("bath").style.display = "none";
    document.getElementById("textiles").style.display = "none";
    document.getElementById("deco").style.display = "none";
    document.getElementById("gift").style.display = "none";
    document.getElementById("Asesorias").style.display = "none";
    document.getElementById("mayorista").style.display = "none";

    let products = [];
    let total = 0;

    for(let i = 0; i < carrito.length; i++){
        total += carrito[i]["cantidad"] * carrito[i]["precio"];
        products.push(
            `<tr>
                <td class="product-name">
                <h2 class="h5 text-black">${carrito[i]["nombre"]}</h2>
                </td>
                <td class="product-name">
                <h2 class="h5 text-black">${carrito[i]["tipo"]}</h2>
                </td>
                <td>$${carrito[i]["precio"]}</td>
                <td>
                <div onclick="cambiar_cantidad('${carrito[i]["nombre"]}', '${carrito[i]["tipo"]}', 'menos')" class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
                    <div class="input-group-prepend">
                    <button   class="btn btn-outline-black decrease" type="button">&minus;</button>
                    </div>
                    <input type="text" class="form-control text-center quantity-amount" value="${carrito[i]["cantidad"]}" readonly placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                    <div onclick="cambiar_cantidad('${carrito[i]["nombre"]}', '${carrito[i]["tipo"]}', 'mas')" class="input-group-append">
                    <button  class="btn btn-outline-black increase" type="button">&plus;</button>
                    </div>
                </div>
        
                </td>
                <td>$${carrito[i]["cantidad"] * carrito[i]["precio"] }</td>
                <td><a onclick="borrar_producto('${carrito[i]["nombre"]}', '${carrito[i]["tipo"]}')" class="btn btn-red btn-sm">X</a></td>
            </tr>
          `
        )
    }

    document.getElementById("main").insertAdjacentHTML('afterbegin', ` 
    <section class="py-5" id="carrito">
    <div class="untree_co-section before-footer-section">
    <div class="container">
      <div class="row mb-5">
        <form class="col-md-12" method="post">
          <div class="site-blocks-table">
            <table class="table">
              <thead>
                <tr>
                  <th class="product-name">Producto</th>
                  <th class="product-thumbnail">Tipo</th>
                  <th class="product-price">Precio</th>
                  <th class="product-quantity">Cantidad</th>
                  <th class="product-total">Total</th>
                </tr>
              </thead>
              <tbody>
                ${products}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    <center>
      <div class="row">
        <div class="col-md-6 pl-5">
          <div class="row justify-content-end">
            <div class="col-md-7">
              <div class="row mb-5">
              <div class="col-md-12">

                <div class="p-3 p-lg-5 border bg-white">
                  <table class="table site-block-order-table mb-5">
                    <tbody>
                      <tr>
                        <td class="text-black font-weight-bold"><strong> <h2 class="h3 mb-3 text-black">Total</h2></strong></td>
                        <td class="text-black font-weight-bold"><strong>$${total}</strong></td>
                      </tr>
                    </tbody>
                  </table>

                <div class="border p-3 mb-5">
                    <h3 class="h6 mb-0"><a class="d-block" data-bs-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="true" aria-controls="collapsepaypal">Formas de pago</a></h3>

                    <div class="collapse" id="collapsepaypal">
                      <div class="py-2">
                        <p class="mb-0">Mercado pago - Transferencia - Efectivo</p>
                      </div>
                    </div>

                </div>

                <div class="border p-3 mb-5">
                <h3 class="h6 mb-0"><a class="d-block" data-bs-toggle="collapse" href="#collapseenvio" role="button" aria-expanded="true" aria-controls="collapseenvio">Envio</a></h3>

                <div class="collapse" id="collapseenvio">
                  <div class="py-2">
                    <p class="mb-0">Envios a todo el pais</p>
                    <p class="mb-0">Una vez hecha la compra el envio se coordina a través de WhatsApp.</p>
                  </div>
                </div>
                </div>
                  <div class="row">
                    <div class="col-md-12">
                    <button class="btn btn-lg py-3 btn-block" onclick="enviar_compra()">Terminar compra</button>
                    </div>
                </div>

                </div>
              </div>
            </div>

              
            </div>
          </div>
        </div>
      </div>
      </center>
    </div>
  </div>
</section>`);
}

function enviar_compra(){

    let prod = []

    let precioFinal = 0

    for (i in carrito) {
        prod += `${carrito[i]["nombre"]}+++++++${carrito[i]["tipo"]}+++++++${carrito[i]["cantidad"]}+++%24${carrito[i]["precio"] * carrito[i]["cantidad"]}%0A`;

        precioFinal += carrito[i]["precio"] * carrito[i]["cantidad"];

    }

    let telefono = "+5401124030967";

    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=%2A_Maria+Celeste+Home+%26+Deco_%2A%0A%0Aproducto+++%7C++tipo+++%7C++cantidad++%7C++total+++%0A+${prod}%0A%0A%2ATotal%3A%2A+%24${precioFinal}`;

    window.open(url);
    location.reload(true);


}

function borrar_producto(nombre, selected){

    for (i in carrito) {
        if (carrito[i]["nombre"] == nombre, carrito[i]["tipo"] == selected) {
            carrito.splice(i, 1);
        }
    }

    swal("Producto borrado del carrito", "", "success");

    carrito_abierto = true;
    abrir_carrito();
}

function cambiar_cantidad(nombre, tipo, forma){
  for (i in carrito) {
    if (carrito[i]["nombre"] == nombre, carrito[i]["tipo"] == tipo) {
        if(forma == "menos"){
          carrito[i]["cantidad"] -= 1;

          if(carrito[i]["cantidad"] <= 0){
            borrar_producto(nombre, tipo)
          }

        }else{
          carrito[i]["cantidad"] += 2;
        }
    }
  }
  abrir_carrito()
}

function existe_producto(producto, cantidad, selected){
    let existe = false;
    for (i in carrito) {
        if (carrito[i]["nombre"] == producto, carrito[i]["tipo"] == selected) {
            existe = true;
            carrito[i]["cantidad"] += cantidad;
        }
    }
    return existe;
}

function add_cart(type, pos){
    swal("Producto añidido al carrito", "", "success");
    let producto = get_products(type)[pos];

    let selected = "";

    if(type == "aromas" || type == "textiles" || type == "deco"){
      selected = document.getElementById("opciones").value;
    }

    let cantidad = parseInt(document.getElementById("inputQuantity").value);
    if(!existe_producto(producto[0], cantidad, selected)){
        carrito.push(new creador(producto[0], producto[1], cantidad, selected));
    }
}