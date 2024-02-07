import { useState } from "react";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import { Link /* useNavigate */ } from "react-router-dom";

const Login = () => {
  /* const initialValues =  */
  /* const navigate = useNavigate(); */
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [credentialInvalid, setCredentialInvalid] = useState(false);
  const handleChangeInput = (value, name) => {
    setFormValues(() => {
      return { ...formValues, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("hola");

    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formValues.username,
        password: formValues.password,
      }),
    }).then((res) => res.json());
    console.log("hola", response.status);
    if (response.status == 200) {
      console.log("response:", response.accessToken);
    } else if (response.status == 401) {
      setCredentialInvalid(true);
    }
  };

  console.log("credentialInvalid:", credentialInvalid);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Nombre de usuario"
            autoFocus
            value={formValues.username}
            onChange={(e) => handleChangeInput(e.target.value, "username")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            type="password"
            value={formValues.password}
            onChange={(e) => handleChangeInput(e.target.value, "password")}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Iniciar sesión
          </Button>
        </Box>
        {credentialInvalid && (
          <span>Credenciales invalidas, vuelve a intentar.</span>
        )}
        <span>
          Aun no tienes cuenta? <Link to={"/register"}>Click aqui</Link>
        </span>
      </Box>
    </Container>
  );
};

export default Login;

/* Crear una conexion con nuestro backend sobre el endpoint /login para enviar los datos del logueo:

-200: en este caso tenemos un access token y simplemente lo mostraremos por consola

-401: en este caso las credenciales son invalidas y deberas mostar un error en un span que diga 'Credenciales invalidas, vuelve a intentar'

*/
