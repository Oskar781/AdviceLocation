import { useEffect, useState } from "react";
import {
  Alert,
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";

import { getAddress, getMapPreview } from "../util/setLocation";
import { Colors } from "../constants/Colors";

function LocationPicker({ onPickLocation }) {
  const [pickedLocation, setPickedLocation] = useState({
    lat: 36.785834,
    lng: -122.406417,
    address: "1800 Ellis St, San Francisco, CA 94115, Stany Zjednoczone",
  });
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const route = useRoute();

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation) {
        const address = await getAddress(
          pickedLocation.lat,
          pickedLocation.lng
        );
        onPickLocation({ ...pickedLocation, address: address });
      }
    }

    handleLocation();
  }, [pickedLocation, onPickLocation]);

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app."
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation.lat == 36.785834) {
    locationPreview = <Text>Pick location.</Text>;
  } else if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
        }}
      />
    );
  }

  if (!pickedLocation) {
    setPickedLocation({
      lat: 36.785834,
      lng: -122.406417,
      address: "1800 Ellis St, San Francisco, CA 94115, Stany Zjednoczone",
    });
  }

  return (
    <View>
      <TouchableOpacity onPress={pickOnMapHandler}>
        <View style={styles.mapPreview}>{locationPreview}</View>
      </TouchableOpacity>
      <View style={styles.actions}>
        <Button onPress={getLocationHandler} title="Locate me !" />
        <Button onPress={pickOnMapHandler} title="Pick location on map." />
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    flex: 1,
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.picker,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "black",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});
