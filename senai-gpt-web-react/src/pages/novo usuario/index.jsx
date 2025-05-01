import "./nuser.css";
import logo from "../../assets/imgs/chat.png";
import { useState } from "react";
//login front@email.com
//senha frontdomina
function Nuser() {
  const [email, setEmail] = useState(""); //capturar dados para usar no cod
  const [name, setName] = useState("");
  const [senha, setSenha] = useState(""); 
  const [csenha, setcSenha] = useState("");

  const onLoginClick = async () => {
    let response = await fetch("https://senai-gpt-api.up.railway.app/users", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: senha,
        username: name,
        confirmpassword: csenha,
      }),
    });

    if (response.ok == true) {
      alert("Usuario cadastrado com sucesso");
      console.log(response);
      let json = await response.json();
      let token = json.accessToken;
      console.log("token: " + token);
      localStorage.setItem("meutoken", token);
      window.location.href = "/login";
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
        <div className="nuser-image"></div>
        <div className="logincontainer">
          <img className="logo" src={logo} alt="Senai GPT logo" />

          <h1>Novo Usuario</h1>

          <input
            className="inpt"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="User name"
            placeholder="Digite seu nome"
          />

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

          <input
            className="inpt"
            value={csenha}
            onChange={(event) => setcSenha(event.target.value)}
            type="password"
            placeholder="Confirme a sua senha"
          />

          <button className="btn" onClick={() => onLoginClick()}>
            Entrar
          </button>

<a className="gotologin" href="/login">Já sou cadastrado</a>
        
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default Nuser;
