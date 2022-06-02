import React from "react";
import { StyleSheet, Image } from "react-native";
import botaInfo from "../../assets/botaoInformacoes.png";

export default function botaoConf() {
  return <Image source={botaInfo} style={estilos.botaoInfo} />;
}

const estilos = StyleSheet.create({
  botaoInfo: {
    position: "absolute",
    width: 223,
    height: 64,
    left: 8,
    top: 531,
  },
});
