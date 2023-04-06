import React from 'react';
import style from './RecipeItem.module.css';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorite';


export const RecipeItem = ({ recipe }) => {
  const {toggleFavorite} = useActions()
  const {favorites} = useFavorites()
  const isExists = favorites.some(r => r.id === recipe.id)

  // console.log(favorites)
  return (
    <li className={style.item}>
      <h2>{recipe.name}</h2>
      <p>{recipe.about}</p>
      <button
       onClick={() => toggleFavorite(recipe)} 
       className={style.button}>
       { isExists ? "Remove from favorites" :"Add to favorite"}
        </button>
    </li>
  );
};
