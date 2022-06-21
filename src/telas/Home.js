import { StyleSheet, View, TouchableOpacity } from "react-native";
import BolinhasFundo from "../componentes/BolinhasFundo";
import Pelicula from "../componentes/Pelicula";
import RetanguloVermelho from "../componentes/RetanguloVermelho";
import ImagemDe from "../componentes/ImagemDe";
import BotaoInfo from "../componentes/BotaoInfo";
import BotaoConfig from "../componentes/BotaoConf";
import BotaoJogar from "../componentes/BotaoJogar";
import TextoMimica from "../componentes/TextoMimica";
import ImagemMimico from "../componentes/ImagemMimico";



import TextoJogo from "../componentes/TextoJogo";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";

const audio = {
  uri: "https://freesound.org/data/previews/413/413854_4337854-hq.mp3",
};

export default function Home({ navigation }) {
  const [setIsPlaying] = useState(false);
  const [playbackObject, setPlaybackObject] = useState(null);
  const [setPlaybackStatus] = useState(null);

  useEffect(() => {
    if (playbackObject === null) {
      setPlaybackObject(new Audio.Sound());
    }
  }, []);

  const handleAudioPlayPause = async () => {
    if (playbackObject !== null && playbackStatus === null) {
      const status = await playbackObject.loadAsync(
        {
          uri: audio.uri,
        },

        { shouldPlay: true }
      );

      setIsPlaying(true);
      return setPlaybackStatus(status);
    }

    // It will pause our audio
    if (playbackStatus.isPlaying) {
      const status = await playbackObject.pauseAsync();
      setIsPlaying(false);
      return setPlaybackStatus(status);
    }

    // It will resume our audio
    if (!playbackStatus.isPlaying) {
      const status = await playbackObject.playAsync();
      setIsPlaying(true);
      return setPlaybackStatus(status);
    }
  };

  return (
    <View>
  
      <BolinhasFundo/>
      <RetanguloVermelho />

      <TouchableOpacity
      
        onPress={() => navigation.navigate("Configuracoes")}
      >
        
      </TouchableOpacity>
  
      <TouchableOpacity
        style={estilos.botaoConf}
        onPress={() => navigation.navigate("Configuracoes")}
      >
        <BotaoConfig />
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botaoJogar}
        onPress={() => navigation.navigate("Categorias")}
      >
        <BotaoJogar />
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botaoInfo}
        onPress={() => navigation.navigate("Informacoes")}
      >
        <BotaoInfo />
      </TouchableOpacity>
      <ImagemMimico />
     
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