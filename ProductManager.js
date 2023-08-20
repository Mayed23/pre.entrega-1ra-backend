class productManager {
    constructor() {

        this.products = []

    }

    getProducts = () => this.products

    static id = 0

    agregoProducts = (cod, nombre, modelo, precio, img, stock = 15)=>{

        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i.cod === cod]) {
                console.log('el Código ${cod} existe')
                break;
            }
        }


        const product = {
            cod,
            nombre,
            modelo,
            precio,
            img,
            stock,
            id: productManager.id

        }

    


        if (this.products.length === 0) {
            product.id = 1
        } else {
            product.id = this.products.length + 1
        }
        this.products.push(product)

    }

    existe(id) {
        return this.products.find((producto) => producto.id === id)
    }

    getProductsById(id) {

        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id))

    }



}

const respuestos = new productManager()

respuestos.agregoProducts('1234', 'nombre1', 'modelo1', 60, 'img1', 10)

respuestos.agregoProducts('1234', 'nombre1', 'modelo1', 60, 'img1', 10)

console.log(respuestos.getProducts())


//respuestos.getProductsById(5)