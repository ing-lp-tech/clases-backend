import { useState } from "react";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { verifyToken } from "../../Helpers/verifyToken";
/* import axios from "axios"; */

const Register = () => {
  /* const initialValues =  */
  const navigate = useNavigate();
  verifyToken(navigate);
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const [repeatUsername, setRepeatUsername] = useState(false);
  const handleChangeInput = (value, name) => {
    setFormValues(() => {
      return { ...formValues, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    /*  const response = await axios.post('http://localhost:8080/register', {username: formValues.username, password: formValues.password}) */
    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formValues.username,
        password: formValues.password,
      }),
    }).then((res) => {
      
      return res.json();
    });
    console.log("hola", response.status);
    if (response.status == 200) {
      navigate("/");
    } else if (response.status == 400) {
      setRepeatUsername(true);
    }
  };

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
          Registrarse
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
            Registrarse
          </Button>
        </Box>
        {repeatUsername && (
          <span>El nombre de usuario ya se encuentra en uso.</span>
        )}
        <span>
          Ya tienes cuenta? <Link to={"/"}>Click aqui</Link>
        </span>
      </Box>
    </Container>
  );
};

export default Register;
