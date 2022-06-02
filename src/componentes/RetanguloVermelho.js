import React from "react";
import { View, StyleSheet } from "react-native";

export default function RetanguloVermelho() {
  return <View style={estilos.Rectangle_8}></View>;
}

const estilos = StyleSheet.create({
  Rectangle_8: {
    position: "absolute",
    width: 360,
    height: 315,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 5,
    opacity: 1,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(218,74,84,1)",
    opacity: 0.7,
  },
});
