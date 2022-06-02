import React from "react";
import { StyleSheet, Image } from "react-native";
import TxtJogo from "../../assets/textoMimica.png";

export default function TextoJogo() {
  return <Image source={TxtJogo} style={estilos.TextoJogo} />;
}

const estilos = StyleSheet.create({
  TextoJogo: {
    position: "absolute",
    width: 213,
    height: 79,
    left: 131,
    top: 173,
  },
});
