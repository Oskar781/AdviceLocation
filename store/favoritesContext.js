import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteAdviceIds, setFavoriteAdviceIds] = useState([]);

  function addFavorite(id) {
    setFavoriteAdviceIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteAdviceIds((currentFavIds) =>
      currentFavIds.filter((adviceId) => adviceId !== id)
    );
  }

  const value = {
    ids: favoriteAdviceIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
