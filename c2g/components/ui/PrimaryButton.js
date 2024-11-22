import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary400 }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    // hide styling outside container
    overflow: "hidden",
  },
  buttonInnerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary250,
    paddingVertical: 8,
    paddingHorizontal: 16,
    // android shadow:
    elevation: 2,
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
