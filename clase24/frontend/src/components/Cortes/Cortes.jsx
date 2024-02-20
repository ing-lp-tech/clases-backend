import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  ///crear producto
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    stock: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const updateProducts = async (e) => {
    fetch("http://localhost:8080/api/cortes", {
      headers: {
        Authorization: localStorage.getItem("auth-token-app"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status == 401) {
          navigate("/");
        }
        console.log(data);
        setProducts(data.products);
      });
  };

  useEffect(() => {
    updateProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>Lista de Cortes</h1>
      {products.length == 0 ? (
        <h2>Cargando..</h2>
      ) : (
        <>
          <div>
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                <h2>{product.nombre}</h2>
                <p>fecha: ${product.fecha}</p>
                <span>cant. prendas: {product.prendas}</span>
                <span>cant. metros: {product.cant_metros}</span>
                <span>talles: {product.talles}</span>
                <span>colores: {product.colores}</span>
              </div>
            ))}
          </div>
          <div>
            {/* <form onSubmit={handleCreateProduct}>
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />

              <label>Precio:</label>
              <input
                type="number"
                name="precio"
                value={formData.precio}
                onChange={handleChange}
              />

              <label>Stock:</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
              />

              <label>Descripción:</label>
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
              />

              <button type="submit">Crear Producto</button>
            </form> */}

            <Link to={"/"}>
              <button>Logueo</button>
            </Link>
          </div>
        </>
      )}
      {/* 
        Renderizar a partir del estado products los productos en divs 

        <h2>Nombre</h2>
        <p>Precio: $</p>
        <span>Stock: stock</span>
        <button>Ver detalle</button>
        */}
    </div>
  );
};

export default Home;
