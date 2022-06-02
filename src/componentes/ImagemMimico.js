import React from "react";
import { StyleSheet, Image } from "react-native";
import ImgMimico from "../../assets/imagemMimico.png";

export default function ImagemMimico() {
  return <Image source={ImgMimico} style={estilos.ImagemMimico} />;
}

const estilos = StyleSheet.create({
  ImagemMimico: {
    position: "absolute",
    width: 139,
    height: 190,
    left: 16,
    top: 62,
  },
});
