type pesquisarProps = {
  carregarUsuario: (NomeUsuario: string) => Promise<void>;
};

import classes from "./pesquisar.module.css";
import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";

const Pesquisar = ({ carregarUsuario }: pesquisarProps) => {
  const [usuario, setusuario] = useState("");

  const handlekeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      carregarUsuario(usuario);
    }
  };

  return (
    <div className={classes.pesquisar}>
      <h2> Pesquise os usuarios ativos no Github </h2>
      <p> Aqui você encontra todos os usuarios do github</p>
      <div className={classes.container_pesquisar}>
        <input
          type="text"
          placeholder="Digite o nome do us;uario"
          onChange={(e) => setusuario(e.target.value)}
          onKeyDown={handlekeyDown}
        />
        <button onClick={() => carregarUsuario(usuario)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Pesquisar;
