import { StyleSheet, View, TouchableOpacity } from "react-native";
import BolinhasFundo from "../componentes/BolinhasFundo";

import Casa from "../componentes/Casa";
import Disco from "../componentes/Disco";
import ConfigMaior from "../componentes/ConfigMaior";
import RetanguloVermelho from "../componentes/RetanguloVermelho";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";

const audio = {
  uri: "https://freesound.org/data/previews/413/413854_4337854-hq.mp3",
};

export default function Home({ navigation }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackObject, setPlaybackObject] = useState(null);
  const [playbackStatus, setPlaybackStatus] = useState(null);

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
      <BolinhasFundo />
      <RetanguloVermelho />
      <ConfigMaior/>

      <Disco />
      <Ionicons
        style={{
          position: "absolute",
          width: 50,
          height: 50,
          left: 148.2,
          top: 398.5,

          backgroundColor: "white",
          padding: 10,
          borderRadius: 60,
        }}
        name={isPlaying ? "pause" : "play"}
        size={29}
        color="red"
        onPress={handleAudioPlayPause}
      />

      <TouchableOpacity
        style={estilos.botaoConf}
        onPress={() => navigation.navigate("Home")}
      >
        <Casa />
      </TouchableOpacity>

  
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

