import React from "react";
import { StyleSheet, Image } from "react-native";
import botaJogar from "../../assets/botaoJogar.png";

export default function botaoConf() {
  return <Image source={botaJogar} style={estilos.botaoJogar} />;
}

const estilos = StyleSheet.create({
  botaoJogar: {
    position: "absolute",
    width: 223,
    height: 64,
    left: 8,
    top: 447,
  },
});
