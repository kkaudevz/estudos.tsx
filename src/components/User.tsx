import { MdLocationPin } from "react-icons/md";
import { UserProps } from "../types/user";
import { Link } from "react-router-dom";
import classes from "./User.module.css";

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <p className={classes.location}>
        <MdLocationPin />
        <span>{location}</span>
      </p>
      <div>
        <div className={classes.status}>
          <p>Seguidores</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo</p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver melhor os perfis </Link>
    </div>
  );
};

export default User;
