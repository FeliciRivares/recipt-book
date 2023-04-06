import {RecipeItem} from '../RecipeItem/RecipeItem'
import style from './Recipe.module.css'

export const Recipe = () => {
    return (
        <div className={style.container}>
        <h1>Recipt book</h1>
        <ul className={style.reciptUL}>
          <RecipeItem recipe={{ 
            id: 1, 
            name: "Recipe-Name",
            about: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nesciunt cum voluptate velit ad ullam aliquam rem voluptates, omnis quasi nam perspiciatis nobis et,cumque sed quos sapiente dolor? Soluta.",
           }} />
          <RecipeItem recipe={{ 
            id: 2, 
            name: "Recipe-Name",
            about: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nesciunt cum voluptate velit ad ullam aliquam rem voluptates, omnis quasi nam perspiciatis nobis et,cumque sed quos sapiente dolor? Soluta.",
           }}/>
          <RecipeItem recipe={{ 
            id: 3, 
            name: "Recipe-Name",
            about: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nesciunt cum voluptate velit ad ullam aliquam rem voluptates, omnis quasi nam perspiciatis nobis et,cumque sed quos sapiente dolor? Soluta.",
           }}/>
          <RecipeItem recipe={{ 
            id: 4, 
            name: "Recipe-Name",
            about: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nesciunt cum voluptate velit ad ullam aliquam rem voluptates, omnis quasi nam perspiciatis nobis et,cumque sed quos sapiente dolor? Soluta.",
           }}/>
          <RecipeItem recipe={{ 
            id: 5, 
            name: "Recipe-Name",
            about: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nesciunt cum voluptate velit ad ullam aliquam rem voluptates, omnis quasi nam perspiciatis nobis et,cumque sed quos sapiente dolor? Soluta.",
           }}/>
          <RecipeItem recipe={{ 
            id: 6, 
            name: "Recipe-Name",
            about: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nesciunt cum voluptate velit ad ullam aliquam rem voluptates, omnis quasi nam perspiciatis nobis et,cumque sed quos sapiente dolor? Soluta.",
           }}/>
        </ul>
      </div>
    )
}