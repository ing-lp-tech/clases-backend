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

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/products/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: localStorage.getItem("auth-token-app"),
          },
        }
      );

      if (response.status === 200) {
        // Producto eliminado exitosamente
        console.log("Product deleted successfully");
        // Actualizar la lista de productos después de eliminar
        // Puedes volver a hacer la solicitud GET o eliminar el producto de la lista localmente
      } else {
        // Error al eliminar el producto
        console.error("Error deleting product");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    updateProducts()
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("auth-token-app"),
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        // Producto creado exitosamente
        console.log("Product created successfully");
        // Agregar lógica adicional según sea necesario
      } else {
        // Error al crear el producto
        console.error("Error creating product");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    updateProducts()
  };

  /* const handleSubmit = async (e) => {
   
    e.preventDefault();
    const response = await fetch('http://localhost:8081/api/products/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formValues.username,
        password: formValues.password,
      }),
    }).then((res) => res.json());
    if (response.status == 200) {
      localStorage.setItem("auth-token-app", response.accessToken);
      navigate("/home");
    }
    if (response.status == 401) {
      setInvalidCredentials(true);
    }
  };
 */

  const updateProducts=async (e) => {
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
  }

  useEffect(() => {
    /* fetch("http://localhost:8080/api/products", {
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
      }); */
      updateProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>Lista de productos</h1>
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
                <p>Precio: ${product.precio}</p>
                <span>Stock: {product.stock}</span>

                <Link to={"/detail/" + product.id}>
                  <button>Ver detalle</button>
                </Link>
                <div>
                  <button onClick={() => handleDelete(product.id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <form onSubmit={handleCreateProduct}>
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
            </form>
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
