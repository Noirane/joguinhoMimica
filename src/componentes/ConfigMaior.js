import React from "react";
import { StyleSheet, Image } from "react-native";
import confMaiorSuperior from "../../assets/confMaior.png";

export default function configMaior() {
  return <Image source={confMaiorSuperior} style={estilos.configMaior} />;
}

const estilos = StyleSheet.create({
  configMaior: {
    position: "absolute",
    width: 362.4,
    height: 154,
    left: 0,
    top: 2,
  },
});
