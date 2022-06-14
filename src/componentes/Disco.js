import React from "react";
import { StyleSheet, Image } from "react-native";
import Disco from "../../assets/disco.png";

export default function botaoConf() {
  return <Image source={Disco} style={estilos.botaoConf} />;
}

const estilos = StyleSheet.create({
  botaoConf: {
    position: "absolute",
    width: 223,
    height:230,
    left: 75,
    top: 325,
  },
});
