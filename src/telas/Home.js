import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BolinhasFundo from "../componentes/BolinhasFundo";
import RetanguloVermelho from "../componentes/RetanguloVermelho";
import ImagemDe from "../componentes/ImagemDe";
import BotaoInfo from "../componentes/BotaoInfo";
import BotaoConfig from "../componentes/BotaoConf";
import BotaoJogar from "../componentes/BotaoJogar";
import TextoMimica from "../componentes/TextoMimica";
import ImagemMimico from "../componentes/ImagemMimico";
import TextoJogo from "../componentes/TextoJogo";
import Configuracoes from "./Configuracoes";

export default function Home({ navigation }) {
  return (
    <View>
      <BolinhasFundo />

      <TouchableOpacity
        style={estilos.botaoConf}
        onPress={() => navigation.navigate("Configuracoes")}
      >
        <BotaoConfig />
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botaoJogar}
        onPress={() => navigation.navigate("Configuracoes")}
      >
        <BotaoJogar />
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botaoInfo}
        onPress={() => navigation.navigate("Configuracoes")}
      >
        <BotaoInfo />
      </TouchableOpacity>
      <ImagemMimico />
      <RetanguloVermelho />
      <ImagemDe />
      <TextoMimica />
      <ImagemMimico />
      <TextoJogo />
    </View>
  );
}

const estilos = StyleSheet.create({
  botaoConf: {
    position: "absolute",
    width: 223,
    height: 64,
  },

  botaoJogar: {
    position: "absolute",
    width: 223,
    height: 64,
  },

  botaoInfo: {
    position: "absolute",
    width: 223,
    height: 64,
  },
});
