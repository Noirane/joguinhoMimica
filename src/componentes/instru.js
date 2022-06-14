import React from "react";
import {StyleSheet,Image} from "react-native";
import RetVermelho from "../../assets/instru.png";


export default function RetanguloVermelho() {
  return <Image source={RetVermelho} style={estilos.Rectangle_8} />;
}

const estilos = StyleSheet.create({
  Rectangle_8: {
    position: "absolute",
    width: 270,
    height: 270,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    opacity: 1,
    left: 41,
    top: 320,

  },
});
