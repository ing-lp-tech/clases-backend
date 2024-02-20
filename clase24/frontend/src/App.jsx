import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Login, Register, ProductDetail, Cortes } from "./components";

function App() {
  return (
    <>
      {/* <h1>Bienvenidos devuelta a FRONTEND 😎😍😘</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cortes/" element={<Cortes />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/* -Agregar un Componente en la carpeta screen/components que se llame Product Detail, el cual no recibira props, va a tener un h1 que diga 'El detalle del producto: #'

-Agregar la ruta /detail/:pid que tenga el parametro de busqueda :pid (EN EL FRONTEND)

-En el componente Product Detail van agregar que se capture el valor del parametro de busqueda pid y se concatene al h1

EJEMPLO:

/detail/7

<div>
    <h1>Detalle del producto: # 7</h1>
</div>

-Cambiar el Button ver detalle del Home.jsx por un Link que redireccione al '/detail/' + product.id */

/* 2da parte)

BACKEND:

-Vamos a agregar el authMiddlewere a la ruta /api/products/:pid

FRONTEND:

-Vamos a hacer un fetch en ProductDetail que va a ser hacia la ruta GET /api/products/:pid pasando por headers la authentificacion.
Este fetch debera traerte el producto o en su defecto un error 404 not found. En caso de error mostrar en el h1 producto no encontrado

En caso de estar el producto vamos a mostrar el h1 con el id y aldado del id el nombre 

Abajo en un span el precio

Abajo en otro span el stock

Abajo en un parrafo la descripcion

-Agregar un Loader que diga cargando cuando se envia el fetch y una vez resuelto que muestre lo anterior mencionado.
 */
