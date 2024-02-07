import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/api/products", {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>Lista de productos</h1>
      {products.length == 0 ? (
        <h2>Cargando..</h2>
      ) : (
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
              <h2>{product.name}</h2>
              <p>Precio: ${product.price}</p>
              <span>Stock: {product.stock}</span>
              <button>Ver detalle</button>
            </div>
          ))}
        </div>
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
