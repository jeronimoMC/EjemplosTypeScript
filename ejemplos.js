class Propietario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Apartamento {
    constructor(numero, habitaciones, metros) {
        this.numero = numero;
        this.habitaciones = habitaciones;
        this.metros = metros;
        this.propietarios = [];
    }

    agregarPropietario(propietario) {
        this.propietarios.push(propietario);
    }
}

class Edificio {
    constructor(direccion) {
        this.direccion = direccion;
        this.apartamentos = [];
    }

    agregarApartamento(apartamento) {
        this.apartamentos.push(apartamento);
    }

    eliminarApartamento(numero) {
        this.apartamentos = this.apartamentos.filter(apto => apto.numero !== numero);
    }

    buscarApartamento(numero) {
        return this.apartamentos.find(apto => apto.numero === numero);
    }

    agregarPropietario(numero, propietario) {
        const apartamento = this.buscarApartamento(numero);
        if (apartamento) {
            apartamento.agregarPropietario(propietario);
        } else {
            console.log(`El apartamento con número ${numero} no existe.`);
        }
    }

    cobrarRenta() {
      
        console.log("Se ha cobrado la renta a todos los inquilinos del edificio.");
    }
}


const edificio = new Edificio("123 Calle Principal");


const apartamento1 = new Apartamento(101, 2, 80);
const apartamento2 = new Apartamento(102, 3, 100);
const apartamento3 = new Apartamento(103, 1, 50);

edificio.agregarApartamento(apartamento1);
edificio.agregarApartamento(apartamento2);
edificio.agregarApartamento(apartamento3);


const propietario1 = new Propietario("Mateo Hernandez", "Mateo@example.com");
const propietario2 = new Propietario("Arle Morales", "Arle@example.com");

edificio.agregarPropietario(101, propietario1);
edificio.agregarPropietario(102, propietario2);


edificio.eliminarApartamento(103);


console.log(edificio.buscarApartamento(101));


edificio.cobrarRenta();
