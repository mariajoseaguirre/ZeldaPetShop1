const productos = [
    {art: 1, marca:'Acana', nombre: 'Acana 2kg', etapa: 'cachorro', precio: 19990, cantidad:0},
    {art: 2, marca:'Acana', nombre: 'Acana 6kg', etapa:'cualquier edad', precio: 35990, cantidad:0},
    {art: 3, marca:'Acana', nombre: 'Acana 12kg', etapa:'cualquier edad', precio: 59990, cantidad:0},
    {art: 4, marca:'Brit', nombre: 'Brit 3kg', etapa:'cualquier edad', precio: 19990, cantidad:0},
    {art: 5, marca:'Brit', nombre: 'Brit 7kg', etapa:'cachorro', precio: 35990, cantidad:0},
    {art: 6, marca:'Brit', nombre: 'Brit 12kg', etapa:'cachorro', precio: 45990, cantidad:0},
    {art: 7, marca:'Orijen', nombre: 'Orijen 2kg', etapa:'cachorro', precio: 23990, cantidad:0},
    {art: 8, marca:'Orijen', nombre: 'Orijen 4kg', etapa:'cualquier edad', precio: 36990, cantidad:0},
    {art: 9, marca:'Orijen', nombre: 'Orijen 8kg', etapa:'cualquier edad', precio: 48990, cantidad:0},
]

const marcas = buscarMarcas (productos)

function buscarMarcas (productos){
    const marcasABuscar = []
    for (producto of productos) {
        if (!marcasABuscar.includes(producto.marca)) {
            marcasABuscar.push(producto.marca)
        }
    }
    return marcasABuscar
}


function  crearSelect (tipoSelect,contenedor, marcas, idSelect) {
    let select = document.createElement('select')
    select.innerHTML = `
    <option value="">Seleccione ${tipoSelect}</option>
    ${
        marcas.map((marca)=>{
            return(
                `<option value=${marca}>${marca} </option>  `
            )
        })


    }

    `
    select.setAttribute('id', idSelect)
    contenedor.append(select)
}

function elegirMarca (){
    let selectMarca = document.getElementById ('selectMarca')
    selectMarca.addEventListener('change', elegirNombre)

}

function elegirNombre (e){
    const marcaSeleccionada = e.target.value
    const productoConNombre = productos.filter((producto)=> producto.marca === marcaSeleccionada)
    const nombres = productoConNombre.map((producto)=>{
        return(
            producto.nombre
        )
    })
    let selectNombre = document.getElementById('selectNombre')
    if(selectNombre){
        selectNombre.innerHTML = `
        <option value="">Selecciona el nombre</option>
        ${
            nombres.map((nombre)=>{
                return(
                    `<option value=${nombre}>${nombre}</option>`
                )
            })
        }
        `
    }
    else{
        crearSelect ('Modelo', contenedorMarca, nombres, 'selectNombre')
    }
    
}

function valorCompra(){

}

console.log (marcas)
let contenedorMarca = document.getElementById ('seleccion')
crearSelect ('Marca', contenedorMarca, marcas, 'selectMarca')
// crearSelect ('Nombre', contenedorMarca)
elegirMarca ()
elegirNombre()