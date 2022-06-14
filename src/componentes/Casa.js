import React from "react";
import { StyleSheet, Image } from "react-native";
import Casafig from "../../assets/casa.png";

export default function Casa() {
  return <Image source={Casafig} style={estilos.botaoJogar} />;
}

const estilos = StyleSheet.create({
  botaoJogar: {
    position: "absolute",
    width: 60,
    height: 60,
    left: 142.5,
    top: 600,
  },
});
