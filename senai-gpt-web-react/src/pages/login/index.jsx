import "./login.css";

function Login() {
  
    return (
      <>
          <header></header>

<main className="page-container">
    <div className="robo-image">
    </div>
    <div className="logincontainer">

        <img className="logo" src="../Assets/Imgs/Chat.png" alt="Senai GPT logo"/>

        <h1>
            Login
        </h1>

        <input className="inpt" type="email" placeholder="Insira o e-mail"/>
        <input className="inpt" type="password" placeholder="Insira sua senha"/>

        <button className="btn">Entrar</button>
    </div>

</main>

<footer></footer>

      </>
    )
  }
  
  export default Login;
  