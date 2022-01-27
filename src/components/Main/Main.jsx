import React, { useState } from "react";
import "./Main.css";

function Main() {
  const [sizePass, setSizePass] = useState(15);
  const [pass, setPass] = useState("");

  function gerarSenha() {
    let charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$&";
    let senha = "";
    for (let i = 0, n = charset.length; i < sizePass; ++i) {
      senha += charset.charAt(Math.floor(Math.random() * n));
    }
    setPass(senha);
    document.querySelector(".container-password").classList.remove("hide");
  }

  function copyPassword(){
    navigator.clipboard.writeText(pass);
    alert("Senha copiada 👍");
  }

  return (
    <div className="container-input">
      <span>
        Tamanho de caracteres <span>{sizePass}</span>
      </span>
      <input
        className="slider"
        type="range"
        min={4}
        max={25}
        onChange={(e) => {
          setSizePass(e.target.value);
        }}
        defaultValue={sizePass}
      />
      <button className="btn" onClick={gerarSenha}>
        Gerar senha
      </button>

      <div className="container-password hide">
        <span className="title">A senha gerada foi:</span>
        <span id="password" className="password" onClick={ copyPassword }>
          {pass}
        </span>
        <span className="tooltip">☝️ Clique na senha para copiar ☝️</span>
      </div>
    </div>
  );
}

export default Main;
