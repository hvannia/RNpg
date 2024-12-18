import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

styles = StyleSheet.create({
  card: {
    // flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", // dont stretch
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    // android shadow:
    elevation: 4,
    // ios shadow:
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
export default Card;
