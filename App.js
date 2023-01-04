import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import AllAdvice from "./screens/AllAdvice";
import FavoriteAdvice from "./screens/FavoriteAdvice";
import AddAdvice from "./screens/AddAdvice";
import { StatusBar } from "expo-status-bar";
import AdviceDetails from "./screens/AdviceDetails";
import Map from "./screens/Map";
import { useEffect, useState } from "react";
import { init } from "./util/database";
import { Text, StyleSheet, View } from "react-native";
import FavoritesContextProvider from "./store/favoritesContext";
import { Colors } from "./constants/Colors";
import AddBtn from "./components/UI/Buttons/AddBtn";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AdviceOverview = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: Colors.darkgreen },
          headerTintColor: Colors.white,
          tabBarStyle: { backgroundColor: Colors.darkgreen },
          tabBarActiveTintColor: Colors.white,
          headerRight: ({ tintColor }) => (
            <AddBtn
              icon="add"
              size={24}
              color={tintColor}
              onPress={() => {
                navigation.navigate("AddAdvice");
              }}
            />
          ),
        })}
      >
        <Tab.Screen
          name="AllAdvice"
          component={AllAdvice}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="FavoriteAdvice"
          component={FavoriteAdvice}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!dbInitialized) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.fallbackText}>Loading Advice</Text>
        <LottieView
          autoPlay
          loop
          source={require("./lottie/pizzaLoading.json")}
          style={{
            width: 200,
            height: 200,
          }}
        />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.darkgreen },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="Advice Overview"
              component={AdviceOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="AddAdvice" component={AddAdvice} />

            <Stack.Screen
              name="Map"
              component={Map}
              screenOptions={{
                headerStyle: { backgroundColor: Colors.darkgreen },
              }}
            />
            <Stack.Screen
              name="AdviceDetails"
              component={AdviceDetails}
              options={{
                title: "Loading Place...",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
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
