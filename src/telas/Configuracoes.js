import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BolinhasFundo from "../componentes/BolinhasFundo";

import Casa from "../componentes/Casa";
import ConfigMaior from "../componentes/ConfigMaior";
import Sound from "../componentes/Sound";
import NoSound from "../componentes/NoSound";

export default function Home({ navigation }) {
  return (
    <View>
      <BolinhasFundo />

      <TouchableOpacity
        style={estilos.botaoConf}
        onPress={() => navigation.navigate("Home")}
      >
        <Casa />
      </TouchableOpacity>
      <Sound />
      <NoSound />

      <ConfigMaior />
    </View>
  );
}

const estilos = StyleSheet.create({
  botaoConf: {
    position: "absolute",
    width: 60,
    height: 60,
  },
});
