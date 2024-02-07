import { useNavigate } from "react-router-dom";

export const verifyToken = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  fetch("http://localhost:8080/auth/verify", {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("auth-token-app"),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.status == 200) {
        navigate("/home");
      }
    });
};
