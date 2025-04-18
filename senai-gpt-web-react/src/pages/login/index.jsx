import "./login.css";
import logo from "../../assets/imgs/chat.png";
import { useState } from "react";
//login front@email.com
//senha frontdomina
function Login() {
  const [email, setEmail] = useState(""); //capturar dados para usar no cod

  const [senha, setSenha] = useState("");

  const onLoginClick = async () => {
    let response = await fetch(
      "https://senai-gpt-api.azurewebsites.net/login",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: senha,
        }),
      }
    );

    if (response.ok == true) {
      alert("Login realizado com sucesso");
      console.log(response);
      let json = await response.json();
      let token = json.accessToken;
      console.log("token: " + token);
      localStorage.setItem("meutoken", token)
      window.location.href = "/chat";
    } else {
      if (response.status == 401) {
        alert("Credenciaias incorretas. Tente novamente");
      } else {
        alert(
          "Erro inesperado aconteceu, caso persista contate os administradores."
        );
      }
    }
  };
  return (
    <>
      <header></header>

      <main className="page-container">
        <div className="robo-image"></div>
        <div className="logincontainer">
          <img className="logo" src={logo} alt="Senai GPT logo" />

          <h1>Login</h1>

          <input
            className="inpt"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Insira o e-mail"
          />
          <input
            className="inpt"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            type="password"
            placeholder="Insira sua senha"
          />

          <button className="btn" onClick={() => onLoginClick()}>
            Entrar
          </button>
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default Login;
