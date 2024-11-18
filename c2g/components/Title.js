import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary250,
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 4,
    borderColor: Colors.primary250,
    padding: 12,
  },
});

export default Title;
