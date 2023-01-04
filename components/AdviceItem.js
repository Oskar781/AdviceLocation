import {
  Text,
  Pressable,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from "react-native";
import LottieView from "lottie-react-native";
import PressableTrash from "../icons/PressableTrash";
import { Colors } from "../constants/Colors";
const { width } = Dimensions.get("screen");

const imageW = width * 0.7;
const imageH = imageW * 1.54;

const AdviceItem = ({ advice, onSelect, onDelete }) => {
  const averageOpinion =
    (advice.doughQuality +
      advice.qualityOfIngredients +
      advice.serviceQuality +
      advice.priceToQuality) /
    4;

  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      onPress={onSelect.bind(this, advice.id)}
    >
      <Image style={styles.allAdviceImage} source={{ uri: advice.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.title}>{advice.title}</Text>
        <Text style={styles.title}>{advice.restaurant}</Text>
        <View style={styles.averageBox}>
          <View style={styles.averageInsideBox}>
            <Text style={styles.average}>{averageOpinion.toFixed(2)}/10</Text>
            <LottieView
              autoPlay
              loop
              source={require("../lottie/star.json")}
              style={{
                width: 20,
                height: 20,
                paddingLeft: 5,
                marginBottom: 5,
              }}
            />
          </View>
          <PressableTrash onPress={onDelete.bind(this, advice.id)} />
        </View>
      </View>
    </Pressable>
  );
};

export default AdviceItem;

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 20, height: 20 },
    shadowRadius: 20,
    shadowOpacity: 20,
    backgroundColor: Colors.darkgreen,
    borderRadius: 16,
    elevation: 30,
  },
  pressed: {
    opacity: 0.6,
  },
  allAdviceImage: {
    justifyContent: "center",
    alignItems: "center",
    width: imageW,
    height: imageH,
    resizeMode: "cover",
    borderRadius: 16,
  },
  info: {
    width: imageW,
  },
  averageBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  averageInsideBox: {
    flexDirection: "row",
  },
  average: {
    color: Colors.white,
    fontWeight: "bold",
  },
  title: {
    color: Colors.white,
    padding: 5,
    fontWeight: "bold",
  },
});
