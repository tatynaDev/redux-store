import {ADD_and_DELETE_FAVORITES, ADD_TO_FAVORITES} from "../Reducer/ActionTypes";

export const likedToBasket = (product) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const found = favorites.find(el => el.id === product.id)
    if (!found) {
        favorites = [...favorites, {...product, isLiked: true}]
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
    return {type: ADD_TO_FAVORITES, payload: product}

}
export const addToFavorites = (item) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const found = favorites.find(el => el.id === item.id)
    if (!found) {
        favorites = [...favorites, {...item, isLiked: true}]
    }else {
        favorites = favorites.filter(el => el.id !== item.id)
    }
    localStorage.setItem('favorites' ,JSON.stringify(favorites))

    return {type: ADD_and_DELETE_FAVORITES, payload: item}
}