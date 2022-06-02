import React from "react";
import { StyleSheet, Image } from "react-native";
import botaSound from "../../assets/sound.png";

export default function Sound() {
  return <Image source={botaSound} style={estilos.botaSound} />;
}

const estilos = StyleSheet.create({
  botaSound: {
    position: "absolute",
    width: 40,
    height: 40,
    left: 18,
    top: 250,
  },
});
