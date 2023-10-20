import { useState, createContext } from "react";

const FavouriteContext = createContext({
    favouritebooks: [],
    addUserFavourite: () => { },
    removeUserFavourite: () => { },
    chectUserFavourite: () => { }
});

export function ContextFavorite(props) {
    const [userFavourite, setUserFavourite] = useState([]);

    const addUserFavourite = (product) => {
        setUserFavourite((previousfavourite) => {
            return previousfavourite.concat(product);
        })
    }

    const removeUserFavourite = (id) => {
        setUserFavourite((previousfavourite) => {
            return previousfavourite.filter(product => product._id !== id)
        })
    }

    const chectUserFavourite = (id) => {
        return userFavourite.some(product => product._id === id)
    }


    const context = {
        favouritebooks: userFavourite,
        addUserFavourite: addUserFavourite,
        removeUserFavourite: removeUserFavourite,
        chectUserFavourite: chectUserFavourite
    }
    return <FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>
}





export default FavouriteContext;