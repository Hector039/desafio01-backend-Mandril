class ProductManager {
    products;
    static ultimoId = 0;

    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {//validar que no se repita el campo "code" y que todos los campos sean obligatorios. id autoincrementable

        const findCode = this.products.some(codeProd => codeProd.code === code);
        if (findCode) {
            console.log("Codigo Ingresado existente, por favor ingrese uno diferente");
        } else if (title === undefined || description === undefined || price === undefined || thumbnail === undefined || code === undefined || stock === undefined) {
            console.log("Faltan ingresar campos.");
        } else {

            ProductManager.ultimoId++;

            const product = {
                id: ProductManager.ultimoId,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            };
            
            this.products.push(product);
        }

    }

    getProducts() {//devolver el arreglo con todos los productos
        return this.products;
    }

    getProductById(id) {//buscar en arreglo prducto por Id. si no existe "Not found"
        const productFind = this.products.find(prod => prod.id === id);
        if (productFind) {
            console.log(productFind);
        } else {
            console.log("Not Found");
        }
    }
}

const productManager = new ProductManager();

productManager.addProduct(
    "Silla de Oficina",
    "Silla de oficina ergonómica",
    65000,
    "https://dummyimage.com/600x400/000/fff",
    "sillaCod00",
    5
);

console.log(productManager.getProducts());

productManager.addProduct(
    "Escritorio de Oficina",
    "Escritorio de oficina de madera",
    102000,
    "https://dummyimage.com/600x400/000/fff",
    "escritorioCod00",
    2
);

productManager.addProduct(
    "Armario de Oficina",
    "Armario de oficina con estantería",
    185000,
    "https://dummyimage.com/600x400/000/fff",
    "sillaCod00", //este código está repetido por que lo devolerá error
    1
);

console.log(productManager.getProducts());

productManager.addProduct(
    "Armario de Oficina",
    "Armario de oficina con estantería",
    /* 185000, */ //este campo falta, por lo que devolverá error
    "https://dummyimage.com/600x400/000/fff",
    "armarioCod00",
    1
);

console.log(productManager.getProducts());

productManager.getProductById(4);//Id no existente por lo que devolverá Not Found
