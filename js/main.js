window.onload = function () {
    cargar_productos("aromas");
    cargar_productos("bath");
    cargar_productos("textiles");
    cargar_productos("gift");
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
    return;
    document.getElementById("inicio").style.display = "none";
    document.getElementById("Nosotros").style.display = "none";
    document.getElementById("aromas").style.display = "none";
    document.getElementById("bath").style.display = "none";
    document.getElementById("textiles").style.display = "none";
    document.getElementById("gift").style.display = "none";

    let producto = get_products(type);

    document.getElementById("main").insertAdjacentHTML('afterbegin', ``); // insertar diseño de producto

}

function inicio(){
    document.getElementById("inicio").style.display = "block";
    document.getElementById("Nosotros").style.display = "block";
    document.getElementById("aromas").style.display = "block";
    document.getElementById("bath").style.display = "block";
    document.getElementById("textiles").style.display = "block";
    document.getElementById("gift").style.display = "block";

}