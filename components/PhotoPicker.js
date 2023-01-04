import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import {
  launchImageLibraryAsync,
  useMediaLibraryPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";

import NoPhoto from "../icons/NoPhoto"; // svg icon, displayed when no photo has been picked
import { Colors } from "../constants/Colors";

function PhotoPicker({ onSelectImage }) {
  const [pickedImage, setPickedImage] = useState(); // state which handles selected photo

  const [mediaLibraryPermissionInformation, requestPermission] =
    useMediaLibraryPermissions();

  async function verifyPermissions() {
    if (
      mediaLibraryPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (mediaLibraryPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant gallery permissions to use this app."
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchImageLibraryAsync({
      mediaType: "photo",
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.uri);
    onSelectImage(image.uri);
  }

  return (
    <View>
      <TouchableOpacity onPress={takeImageHandler}>
        <View style={styles.imagePreview}>
          {pickedImage ? (
            <Image style={styles.image} source={{ uri: pickedImage }} />
          ) : (
            <>
              <Text> No image taken yet.</Text>
              <NoPhoto />
              <Text>Pick one from your gallery.</Text>
              <Button title="Pick image" onPress={takeImageHandler} />
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default PhotoPicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.picker,
    borderRadius: 50,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
