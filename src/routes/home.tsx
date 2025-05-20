import Pesquisar from "../components/pesquisar";
import { UserProps } from "../types/user";
import { useState } from "react";
import User from "../components/User";
import Error from "../components/Error";

const Home = () => {
  const [usuario, setusuario] = useState<UserProps | null>(null);
  const [error, seterror] = useState(false);

  const carregarUsuario = async (NomeUsuario: string) => {
    seterror(false);
    setusuario(null);

    try {
      const res = await fetch(`https://api.github.com/users/${NomeUsuario}`);

      const data = await res.json();

      if (res.status === 404) {
        seterror(true);
        return;
      }

      const { avatar_url, login, location, followers, following } = data;

      const usuarioData: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following,
      };
      setusuario(usuarioData);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      alert("Usuário não encontrado!");
    }
  };

  return (
    <div>
      <Pesquisar carregarUsuario={carregarUsuario} />
      {usuario && <User {...usuario} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
