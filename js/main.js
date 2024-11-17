let producto_abierto = false;
let carrito = [];

class creador {
    constructor(nombre,precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}


window.onload = function () {
    cargar_productos("aromas");
    cargar_productos("bath");
    cargar_productos("textiles");
    cargar_productos("gift");
}

function inicio(){

    window.scrollTo(0,0);

    if(producto_abierto){
        document.getElementById("producto_abierto").style.display = "none";
        producto_abierto = false;
    }

    document.getElementById("inicio").style.display = "block";
    document.getElementById("Nosotros").style.display = "block";
    document.getElementById("aromas").style.display = "block";
    document.getElementById("bath").style.display = "block";
    document.getElementById("textiles").style.display = "block";
    document.getElementById("gift").style.display = "block";

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
    }

}

function cargar_productos(type){

    let product_section = document.getElementById(`${type}`);
    let productos = get_products(type);
    let total = productos[0];

    for(let i = 1; i < total+1; i++){
        product_section.children[0].children[1].children[0].innerHTML += `
        <div class="col-12 col-md-4 col-lg-3 mb-5">
            <a class="product-item">
                <img src="${productos[i][3][0]}" class="img-fluid product-thumbnail">
                <h3 class="product-title">${productos[i][0]}</h3>
                <strong class="product-price">$${productos[i][1]}</strong>
    
                <span class="icon-cross" onclick="ver_mas('${type}','${i}')">
                    <img src="images/cross.svg" class="img-fluid">
                </span>
            </a>
        </div> `;
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
    document.getElementById("gift").style.display = "none";

    let producto = get_products(type)[pos];

    document.getElementById("main").insertAdjacentHTML('afterbegin', ` 
    <section class="py-5" id="producto_abierto">
        <div class="container px-4 px-lg-5 my-5">
            <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="${producto[3]}" alt="..."></div>
                <div class="col-md-6">
                   <!-- <div class="small mb-1">${type}</div> -->
                    <h1 class="display-5 fw-bolder">${producto[0]}</h1>
                    <div class="fs-5 mb-5">
                    <!--  <span class="text-decoration-line-through">$${producto[1]}</span> -->
                        <span>$${producto[1]}</span>
                    </div>
                    <p class="lead">${producto[2]}</p>
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
}

function existe_producto(producto, cantidad){
    let existe = false;
    for (i in carrito) {
        if (carrito[i]["nombre"] == producto) {
            existe = true;
            carrito[i]["cantidad"] += cantidad;
        }
    }
    return existe;
}

function add_cart(type, pos){
    let producto = get_products(type)[pos];
    let cantidad = parseInt(document.getElementById("inputQuantity").value);
    if(!existe_producto(producto[0], cantidad)){
        carrito.push(new creador(producto[0], producto[1], cantidad));
    }
}