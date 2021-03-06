import React from "react";
import {StyleSheet,Image} from "react-native";
import RetVermelho from "../../assets/retangulo_vermelho.png";


export default function RetanguloVermelho() {
  return <Image source={RetVermelho} style={estilos.Rectangle_8} />;
}

const estilos = StyleSheet.create({
  Rectangle_8: {
    position: "absolute",
    width: 360,
    height: 300,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 5,
    opacity: 1,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(218,74,84,1)",
    opacity: 0.7,
    top:0,
  },
});
