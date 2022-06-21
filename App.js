import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Configuracoes from "./src/telas/Configuracoes";
import Informacoes from "./src/telas/Informacoes";
import Categorias from "./src/telas/Categorias";
import Home from "./src/telas/Home";
import { Audio } from "expo-av";

const Stack = createNativeStackNavigator();

export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/Hello.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function pauseSound() {
    const playbackobj = new Audio.Sound();
    const status = await this.state.playbackobj.setStatusAsync({shouldPlay: false});

    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();

  };


  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <NavigationContainer>
      
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Configuracoes" component={Configuracoes} />
        <Stack.Screen name="Informacoes" component={Informacoes} />
        <Stack.Screen name="Categorias" component={Categorias} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

