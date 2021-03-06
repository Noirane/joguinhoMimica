import React from "react";
import { StyleSheet, Image,CheckBox } from "react-native";
import confMaiorSuperior from "../../assets/ConfMaior.png";

export default function configMaior() {
  return <Image source={confMaiorSuperior} style={estilos.configMaior} />;
}

const estilos = StyleSheet.create({
  configMaior: {
    position: "absolute",
    width: 120,
    height: 40,
    left: 122,
    top: 120,
  },
});
