import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const rute = useParams();

  console.log(rute.id);

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

export default ProductDetail;
