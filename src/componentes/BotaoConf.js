import React from "react";
import { StyleSheet, Image } from "react-native";
import botaConf from "../../assets/botaoConf.png";

export default function botaoConf() {
  return <Image source={botaConf} style={estilos.botaoConf} />;
}

const estilos = StyleSheet.create({
  botaoConf: {
    position: "absolute",
    width: 223,
    height: 64,
    left: 8,
    top: 362,
  },
});
