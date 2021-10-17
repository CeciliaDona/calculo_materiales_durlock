
/* Mi simulador consta en un calculador de Durlock: en base a los metros cuadrados que ingrese el usuario, el programa calculará la cantidad de materiales necesarios para cubrir esa superficie */



// index.html: Función para seleccionar el tipo de solución de durlock


function validar() {
    let radios = document.getElementsByName("elegir");
    let sinSeleccion = document.getElementById("sin-seleccion");
    let botonValidar = document.getElementById("button")

    for (let a = 0; a < radios.length; a++) {
        valorRadio = radios[a].value;

        if (radios[a].checked) {
            if (valorRadio == "Cieloraso") {
                location.href = "cieloraso.html";
            } else if (valorRadio == "Divisiones") {
                location.href = "divisiones.html";
            }
        }
    } 
}
           


//  divisiones.html: función para elegir tipo de pared

function elegirDivision() {
    let radiosPared = document.getElementsByName("selec");

    for (let a = 0; a < radiosPared.length; a++) {
        valorRadioPared = radiosPared[a].value;

        if (radiosPared[a].checked) {
            if (valorRadioPared == "Pared-simple") {
                location.href = "pared-simple.html"
            } else if (valorRadioPared == "Pared-doble") {
                location.href = "pared-doble.html";
            } 
        }
    }
}



// CREACIÓN DE OBJETOS: 

// MATERIALES  1) Placas de Durlock

class Durlock {
    constructor(
        pId,
        pNombre,
        pModelo,
        pEspesor,
        pMedida) {
        this.id = pId;
        this.nombre = pNombre;
        this.modelo = pModelo;
        this.espesor = pEspesor;
        this.medida = "1,20 x 2,40 metros"
    }

}


const cieloraso = new Durlock(1, "Placa de Durlock", "Estándar", "9,5 mm");
const pared = new Durlock(2, "Placa de Durlock", "Estándar", "12,5 mm");




// MATERIALES: 2) Soleras

class Solera {
    constructor(pId, pNombre, pMedida, pLargo) {
        this.id = pId;
        this.nombre = pNombre;
        this.medida = pMedida;
        this.largo = 2.60;
    }

}

const soleraChica = new Solera(4, "Solera", "35 x 35mm");
const soleraGrande = new Solera(5, "Solera", "70 x 35mm");



// MATERIALES: 3) Montantes

class Montante {
    constructor(pId, pNombre, pMedida, pLargo) {
        this.id = pId;
        this.nombre = pNombre;
        this.medida = pMedida;
        this.largo = 2.60;
    }
}

const montanteChico = new Montante(6, "Montante", "34 x 35mm");
const montanteGrande = new Montante(7, "Montante", "69 x 35mm");



// MATERIALES: 4) Masilla

class Masilla {
    constructor(pId, pNombre, pPeso) {
        this.id = pId;
        this.nombre = pNombre;
        this.peso = pPeso;
    }
}

const masillaX18kg = new Masilla(8, "Masilla de Durlock", 18);



// MATERIALES: 5) Cinta

class Cinta {
    constructor(pId, pNombre, pLargo) {
        this.id = pId;
        this.nombre = pNombre;
        this.largo = 150;
    }
}

const cintaX150 = new Cinta(9, "Cinta de papel absorbente x 150 m");



// MATERIALES: 6) tornillos 

class Tornillos {
    constructor(pId, pNombre) {
        this.id = pId;
        this.nombre = pNombre;
    }
}

const t1 = new Tornillos(10, "Tornillos T1 punta aguja");
const t2 = new Tornillos(11, "Tornillos T2 punta aguja");
const t3 = new Tornillos(12, "Tornillos T3 punta aguja");


class Fijaciones {
    constructor(pId, pNombre, pMedida) {
        this.id = pId;
        this.nombre = pNombre;
    }
}

const fijacionesDel8 = new Fijaciones(13, "Fijaciones del 8");


//MATERIALES: 8) Aislante térmico

class Aislante {
    constructor(pId, pNombre, pEspesor, PmetrosCuadrados) {
        this.id = pId;
        this.nombre = pNombre;
        this.espesor = pEspesor;
        this.metrosCuadrados = 20
    }
}

const aislanteTermico = new Aislante(14, "Rollo Aislante térmico con aluminio", "10 mm")


//array
let tiposDeSolucion = ["Cieloraso", "Divición de pared smple", "División pared doble"];




// jQuery

$(document).ready(function () {

    // Calculo de materiales para cieloraso (cieloraso.html)

    let boton = $("#boton");
    let materiales = $("#materiales");

    boton.click(function () {
        materiales.show(1500);
    });


    boton.click(function () {
        let metrosAcubrir = $("#m2Cieloraso").val();

        function calcularPlacasCr() {
            return Math.ceil(metrosAcubrir / 2.88);
        }

        $("#placas").html(`${cieloraso.nombre} ${cieloraso.modelo} de ${cieloraso.espesor} de ${cieloraso.medida}`);
        $("#cantidadPlacas").html(`${calcularPlacasCr()}`);


        function calcularSolerasCr() {
            return Math.ceil(metrosAcubrir * 1.3 / soleraChica.largo)
        }

        $("#soleras").html(`${soleraChica.nombre} de ${soleraChica.medida} x ${soleraChica.largo} metros`);
        $("#cantidadSoleras").html(`${calcularSolerasCr()}`);


        function calcularMontantesCr() {
            return Math.ceil(metrosAcubrir * 3 / montanteChico.largo)
        }

        $("#montantes").html(`${montanteChico.nombre} de ${montanteChico.medida} x ${montanteChico.largo} metros`);
        $("#cantidadMontantes").html(`${calcularMontantesCr()}`);


        function calcularMasillaCr() {
            return Math.ceil(metrosAcubrir * 0.9 / masillaX18kg.peso)
        }

        $("#masilla").html(`${masillaX18kg.nombre} de ${masillaX18kg.peso} kg`);
        $("#cantidadMasilla").html(`${calcularMasillaCr()}`);


        function calcularCintaCr() {
            return Math.ceil(metrosAcubrir * 1.65 / cintaX150.largo)
        }

        $("#cinta").html(`${cintaX150.nombre}`);
        $("#cantidadCinta").html(`${calcularCintaCr()}`);


        function caclularTornillosT1cr() {
            return Math.ceil(metrosAcubrir * 10)
        }

        $("#tornillosT1").html(`${t1.nombre}`);
        $("#cantidadTornillosT1").html(`${caclularTornillosT1cr()}`);


        function caclularTornillosT2cr() {
            return Math.ceil(metrosAcubrir * 16)
        }

        $("#tornillosT2").html(`${t2.nombre}`);
        $("#cantidadTornillosT2").html(`${caclularTornillosT2cr()}`);


        function caclularFijacionesCr() {
            return Math.ceil(metrosAcubrir * 3.5)
        }

        $("#fijaciones-cr").html(`${fijacionesDel8.nombre}`);
        $("#cantidadFijaciones-cr").html(`${caclularFijacionesCr()}`);

    });

    // Calculo de materiales para pared simple (pared-simple.html)

    let botonPs = $("#boton-ps");
    let materialesPs = $("#materiales-ps");

    botonPs.click(function () {
        materialesPs.show(1500);
    });


    botonPs.click(function () {
        let metrosAcubrirPs = $("#m2-pared-simple").val();
        console.log("metros cuadrados: " + metrosAcubrirPs);


        function calcularPlacasPs() {
            return Math.ceil(metrosAcubrirPs * 2.05 / 2.88);
        }

        $("#placa-simple").html(`${pared.nombre} ${pared.modelo} de ${pared.espesor} de ${pared.medida}`);
        $("#cantidadPlacas-simples").html(`${calcularPlacasPs()}`);


        function calcularSolerasPs() {
            return Math.ceil(metrosAcubrirPs / soleraGrande.largo)
        }

        $("#soleras-simples").html(`${soleraGrande.nombre} de ${soleraGrande.medida} x ${soleraGrande.largo} metros`);
        $("#cantidadSoleras-simples").html(`${calcularSolerasPs()}`);


        function calcularMontantesPs() {
            return Math.ceil(metrosAcubrirPs * 3 / montanteGrande.largo)
        }

        $("#montantes-simples").html(`${montanteGrande.nombre} de ${montanteGrande.medida} x ${montanteGrande.largo} metros`);
        $("#cantidadMontantes-simples").html(`${calcularMontantesPs()}`);


        function calcularMasillaPs() {
            return Math.ceil(metrosAcubrirPs * 1.8 / masillaX18kg.peso)
        }

        $("#masilla-simple").html(`${masillaX18kg.nombre} de ${masillaX18kg.peso} kg`);
        $("#cantidadMasilla-simple").html(`${calcularMasillaPs()}`);


        function calcularCintaPs() {
            return Math.ceil(metrosAcubrirPs * 3.3 / cintaX150.largo)
        }

        $("#cinta-simple").html(`${cintaX150.nombre}`);
        $("#cantidadCinta-simple").html(`${calcularCintaPs()}`);


        function caclularTornillosT1Ps() {
            return Math.ceil(metrosAcubrirPs * 10)
        }

        $("#tornillosT1-simples").html(`${t1.nombre}`);
        $("#cantidadTornillosT1-simples").html(`${caclularTornillosT1Ps()}`);


        function caclularTornillosT2Ps() {
            return Math.ceil(metrosAcubrirPs * 15)
        }

        $("#tornillosT2-simples").html(`${t2.nombre}`);
        $("#cantidadTornillosT2-simples").html(`${caclularTornillosT2Ps()}`);


        function caclularFijacionesPs() {
            return Math.ceil(metrosAcubrirPs * 3.5)
        }

        $("#fijaciones-ps").html(`${fijacionesDel8.nombre}`);
        $("#cantidadFijaciones-ps").html(`${caclularFijacionesPs()}`);


        function calcularAislantePs() {
            return Math.ceil(metrosAcubrirPs * 1.05 / aislanteTermico.metrosCuadrados)
        }

        $("#aislante-simple").html(`${aislanteTermico.nombre} de ${aislanteTermico.espesor} x ${aislanteTermico.metrosCuadrados} m2`);
        $("#cantidadAislante-simple").html(`${calcularAislantePs()}`)


    });

    
    // cálculo de materiales para pared doble (pared-doble.html)

    let botonPd = $("#boton-pd");
    let materialesPd = $("#materiales-pd");

    botonPd.click(function () {
        materialesPd.show(1500);
    });


    botonPd.click(function () {
        let metrosAcubrirPd = $("#m2-pared-doble").val();
        console.log("metros cuadrados: " + metrosAcubrirPd);


        function calcularPlacasPd() {
            return Math.ceil(metrosAcubrirPd * 4.10 / 2.88);
        }

        $("#placas-dobles").html(`${pared.nombre} ${pared.modelo} de ${pared.espesor} de ${pared.medida}`);
        $("#cantidadPlacas-dobles").html(`${calcularPlacasPd()}`);


        function calcularSolerasPd() {
            return Math.ceil(metrosAcubrirPd / soleraGrande.largo)
        }

        $("#soleras-dobles").html(`${soleraGrande.nombre} de ${soleraGrande.medida} x ${soleraGrande.largo} metros`);
        $("#cantidadSoleras-dobles").html(`${calcularSolerasPd()}`);


        function calcularMontantesPd() {
            return Math.ceil(metrosAcubrirPd * 3 / montanteGrande.largo)
        }

        $("#montantes-dobles").html(`${montanteGrande.nombre} de ${montanteGrande.medida} x ${montanteGrande.largo} metros`);
        $("#cantidadMontantes-dobles").html(`${calcularMontantesPd()}`);


        function calcularMasillaPd() {
            return Math.ceil(metrosAcubrirPd * 3.2 / masillaX18kg.peso)
        }

        $("#masilla-doble").html(`${masillaX18kg.nombre} de ${masillaX18kg.peso} kg`);
        $("#cantidadMasilla-doble").html(`${calcularMasillaPd()}`);


        function calcularCintaPd() {
            return Math.ceil(metrosAcubrirPd * 6.6 / cintaX150.largo)
        }

        $("#cinta-doble").html(`${cintaX150.nombre}`);
        $("#cantidadCinta-doble").html(`${calcularCintaPd()}`);


        function caclularTornillosT1Pd() {
            return Math.ceil(metrosAcubrirPd * 10)
        }

        $("#tornillosT1-dobles").html(`${t1.nombre}`);
        $("#cantidadTornillosT1-dobles").html(`${caclularTornillosT1Pd()}`);


        function caclularTornillosT2Pd() {
            return Math.ceil(metrosAcubrirPd * 15)
        }

        $("#tornillosT2-dobles").html(`${t2.nombre}`);
        $("#cantidadTornillosT2-dobles").html(`${caclularTornillosT2Pd()}`);


        function caclularTornillosT3() {
            return Math.ceil(metrosAcubrirPd * 30)
        }

        $("#tornillosT3").html(`${t3.nombre}`);
        $("#cantidadTornillosT3").html(`${caclularTornillosT3()}`);


        function caclularFijacionesPd() {
            return Math.ceil(metrosAcubrirPd * 3.5)
        }

        $("#fijaciones-pd").html(`${fijacionesDel8.nombre}`);
        $("#cantidadFijaciones-pd").html(`${caclularFijacionesPd()}`);


        function calcularAislantePd() {
            return Math.ceil(metrosAcubrirPd * 1.05 / aislanteTermico.metrosCuadrados)
        }

        $("#aislante-doble").html(`${aislanteTermico.nombre} de ${aislanteTermico.espesor} x ${aislanteTermico.metrosCuadrados} m2`);
        $("#cantidadAislante-doble").html(`${calcularAislantePd()}`)


    });


});















