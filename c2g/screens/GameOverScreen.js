import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        It took you <Text style={styles.highlight}>{roundsNumber}</Text> rounds
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

// get the width of the device
const deviceWidth = Dimensions.get("window").width;
// const deviceHeight = Dimensions.get("window").height;
//console.log(deviceWidth, deviceHeight);

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    borderRadius: 150, // half of width - height to create a circle
    borderWidth: 3,
    borderColor: Colors.primary800,
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 140 : 290,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    overflow: "hidden", // hide square
    margin: 36,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    color: Colors.primary700,
    marginBottom: 18,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary800,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default GameOverScreen;
