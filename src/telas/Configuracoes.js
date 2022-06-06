import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BolinhasFundo from "../componentes/BolinhasFundo";

import Casa from "../componentes/Casa";
import ConfigMaior from "../componentes/ConfigMaior";
import Sound from "../componentes/Sound";
import NoSound from "../componentes/NoSound";

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

      <Ionicons
        style={{
          position: "absolute",
          width: 50,
          height: 50,
          left: 20,
          top: 200,

          backgroundColor: "black",
          padding: 10,
          borderRadius: 25,
        }}
        name={isPlaying ? "pause" : "play"}
        size={29}
        color="white"
        onPress={handleAudioPlayPause}
      />

      <TouchableOpacity
        style={estilos.botaoConf}
        onPress={() => navigation.navigate("Home")}
      >
        <Casa />
      </TouchableOpacity>

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

/*import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const audio = {

  uri:
    'https://freesound.org/data/previews/413/413854_4337854-hq.mp3',
};

export default function App() {
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
        { uri: audio.uri },
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
      <View style={{ flex: 1, padding: 50, backgroundColor: '#fff' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 15 }}>
          {audio.filename}
        </Text>
        <Ionicons
          style={{
            alignSelf: 'center',
            backgroundColor: 'gray',
            padding: 10,
            borderRadius: 50,
          }}
          name={isPlaying ? 'pause' : 'play'}
          size={24}
          color='white'
          onPress={handleAudioPlayPause}
        />
      </View>
  );
}*/
