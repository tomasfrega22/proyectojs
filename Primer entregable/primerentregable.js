const articulosPk =  [];
const impuestosArticulosPk = 1.21;

class Product {
    constructor(nombre, cantidad,precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio=precio;
    }
    
}
function operacion (valor1){
    return valor1*impuestosArticulosPk;
}
articulosPk.push (new Product('PAIN', 500,2450));
articulosPk.push (new Product('KAKASHI', 400,2500));
articulosPk.push (new Product('LUFFY', 200,3200));

let bienvenidos = prompt ("Bienvenidos, tenemos 3 productos, seleccione el de su gusto.\n 1)"+ articulosPk[0].nombre+"\n 2)"+articulosPk[1].nombre+"\n 3)"+articulosPk[2].nombre);
while (bienvenidos >=1 && bienvenidos <=3) {
    alert ('Elegiste el \n'+ articulosPk[bienvenidos-1].nombre + "\n Precio sin IVA $"+ articulosPk[bienvenidos-1].precio+"\n Precio mas IVA $"+operacion(articulosPk[bienvenidos-1].precio))
    bienvenidos = prompt("Bienvenidos, tenemos 3 productos, seleccione el de su gusto.\n 1)"+ articulosPk[0].nombre+"\n 2)"+articulosPk[1].nombre+"\n 3)"+articulosPk[2].nombre+" \n 4)Seleccione cero para salir");
    if(bienvenidos==0){
        break;
    }

}
alert ('Gracias por tu compra!');


