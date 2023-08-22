class ProductManager {
    constructor() {
        this.products = []
    }
    static id = 0

    agregoProducts = (nombre, modelo, precio, img, codigo, stock)=>{

        for (let i = 0; i < this.products.length; i++){
           if (this.products[i].codigo === codigo) {
                 console.log(`el código ${codigo} ya existe`)  
                 break;
            }
        }
        const product = {
            nombre,
            modelo,
            precio,
            img,
            codigo,
            stock,
        }; 

         if (!Object.values(product).includes(undefined)){
             ProductManager.id++;
             this.products.push ({ ...product, id:ProductManager.id,});

         }else{
             console.log ("Completar todos los datos")
         }
      
    }

    getProducts() {
        return this.products
    }

    existe(id) {
        return this.products.find((product) => product.id === id)
    }

    getProductsById(id) {

        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));

    }

}



const respuestos = new ProductManager()
console.log(respuestos.getProducts());


respuestos.agregoProducts('nombre1', 'modelo1', 60, 'img1', '1234', 10)


//Se crea el id (autoincrementable)
respuestos.agregoProducts('nombre2', 'modelo2', 35, 'img2', '1235', 15)
respuestos.agregoProducts('nombre3', 'modelo3', 40, 'img3', '1236', 3)

console.log(respuestos.getProducts());


//muestra que el códgo existe
respuestos.agregoProducts('nombre2', 'modelo2', 35, 'img2', '1235', 15)

//no permite el ingreso incompleto
respuestos.agregoProducts('nombre4', 35, 'img4', '1237', 15)


//ejemplos de busqueda con el id, lo muestra fuera del array
respuestos.getProductsById(2);

respuestos.getProductsById(7);