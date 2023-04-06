import { useFavorites } from '../../hooks/useFavorite'
import {BsFillHeartFill} from 'react-icons/bs'
import style from './Header.module.css'
import { Link } from "react-router-dom";

export const Header = () => {
  const {favorites} = useFavorites()
  return (
    <div>
      <header>
      <Link  to={`/favorites`}>
        <BsFillHeartFill  fontSize="30px"/>
        <span className={style.count} >{favorites.length}</span>
      </Link>
        
      </header>
    </div>
  );
};
