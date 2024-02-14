/* import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const rute = useParams();



  useEffect(() => {
    try {
      fetch(`http://localhost:8080/api/products/${rute.id}`, {
        headers: {
          Authorization: localStorage.getItem("auth-token-app"),
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.status == 404) {
            console.log("error");
          }
          console.log(data);
          setProduct(data.product);
        });
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h4>cargando</h4>;
  }
  console.log(product);
  return (
    <div>
      {product ? (
        <>
          <h1>{`ID: ${product.id} - ${product.nombre}`}</h1>
          <span>Precio: {product.precio}</span>
          <span>Stock: {product.stock}</span>
          <p>{product.descripcion}</p>
        </>
      ) : (
        <h1>Producto no encontrado</h1>
      )}
    </div>
  );
};

export default ProductDetail; */

/* console.log(rute.id);
 */
/* useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/products/${rute.id}`,
          {
            headers: {
              Authorization: localStorage.getItem("auth-token-app"),
            },
          }
        );

        if (response.ok) {
          const productData = await response.json();
          setProduct(productData);
        } else if (response.status === 404) {
          setProduct(null);
        } else {
          throw new Error("Error en la solicitud");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [rute.id]); */

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    stock: "",
    descripcion: "",
  });

  const routeParams = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/api/products/${routeParams.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("auth-token-app"),
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 200) {
        console.log("Product updated successfully");
        setEditMode(false);
        updateProduct();
      } else {
        console.log("response.status", response.status);
        console.error("Error updating product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    setEditMode(false);
    setFormData({
      nombre: product.nombre,
      precio: product.precio,
      stock: product.stock,
      descripcion: product.descripcion,
    });
  };

  const updateProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/products/${routeParams.id}`,
        {
          headers: {
            Authorization: localStorage.getItem("auth-token-app"),
          },
        }
      );
      const data = await response.json();
      setProduct(data.product);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    try {
      fetch(`http://localhost:8080/api/products/${routeParams.id}`, {
        headers: {
          Authorization: localStorage.getItem("auth-token-app"),
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.status == 404) {
            console.log("error");
          }
          setProduct(data.product);
        });
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      {product ? (
        <>
          <h1>{`ID: ${product.id} - ${product.nombre}`}</h1>
          <span>Precio: {product.precio}</span>
          <p>Stock: {product.stock}</p>
          <p>Descripcion: {product.descripcion}</p>

          {editMode ? (
            <form onSubmit={handleEditSubmit}>
              <label>
                Nombre:
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </label>
              <label>
                Precio:
                <input
                  type="number"
                  name="precio"
                  value={formData.precio}
                  onChange={handleChange}
                />
              </label>
              <label>
                Stock:
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                />
              </label>
              <label>
                Descripción:
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                />
              </label>
              <button type="submit">Guardar</button>
              <button type="button" onClick={handleCancel}>
                Cancelar
              </button>
            </form>
          ) : (
            <div>
              {/* <p>Descripción: {product.descripcion}</p> */}
              <button
                onClick={() => {
                  setEditMode(true);
                  setFormData({
                    nombre: product.nombre,
                    precio: product.precio,
                    stock: product.stock,
                    descripcion: product.descripcion,
                  });
                }}
              >
                Editar
              </button>
              <button>
                <Link to={"/home"}>Volver</Link>
              </button>
            </div>
          )}
        </>
      ) : (
        <h1>Producto no encontrado</h1>
      )}
    </div>
  );
};

export default ProductDetail;
