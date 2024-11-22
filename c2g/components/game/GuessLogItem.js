import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text># {roundNumber}</Text>
      <Text> Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.primary400,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
export default GuessLogItem;
