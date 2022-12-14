import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Theme } from "../../themes";

type Props = {
  variant?: "primaru" | "light";
  label?: string;
  icon?: any;
};

export function Button({ variant, label, icon }: Props) {
  let touchableOpacityStyles: any = { backgroundColor: Theme.colors.primary };
  let textStyles = { color: "#fff" };
  if (variant === "light") {
    touchableOpacityStyles = {
      backgroundColor: "#fff",
      elevation: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.15,
    };
    textStyles = { color: Theme.colors.primary };
  }
  return (
    <TouchableOpacity style={[styles.button, touchableOpacityStyles]}>
      {!!label && <Text style={[styles.text, textStyles]}>{label}</Text>}
      {!!icon && <Image source={icon} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
});
