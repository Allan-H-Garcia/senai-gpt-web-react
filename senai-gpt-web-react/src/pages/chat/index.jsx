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
        window.location.href = "/login";
      }
    }
  };

  return (
    <>
      <div className="container">
        <header className="painel-lateral">
          <div className="painel-lateral-topo">
            <button className="btn">Novo Chat</button>

            
{chats.map(chat => (
	<button className="chat-help">
              <img src={chattext} alt="" />
              {chat.chattitle}
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

            <button className="chat-help">
              {" "}
              <img src={out} alt="" />
              Log out
            </button>
          </div>
        </header>
        <main className="painel-central">
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
                May occasionally produce harmful instructions or biased content.
              </p>
              <p>Limited knowledge of world andevents after 2021.</p>
            </div>
          </div>
          <div className="pesquisa">
            <img src={mic} alt="" />
            <img src={img1} alt="" />
            <input
              placeholder="Type a message."
              type="message"
              className="search"
            />
            <img src={plane} alt="" />
          </div>
        </main>
      </div>
    </>
  );
}

export default Chat;
