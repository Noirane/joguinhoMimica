import React from "react";
import { StyleSheet, Image } from "react-native";
import confMaiorSuperior from "../../assets/InfoGrande.png";

export default function configMaior() {
  return <Image source={confMaiorSuperior} style={estilos.configMaior} />;
}

const estilos = StyleSheet.create({
  configMaior: {
    position: "absolute",
    width: 340,
    height: 55,
    left: 2,
    top: 120,
  },
});
