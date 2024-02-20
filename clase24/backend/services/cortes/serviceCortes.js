const dbQueryAsync = require('../../config/dbConfig')
const mailerService = require('../mailerService/mailerService')
const { productCreatedTemplate } = require('../mailerService/templates/productMailTemplates')




const getAllCortes = async (limit) => {
    try{
        const query = 'SELECT * FROM cortes'
        const result = await dbQueryAsync(query)

        if(limit){
            return result.splice(limit )
        }
        else{
            return result
        }
        
    }
    catch(error){
        console.error(error)
    }
  
}


/* getAllProducts(2) */

/* 
TAREA:

NOOOO SE OLVIDEN DE EL WHERE

Hacer la funcion obtener producto por ID

HACER LA FUNCION ELIMINAR POR ID 
*/

module.exports = { getAllCortes}

/* createProduct({nombre: 'teclado logitech', precio: 50, stock: 30, descripcion: 'teclado funcional mecanico'}) */