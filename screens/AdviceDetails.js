import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

import { fetchAdviceDetails } from "../util/database";
import { useContext, useState, useEffect, useLayoutEffect } from "react";
import { FavoritesContext } from "../store/favoritesContext";
import Knead from "../icons/Knead";
import Ingredients from "../icons/Ingredients";
import Service from "../icons/Service";
import Price from "../icons/Price";
import React from "react";
import IconButton from "../components/UI/Buttons/IconButton";
import LottieView from "lottie-react-native";
import DetailsBox from "../components/UI/DetailsBox";
import Address from "../icons/Address";
import { Colors } from "../constants/Colors";

const AdviceDetails = ({ route, navigation }) => {
  const favoriteAdviceCtx = useContext(FavoritesContext);
  const [fetchedAdvice, setFetchedAdvice] = useState();

  function showOnMapHandler() {
    navigation.navigate("Map", {
      initialLat: fetchedAdvice.location.lat,
      initialLng: fetchedAdvice.location.lng,
    });
  }

  const selectedAdviceId = route.params.adviceId;
  const adviceIsFavorite = favoriteAdviceCtx.ids.includes(selectedAdviceId);

  const changeFavoriteStatusHandler = () => {
    if (adviceIsFavorite) {
      favoriteAdviceCtx.removeFavorite(selectedAdviceId);
    } else {
      favoriteAdviceCtx.addFavorite(selectedAdviceId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={adviceIsFavorite ? "heart" : "heart-outline"}
            color="red"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  useEffect(() => {
    async function loadAdviceData() {
      const advice = await fetchAdviceDetails(selectedAdviceId);
      setFetchedAdvice(advice);
      navigation.setOptions({
        title: advice.title,
      });
    }
    loadAdviceData();
  }, [selectedAdviceId]);

  if (!fetchedAdvice) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.fallbackText}>Loading Advice Details...</Text>
        <LottieView
          autoPlay
          loop
          source={require("../lottie/pizzaLoading.json")}
          style={{
            width: 200,
            height: 200,
          }}
        />
      </View>
    );
  }

  //  I know this is a very bad approach, but the simpliest way to write it
  //   better is to take from select list also the key and value, this select
  //   list only can take one of them, so what that is written like that 🙈

  const renderDoughQuality = () => {
    if (fetchedAdvice.doughQuality == 1) {
      return <Text>1 - Don't eat there ! ❌</Text>;
    } else if (fetchedAdvice.doughQuality == 2) {
      return <Text>2 - Bought dough, very bad ! 👮🏻‍♂️</Text>;
    } else if (fetchedAdvice.doughQuality == 3) {
      return <Text>3 - Still a lot to improve 😢</Text>;
    } else if (fetchedAdvice.doughQuality == 4) {
      return <Text>4 - Not so bad, but also to improve 😔</Text>;
    } else if (fetchedAdvice.doughQuality == 5) {
      return <Text>5 - Medium Dough, nothing special 😏</Text>;
    } else if (fetchedAdvice.doughQuality == 6) {
      return <Text>6 - Slightly good dough 🙂</Text>;
    } else if (fetchedAdvice.doughQuality == 7) {
      return <Text>7 - Good dough, but can be improved 😀</Text>;
    } else if (fetchedAdvice.doughQuality == 8) {
      return <Text>8 - Very good dough, nice to go there again 😁</Text>;
    } else if (fetchedAdvice.doughQuality == 9) {
      return <Text>9 - Veeery tasty dough, must visit again 😍</Text>;
    } else if (fetchedAdvice.doughQuality == 10) {
      return <Text>10 - Delicious dought, absolutely love it ! ♥️</Text>;
    }
  };

  const doughQuality = renderDoughQuality();

  const renderIngredientsQuality = () => {
    if (fetchedAdvice.doughQuality == 1) {
      return <Text>1 - Awful ingredients ! ❌</Text>;
    } else if (fetchedAdvice.doughQuality == 2) {
      return <Text>2 - Very cheap ingredients, very bad ! 👮🏻‍♂️</Text>;
    } else if (fetchedAdvice.doughQuality == 3) {
      return <Text>3 - Ingredients can be a lot better 😢</Text>;
    } else if (fetchedAdvice.doughQuality == 4) {
      return <Text>4 - Not so bad, but need to be better 😔</Text>;
    } else if (fetchedAdvice.doughQuality == 5) {
      return <Text>5 - Medium Ingredient, nothing special 😏</Text>;
    } else if (fetchedAdvice.doughQuality == 6) {
      return <Text>6 - Slightly good ingredients 🙂</Text>;
    } else if (fetchedAdvice.doughQuality == 7) {
      return <Text>7 - Good ingredients, but not perfect 😀</Text>;
    } else if (fetchedAdvice.doughQuality == 8) {
      return <Text>8 - Very good ingredients, nice to visit again 😁</Text>;
    } else if (fetchedAdvice.doughQuality == 9) {
      return <Text>9 - Veeery tasty ingredients, must visit again 😍</Text>;
    } else if (fetchedAdvice.doughQuality == 10) {
      return (
        <Text>10 - Lovely taste of igredients, absolutely perfect ! 🥰</Text>
      );
    }
  };

  const ingredientsQuality = renderIngredientsQuality();

  const renderServiceQuality = () => {
    if (fetchedAdvice.doughQuality == 1) {
      return <Text>1 - Very slow, very rude. 🤬 </Text>;
    } else if (fetchedAdvice.doughQuality == 2) {
      return <Text>2 - Not so slow, but surly. 😠</Text>;
    } else if (fetchedAdvice.doughQuality == 3) {
      return <Text>3 - Very nasty, but quick. 🤨</Text>;
    } else if (fetchedAdvice.doughQuality == 4) {
      return <Text>4 - Medium atmosphere, long time. 😔</Text>;
    } else if (fetchedAdvice.doughQuality == 5) {
      return <Text>5 - Medium time, medium atmosphere. 😏</Text>;
    } else if (fetchedAdvice.doughQuality == 6) {
      return <Text>6 - Good atmosphere, long time to wait. 🙂</Text>;
    } else if (fetchedAdvice.doughQuality == 7) {
      return <Text>7 - Great atmosphere, medium time to wait. 😀</Text>;
    } else if (fetchedAdvice.doughQuality == 8) {
      return <Text>8 - Excellent atmosphere, very quick. 😁</Text>;
    } else if (fetchedAdvice.doughQuality == 9) {
      return <Text>9 - Cosy place, with lovely people. 😍</Text>;
    } else if (fetchedAdvice.doughQuality == 10) {
      return <Text>10 - Lovely place, lovely staff. 🥰</Text>;
    }
  };

  const serviceQuality = renderServiceQuality();

  const renderPriceToQuality = () => {
    if (fetchedAdvice.doughQuality == 1) {
      return <Text>1 - Small portion, awful taste. 🤮</Text>;
    } else if (fetchedAdvice.doughQuality == 2) {
      return <Text>2 - Very bad taste, normal portion. 🤢</Text>;
    } else if (fetchedAdvice.doughQuality == 3) {
      return <Text>3 - Bad taste, enormous portion. 🙈</Text>;
    } else if (fetchedAdvice.doughQuality == 4) {
      return <Text>4 - Not so bad taste,but small portion. 😔</Text>;
    } else if (fetchedAdvice.doughQuality == 5) {
      return <Text>5 - Medium portion, nothing special. 😏</Text>;
    } else if (fetchedAdvice.doughQuality == 6) {
      return <Text>6 - Good taste, but too expensive. 🙂</Text>;
    } else if (fetchedAdvice.doughQuality == 7) {
      return <Text>7 - Really tasty, but can be bigger. 😀</Text>;
    } else if (fetchedAdvice.doughQuality == 8) {
      return <Text>8 - Veeery tasty, big portion but expensive. 😁</Text>;
    } else if (fetchedAdvice.doughQuality == 9) {
      return <Text>9 - Really big, good taste, good price. 😍</Text>;
    } else if (fetchedAdvice.doughQuality == 10) {
      return <Text>10 - Lovely taste, enormous portion. 🥰</Text>;
    }
  };

  const priceToquality = renderPriceToQuality();
  return (
    <View style={styles.backgroundImage}>
      <ScrollView>
        <Image style={styles.image} source={{ uri: fetchedAdvice.imageUri }} />
        <View style={styles.locationContainer}>
          <View style={styles.addressContainer}>
            <DetailsBox
              data={doughQuality}
              title="Opinion about dought Quality."
              icon={<Knead />}
            />
            <DetailsBox
              data={ingredientsQuality}
              title="Opinion about ingredients."
              icon={<Ingredients />}
            />
            <DetailsBox
              data={serviceQuality}
              title="Opinion about Service Quality"
              icon={<Service />}
            />
            <DetailsBox
              data={priceToquality}
              title="Opinion comparison price and quality"
              icon={<Price />}
            />

            <>
              <Text style={styles.text}>Your selected address</Text>
              <View style={styles.actions}>
                <Address />
                <Text style={styles.address1}>{fetchedAdvice.address}</Text>
              </View>
            </>
          </View>
          <View style={styles.button}>
            <Button onPress={showOnMapHandler} title="Show me where it is !" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AdviceDetails;

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    margin: 25,
    borderWidth: 2,
    borderRadius: 12,
  },

  addressContainer: {
    margin: 20,
  },
  text: {
    color: Colors.white,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 20,
  },
  address: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  address1: {
    maxWidth: "80%",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    backgroundColor: Colors.darkgreen,
  },
  opinion: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    marginBottom: 30,
  },
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#113537",
  },
  fallbackText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
