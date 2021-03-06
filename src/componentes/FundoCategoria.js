import React from "react";
import { Image, View, StyleSheet } from "react-native";
import bolisFundo from "../../assets/fundoCategoria.png";

export default function BolinhasFundo() {
  return <Image source={bolisFundo} style={estilos.bolinhasFundo} />;
}

const estilos = StyleSheet.create({
  bolinhasFundo: {
    width: 360,
    height: 720,
  },
});
