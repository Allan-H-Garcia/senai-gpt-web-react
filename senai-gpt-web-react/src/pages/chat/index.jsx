import "./chat.css";
import logochat from "../../assets/imgs/chat.png";
import chattext from "../../assets/imgs/ChatText.png";
import trash from "../../assets/imgs/Trash.png";
import sun from "../../assets/imgs/Sun.png";
import user from "../../assets/imgs/User.png";
import arrow from "../../assets/imgs/ArrowSquareOut.png";
import out from "../../assets/imgs/SignOut.png";
import icon1 from "../../assets/imgs/Icone 1.png";
import icon2 from "../../assets/imgs/Icone 2.png";
import icon3 from "../../assets/imgs/Icone 3.png";
import mic from "../../assets/imgs/Microphone.png";
import img1 from "../../assets/imgs/Image (1).png";
import plane from "../../assets/imgs/PaperPlaneRight.png";
import { useEffect, useState } from "react";
// import { useState } from "react";

function Chat() {
  const [chats, setchats] = useState([]);
  const [chatSelecionado, setChatSelecionado] = useState(null);

  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    getChats();
  }, []);

  const getChats = async () => {
    let response = await fetch(
      "https://senai-gpt-api.azurewebsites.net/chats",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("meutoken"),
        },
      }
    );
    console.log(response);
    if (response.ok == true) {
      let json = await response.json();
      setchats(json);
    } else {
      if (response.status == 401) {
        alert("Token inválido. Faça login novamente.");
        localStorage.clear();
        window.location.href = "/login";
      }
    }
  };

  const onLogOutClick = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const clickchat = (chat) => {
    setChatSelecionado(chat);
  };

  const chatGPT = async (message) => {
    // Configurações do endpoint e chave da API
    const endpoint = "https://ai-testenpl826117277026.openai.azure.com/";
    const apiKey =
    const deploymentId = "gpt-4"; // Nome do deployment no Azure OpenAI
    const apiVersion = "2024-05-01-preview"; // Verifique a versão na documentação

    // URL para a chamada da API
    const url = `${endpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`;

    // Configurações do corpo da requisição
    const data = {
      messages: [{ role: "user", content: message }],
      max_tokens: 50,
    };

    // Cabeçalhos da requisição
    const headers = {
      "Content-Type": "application/json",
      "api-key": apiKey,
    };

    // Faz a requisição com fetch
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      const botMessage = result.choices[0].message.content;
      return botMessage;
    }
  };

  const enviarMensagem = async (message) => {
    let resposta = await chatGPT(message);
    console.log("Resposta: ", resposta);
    const novaMensagemUsuario = {
      userId: "",
      text: message
      id: 10
    }
let novaRespostaChatGPT = {
userId: "chatbot",
text: resposta,
id: 10
}; 

let novoChatSelecionado = {...chatSelecionado} 
novoChatSelecionado.messages.push(novaMensagemUsuario)
novoChatSelecionado.messages.push(novaRespostaChatGPT)
setChatSelecionado(novoChatSelecionado)
  };

  return (
    <>
      <div className="container">
        <header className="painel-lateral">
          <div className="painel-lateral-topo">
            <button className="btnnovochat">Novo Chat</button>

            {chats.map((chat) => (
              <button className="chat-help" onClick={() => clickchat(chat)}>
                <img src={chattext} alt="" />
                {chat.chatTitle}
              </button>
            ))}
          </div>

          <div className="painel-lateral-bot">
            <button className="chat-help">
              {" "}
              <img src={trash} alt="" />
              Clear conversations
            </button>

            <button className="chat-help">
              {" "}
              <img src={sun} alt="" />
              Light mode
            </button>

            <button className="chat-help">
              {" "}
              <img src={user} alt="" />
              My account
            </button>

            <button className="chat-help">
              {" "}
              <img src={arrow} alt="" />
              Updates & FAQ
            </button>

            <button className="chat-help" onClick={() => onLogOutClick()}>
              {" "}
              <img src={out} alt="" />
              Log out
            </button>
          </div>
        </header>
        <main className="painel-central">
          {chatSelecionado == null && (
            <>
              <div>
                <img src={logochat} alt="" className="logo" />
              </div>
              <div className="tutorial">
                <div className="txt1">
                  <p align="center">
                    <img src={icon1} alt="exemplos" />
                  </p>
                  <h1>Examples</h1>
                  <p>"Explain quantum computing insimple terms"</p>
                  <p>"Got any creative ideas for a 10year old's birthday?"</p>
                  <p>"How do I make an HTTP requestin Javascript?"</p>
                </div>

                <div className="txt1">
                  <p align="center">
                    <img src={icon2} alt="capacidades" />
                  </p>
                  <h1>Capabilities</h1>
                  <p>Remembers what user saidearlier in the conversation.</p>
                  <p>Allows user to provide follow-up corrections.</p>
                  <p>Trained to decline inappropriate reqsuests.</p>
                </div>

                <div className="txt1">
                  <p align="center">
                    <img src={icon3} alt="limitaçoes" />
                  </p>
                  <h1>Limitations</h1>
                  <p>May occasionally generate incorrect information.</p>
                  <p>
                    May occasionally produce harmful instructions or biased
                    content.
                  </p>
                  <p>Limited knowledge of world andevents after 2021.</p>
                </div>
              </div>
            </>
          )}

          {chatSelecionado != null && (
            <>
              <div className="chat-container">
                <div className="chat-header">
                  <h2>{chatSelecionado.chatTitle}</h2>
                </div>
                <div className="chat-messages"></div>
                {chatSelecionado.messages.map((message) => (
                  <p
                    className={
                      "message-item " +
                      (message.userId == "chatbot" ? "chatbot" : "")
                    }
                  >
                    {message.text}
                  </p>
                ))}
              </div>
            </>
          )}

          <div className="pesquisa">
            <img src={mic} alt="" />
            <img src={img1} alt="" />
            <input
              value={userMessage}
              onChange={(event) => setUserMessage(event.target.value)}
              placeholder="Type a message."
              type="message"
              className="search"
            />
            <img
              onClick={() => enviarMensagem(userMessage)}
              src={plane}
              alt=""
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default Chat;
