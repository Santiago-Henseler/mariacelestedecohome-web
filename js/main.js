window.onload = function () {
    cargar_productos("aromas");
}

function get_products(type){

    if(type == "aromas"){
        return AROMAS;
    }else if (type == "bath"){
        return BATH;
    }

}


function cargar_productos(type){

    let product_section = document.getElementById(`${type}`);
    
    let productos = get_products(type);

    for(producto in productos){

        product_section.children[0].children[1].children[0].innerHTML += `
        <div class="col-12 col-md-4 col-lg-3 mb-5">
            <a class="product-item" href="#">
                <img src="${producto[]}" class="img-fluid product-thumbnail">
                <h3 class="product-title">${producto[]}</h3>
                <strong class="product-price">$${producto[]}</strong>
    
                <span class="icon-cross">
                    <img src="images/cross.svg" class="img-fluid">
                </span>
            </a>
        </div> `;



    }
}