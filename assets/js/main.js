let valorVehiculo = 0
let seguroContraTodo=0
let totalSeguro=0
let seguros=0
let categoria=0
let total=0


const SERVICIO=12000

//Que la funcion sea si es un auto o moto...si es moto no hay seguro

ingreso=prompt("Desea solicitar asesoria para su seguro?SI o NO?")




function mostrarAutos(autos){
    autos.forEach(auto => {
        console.log(auto)
        
        
    });
}


function filtrarMarca(auto){
    if (datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto;
}

function filtrarModelo(auto){
    if (datosBusqueda.Modelo){
        return auto.modelo === datosBusqueda.modelo
    }
    return auto;
}

function filtrarAño(auto){
    if (datosBusqueda.año){
        return auto.año === datosBusqueda.año
    }
    return auto;
}

function filtrarPrecio(auto){
    if(datosBusqueda.precio){
        return auto.precio === datosBusqueda.precio
    }
    return auto;
}

function filtrarAuto(){
    let resultado = autos.filter(filtrarMarca).filter(filtrarModelo).filter(filtrarAño).filter(filtrarPrecio);
    
    if (resultado.length){
        mostrarAutos(resultado)
        
    }

}


/* function categoria(valorVehiculo){
    valorVehiculo*0.01
}
 */

while (ingreso == "SI"){
    seguros+=1;

    mostrarAutos(autos)


    
    let marca = prompt("Seleccione la marca de su vehiculo")
    
    let modelo = prompt ("Seleccione el modelo")
    
    let año = Number (prompt ("Seleccione el año de su vehiculo")) 
    
    
    const datosBusqueda = {
        marca: marca ,
        modelo: modelo,
        año: año ,
        precio: ''    
    }
    

    filtrarAuto()
    // valorVehiculo=Number(prompt("Ingrese el valor aproximado de su vehiculo"));

    if (auto.precio < 500000){
        categoria=auto.precio*0.01
        let seguroTotal = prompt("Quisiera que su seguro sea contra todo riesgo? SI o NO?")
        if (seguroTotal=="SI") {
            seguroContraTodo=auto.precio*0.015
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
        }else if (seguroTotal=="NO"){
            seguroContraTodo=0
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
        }

    }else if(datosBusqueda.precio >500000){
        categoria=datosBusqueda.precio*0.02
        let seguroTotal = prompt("Quisiera que su seguro sea contra todo riesgo? SI o NO?")
        
        if (seguroTotal=="SI") {
            seguroContraTodo=valorVehiculo*0.018
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
            
        }else if (seguroTotal=="NO"){
            seguroContraTodo=0
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
        }

    }else if(datosBusqueda.precio>1000000){
        let seguroTotal = prompt("Quisiera que su seguro sea contra todo riesgo? SI o NO?")
        categoria=valorVehiculo*0.3

        if (seguroTotal=="SI") {
            seguroContraTodo=valorVehiculo*0.025
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
        }else if (seguroTotal=="NO"){
            seguroContraTodo=0
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro

        }
    }
    
    function totalConImp(total){
        return total*1.21
    }
    const SEGURO=totalConImp(total)
    console.log(SEGURO)

    document.write("El valor de su seguro numero " + seguros + " es de " + SEGURO + "<br>")
    ingreso=prompt("Quiere volver a cotizar su seguro o cotizar algun auto mas? SI o NO?")

    if(ingreso == "SI"){
        console.log("Volveremos a calcular su seguro")
        console.log("-------")
        totalSeguro = 0 ;
    }
}


if(ingreso =="NO"){
    document.write("Esperamos vuelva pronto")
}

