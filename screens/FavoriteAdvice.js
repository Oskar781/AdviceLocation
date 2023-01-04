import { View, Text, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { fetchAdvice } from "../util/database.js";
import LottieView from "lottie-react-native";

import AdviceList from "../components/AdviceList.js";
import { FavoritesContext } from "../store/favoritesContext.js";
import { Colors } from "../constants/Colors.js";

const FavoriteAdvice = () => {
  const favoriteAdviceCtx = useContext(FavoritesContext);
  const [loadedAdvice, setLoadedAdvice] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadAdvice() {
      const advice = await fetchAdvice();
      setLoadedAdvice(advice);
    }

    if (isFocused) {
      loadAdvice();
    }
  }, [isFocused, loadedAdvice]);

  const favoriteAdvice = loadedAdvice.filter((advice) =>
    favoriteAdviceCtx.ids.includes(advice.id)
  );

  if (favoriteAdvice.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite advice yet.</Text>
        <LottieView
          autoPlay
          loop
          source={require("../lottie/wishlist.json")}
          style={{
            width: 200,
            height: 200,
          }}
        />
        <Text style={styles.text}>
          Maybe go to Advice Details and add some ?
        </Text>
      </View>
    );
  }

  return <AdviceList advice={favoriteAdvice} />;
};

export default FavoriteAdvice;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.darkgreen,
  },
  text: {
    color: Colors.lightgreen,
    fontWeight: "bold",
  },
});
