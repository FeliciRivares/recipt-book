import { useActionData } from "react-router-dom"
import { useFavorites } from "../../hooks/useFavorite"
import { useActions } from "../../hooks/useActions"


export const Favorites = () => {
    const {favorites} = useFavorites()
    console.log(favorites)
    return (
        <div>
        </div>
    )
}