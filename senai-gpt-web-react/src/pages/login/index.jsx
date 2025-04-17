import "./login.css";
import logo from "../../assets/imgs/chat.png";
import { useState } from "react";

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
        body: JSON.stringify( {
            email: email,
            password: senha
        })
      }
    );
    console.log(response);
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
