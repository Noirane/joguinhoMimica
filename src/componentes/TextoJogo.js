import React from "react";
import { StyleSheet, Image } from "react-native";
import TxtJogo from "../../assets/textoJogo.png";

export default function TextoJogo() {
  return <Image source={TxtJogo} style={estilos.TextoJogo} />;
}

const estilos = StyleSheet.create({
  TextoJogo: {
    position: "absolute",
    width: 155,
    height: 48,
    left: 152,
    top: 62,
  },
});
